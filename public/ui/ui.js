/* ui.js — petits outils communs à mes sites. Script classique : expose window.UI.
   <script src="/static/ui/ui.js" defer></script> à placer avant le script du site.

   UI.el(tag, attrs, ...enfants)      crée un élément (attrs : class, onclick…, aria-*, data-*)
   UI.api(chemin, {methode, corps})   appel JSON ; ajoute l'en-tête X-Requested-With pour les écritures,
                                      lève une Error avec le message renvoyé par le serveur
   UI.toast(msg, {erreur, action})    message en bas d'écran (action = {label, fn})
   UI.moi()                           identité de la personne connectée (/api/moi) ou null
   UI.dates                           versJour, ajouterJours, ecartJours, fmt, relatif (fuseau ignoré : jours « AAAA-MM-JJ »)
*/
(function () {
  'use strict';

  function el(tag, attrs, ...enfants) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === 'class') n.className = v;
      else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? '' : v);
    }
    for (const e of enfants.flat()) if (e != null) n.append(e instanceof Node ? e : document.createTextNode(String(e)));
    return n;
  }

  // En-tête obligatoire pour toute écriture : un autre site ne peut pas l'envoyer sans autorisation CORS.
  const ENTETE_ECRITURE = 'X-Requested-With';

  async function api(chemin, { methode = 'GET', corps } = {}) {
    const opts = { method: methode, headers: { Accept: 'application/json' }, cache: 'no-store' };
    if (methode !== 'GET') opts.headers[ENTETE_ECRITURE] = 'ui';
    if (corps !== undefined) {
      opts.headers['Content-Type'] = 'application/json';
      opts.body = JSON.stringify(corps);
    }
    const r = await fetch(chemin, opts);
    if (r.status === 204) return null;
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(data.erreur || `erreur ${r.status}`);
    return data;
  }

  let minuteur;
  function toast(msg, { erreur = false, action } = {}) {
    let t = document.getElementById('ui-toast');
    if (!t) {
      t = el('p', { id: 'ui-toast', class: 'toast', role: 'status', hidden: true });
      document.body.append(t);
    }
    t.replaceChildren(msg);
    t.className = `toast${erreur ? ' toast--erreur' : ''}`;
    if (action) {
      t.append(el('button', { type: 'button', class: 'btn btn--small', onclick: () => { t.hidden = true; action.fn(); } }, action.label));
    }
    t.hidden = false;
    clearTimeout(minuteur);
    minuteur = setTimeout(() => { t.hidden = true; }, action ? 6000 : 3000);
  }

  async function moi() {
    try {
      const r = await fetch('/api/moi', { redirect: 'manual', headers: { Accept: 'application/json' }, cache: 'no-store' });
      return r.ok ? await r.json() : null;
    } catch { return null; }
  }

  // Dates en jours « AAAA-MM-JJ », calculées à midi UTC pour éviter les décalages d'heure.
  const versDate = (j) => new Date(`${j}T12:00:00Z`);
  const versJour = (d) => d.toISOString().slice(0, 10);
  const dates = {
    versDate,
    versJour,
    ajouterJours: (j, n) => { const d = versDate(j); d.setUTCDate(d.getUTCDate() + n); return versJour(d); },
    ecartJours: (a, b) => Math.round((versDate(b) - versDate(a)) / 864e5),
    fmt: (j, opts) => versDate(j).toLocaleDateString('fr-FR', { timeZone: 'UTC', ...opts }),
    relatif(j, aujourdhui) {
      const n = dates.ecartJours(aujourdhui, j);
      if (n === 0) return "aujourd'hui";
      if (n === -1) return 'hier';
      if (n === 1) return 'demain';
      return n < 0 ? `il y a ${-n} jours` : `dans ${n} jours`;
    },
  };

  window.UI = Object.freeze({ el, api, toast, moi, dates, version: '1.3.0' });
})();
