// Tout le texte du site est ici : modifie ce fichier pour mettre à jour le contenu.

export const profil = {
  nom: 'Antoine Bouclier',
  titre: 'Développeur web',
  accroche: 'Du serveur au navigateur.',
  intro:
    "Je conçois des applications web et l'infrastructure qui les fait tourner. " +
    "Formé au développement web puis à l'École 42, j'aime comprendre ce qui se passe sous le capot : " +
    'du serveur HTTP écrit en C++ au déploiement en conteneurs.',
  email: 'antoinebouclier1@gmail.com',
  github: 'https://github.com/Antoine-Bouclier',
  linkedin: 'https://www.linkedin.com/in/antoine-bouclier-4b206112a/',
};

export type Projet = {
  nom: string;
  description: string;
  tags: string[];
  site?: string;
  code?: string;
  codeLabel?: string;
  prive?: boolean; // projet privé : étiquette « projet privé », pas de lien
};

export const projets: Projet[] = [
  {
    nom: 'Recettes',
    description:
      'Une application pour enregistrer ses recettes et les suivre en cuisinant : chaque étape se coche, ' +
      'un minuteur se lance en un clic, et une recette déjà ouverte reste utilisable sans connexion. ' +
      "Elle s'installe sur l'écran d'accueil du téléphone.",
    tags: ['Django', 'Django REST', 'PostgreSQL', 'JavaScript', 'PWA', 'Docker'],
    site: 'https://recettes.antoine-bouclier.fr',
    code: 'https://github.com/Antoine-Bouclier/recipes_app',
  },
  {
    nom: 'Todo',
    description:
      'Une to-do list journalière : des tâches à cocher jour par jour, un aperçu des 30 derniers jours en calendrier, ' +
      'des favoris pour reprendre une tâche en un clic et le report d’une tâche à la date de son choix. ' +
      'Ouverte à tous : on crée un compte et chacun a sa propre liste, grâce à la connexion unique de mes sites.',
    tags: ['Python', 'Flask', 'SQLite', 'JavaScript', 'Authentik', 'Docker'],
    site: 'https://todo.antoine-bouclier.fr',
  },
  {
    nom: 'Webserv',
    description:
      'Un serveur HTTP/1.1 écrit en C++98, en binôme. Une seule boucle poll() gère toutes les connexions sans jamais bloquer. ' +
      'Il prend en charge GET, POST et DELETE, les envois en plusieurs morceaux (chunked), les scripts CGI, ' +
      "les redirections et les pages d'erreur personnalisées.",
    tags: ['C++98', 'Sockets', 'HTTP/1.1', 'CGI', 'poll()'],
    code: 'https://github.com/Antoine-Bouclier/WebServ',
  },
];

export type Projet42 = { nom: string; resume: string; lien: string };

export const projets42: Projet42[] = [
  { nom: 'inception', resume: 'Une pile Nginx, WordPress et MariaDB montée avec Docker, chaque image construite à partir de Debian.', lien: 'https://github.com/Antoine-Bouclier/Inception' },
  { nom: 'cub3d', resume: 'Un moteur 3D par lancer de rayons, en C.', lien: 'https://github.com/Antoine-Bouclier/cub3d' },
  { nom: 'philosophers', resume: 'Le dîner des philosophes : threads, mutex et accès concurrents.', lien: 'https://github.com/Antoine-Bouclier/philosophers' },
  { nom: 'CPP00 → CPP09', resume: 'Les modules C++ : classes, héritage, templates, conteneurs de la STL.', lien: 'https://github.com/Antoine-Bouclier/CPP09' },
  { nom: 'push_swap', resume: 'Trier une pile avec un jeu d’opérations limité, en un minimum de coups.', lien: 'https://github.com/Antoine-Bouclier/push_swap' },
  { nom: 'born2beroot', resume: 'Installer et sécuriser une machine virtuelle Debian.', lien: 'https://github.com/Antoine-Bouclier/born2beroot' },
];

export type Etape = { periode: string; titre: string; lieu: string; detail: string };

// Du plus récent au plus ancien.
export const parcours: Etape[] = [
  {
    periode: '2024 → auj.',
    titre: 'Cursus de développement',
    lieu: 'École 42',
    detail: 'Programmation système et réseau en C et C++ : shell, threads, serveur HTTP, conteneurs.',
  },
  {
    periode: '2023',
    titre: 'Formation développement web et web mobile',
    lieu: "O'clock",
    detail:
      'Préparation au titre professionnel Développeur Web et Web Mobile. ' +
      'HTML, CSS et JavaScript côté front ; PHP avec Symfony et Laravel côté back.',
  },
  {
    periode: '2022',
    titre: 'Chemin de Saint-Jacques-de-Compostelle',
    lieu: 'En marche',
    detail: 'Des semaines de marche pour prendre du recul et choisir ma voie : ce sera le développement.',
  },
  {
    periode: '2015 → 2021',
    titre: 'Commerce et communication',
    lieu: 'Haute-Savoie et Lyon',
    detail:
      'Vente, responsable de magasin, rédaction web et community management. ' +
      "J'en garde le sens du client et l'organisation.",
  },
];

export const competences: { groupe: string; items: string[] }[] = [
  { groupe: 'Front-end', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Astro'] },
  { groupe: 'Back-end', items: ['Python', 'Django', 'PHP', 'Symfony', 'Laravel', 'API REST'] },
  { groupe: 'Systèmes', items: ['C', 'C++', 'Linux', 'Bash', 'Sockets', 'Threads'] },
  { groupe: 'Infra & données', items: ['Docker', 'Nginx', 'Traefik', 'PostgreSQL', 'MariaDB', 'Git'] },
];
