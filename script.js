let a = document.querySelectorAll('.topnav a');
let len = a.length;

for(let i = 0; i < len; i++){
  a[i].addEventListener('mouseover', function(){
    this.classList.add("expanded");
  });
  
  a[i].addEventListener('mouseout', function(){
    this.classList.remove("expanded");
  });
}
// Liste des épisodes - 30 épisodes au total
const episodes = [
  {
    title: "#01 Kiplink",
    guest: "Antoine Dumas-Martin",
    duration: "65 min",
    image: "images/Antoine Dumas Martinjpg.jpg",
    episodeLink: "https://open.spotify.com/episode/0qZZ6qNVsCQ0jAUaElVXk8?si=66b4f98b6d3649bb"
  },
  {
    title: "#02 L'expert du 0 to 1",
    guest: "Simon Laurent",
    duration: "36 min",
    image: "images/Simon Laurentjpg.jpg",
    episodeLink: "https://open.spotify.com/episode/1RR3p6XsnVJl1sMV0pXG0c?si=b3f0352dc32b4b5e"
  },
  {
    title: "#03 N'ayez pas un égo surdimensionné",
    guest: "Martin Cerbelle",
    duration: "41 min",
    image: "images/Martin Cerbellejpg.jpg",
    episodeLink: "https://open.spotify.com/episode/30UvYvSL4A9PPuXtwTB2r2?si=95114a8480174a9f"
  },
  {
    title: "#04 L'agroalimentaire à portée nationale",
    guest: "Babakar Wade",
    duration: "46 min",
    image: "images/Babakar Wadejpg.jpg",
    episodeLink: "https://open.spotify.com/episode/7cX33hujIsxzL5BAbItvcS?si=6dd23cfa469a4a42"
  },
  {
    title: "#05 Les rencontres sont clés",
    guest: "Rémy Pillot",
    duration: "56 min",
    image: "images/Rémy pillot.jpg",
    episodeLink: "https://open.spotify.com/episode/3Degwdo1h8ctFfXYAuTq7t?si=17058e166d504b91"
  },
  {
    title: "#06 La lean start-up",
    guest: "Benjamin Guéroui",
    duration: "56 min",
    image: "images/Benjamin Gueroui.jpg",
    episodeLink: "https://open.spotify.com/episode/0P769ojR492j7jMzFKsDe9?si=efb12132eab24685"
  },
  {
    title: "#07 IA et entrepreneuriat",
    guest: "Thomas Solignac",
    duration: "60 min",
    image: "images/Thomas Solignac.jpg",
    episodeLink: "https://open.spotify.com/episode/6Stwy9a4TjMLl8uY0HXnB9?si=a32c2be095494743"
  },
  {
    title: "#08 Il faut se lancer !",
    guest: "Olivier de Guyenro",
    duration: "63 min",
    image: "images/Olivier de Guyenro.jpg",
    episodeLink: "https://open.spotify.com/episode/3brdCNuiS4VTR2Wx6YO2lh?si=853f2136383643c6"
  },
  {
    title: "#09 les secrets d'un serial entrepreneur",
    guest: "Fabrice Le Parc",
    duration: "55 min",
    image: "images/Fabrice le parc.jpg",
    episodeLink: "https://open.spotify.com/episode/5Zn4LGR6vezJmwYrj0k09b?si=06c3a20711fb4cb8"
  },
  {
    title: "#10 le textile est plus innovant que l'IA",
    guest: "Norah Luttway",
    duration: "61 min",
    image: "images/Norah Luttway.jpg",
    episodeLink: "https://open.spotify.com/episode/4ZnNk1KDcPXZtGiErVxghV?si=730df5ff00ac4cfa"
  },
  {
    title: "#11 L'IA et l'entrepreneuriat",
    guest: "Thibaud Martin",
    duration: "56 min",
    image: "images/Thibaud Martin.jpg",
    episodeLink: "https://open.spotify.com/episode/1eSyufT7WBiwOxZkBRhxhq?si=3964aeaa9e734518"
  },
  {
    title: "#12 Redéfinir la culture d'entreprise",
    guest: "Olivier Ramel",
    duration: "52 min",
    image: "images/Olivier ramel.jpg",
    episodeLink: "https://open.spotify.com/episode/2eIrt3ey33mYnoPvEeH95Y?si=220c503442924dad"
  },
  {
    title: "#13 Un réseau d'un nouveau genre",
    guest: "Alexandre Leforestier",
    duration: "51 min",
    image: "images/Alexandre leforestier.jpg",
    episodeLink: "https://open.spotify.com/episode/3JiNI4jDshUgFIPLGbyFSe?si=9aea6fc3d13b4b07"
  },
  {
    title: "#14 Un parcours touchant",
    guest: "Frédéric Ventre",
    duration: "45 min",
    image: "images/Frédéric Ventre.jpg",
    episodeLink: "https://open.spotify.com/episode/2E8TYqhkllr1WZKTgPzT5D?si=da8f3da8d1da445e"
  },
  {
    title: "#15 Le prochain centaure à connaître",
    guest: "Dorian Ciavarella",
    duration: "41 min",
    image: "images/Dorian ciavarella.jpg",
    episodeLink: "https://open.spotify.com/episode/3Kt4Yu8HpF9CGsgAjsH5RJ?si=da41c7550a3349b5"
  },
  {
    title: "#16 Un entrepreneur passionné et passionnant",
    guest: "Adrien Chaltiel",
    duration: "50 min",
    image: "images/Adrien chaltiel.jpg",
    episodeLink: "https://open.spotify.com/episode/7w4bsbmmMjSobQOHxXapar?si=6088eade6f994ca0"
  },
  {
    title: "#17 Le futur de l'énergie solaire",
    guest: "Charles Passereau",
    duration: "65 min",
    image: "images/Charles passereau.jpg",
    episodeLink: "https://open.spotify.com/episode/4HUxPRni9bIYrpsvzWV2F9?si=bc5c0b4c29c44733"
  },
  {
    title: "#18 Entrepreneuriat et Écologie",
    guest: "Timothée Saumet",
    duration: "62 min",
    image: "images/Timothée saumet.jpg",
    episodeLink: "https://open.spotify.com/episode/5je5BOkzZEm9qXhwRA9uVi?si=f74c5d8f58524ff0"
  },
  {
    title: "#19 L'univers du Luxe",
    guest: "Jonathan Siboni",
    duration: "63 min",
    image: "images/Jonanthan siboni.jpg",
    episodeLink: "https://open.spotify.com/episode/1q17O0LSZH2WFMRJ6nghF3?si=e2061f55a9214025"
  },
  {
    title: "#20 Tech et retours sur expériences",
    guest: "Philippe Duhamel",
    duration: "81 min",
    image: "images/Philippe duhamel.jpg",
    episodeLink: "https://open.spotify.com/episode/3AExPwefaWwtQLdYccE9QP?si=ff9715cf429d4cbe"
  },
  {
    title: "#21 Entrepreneuriat et Cyber",
    guest: "Fred Raynal",
    duration: "74 min",
    image: "images/Fred raynal.jpg",
    episodeLink: "https://open.spotify.com/episode/5Sz4lLaDQXwZQkA6KX95uD?si=2cc30f50c08e413d"
  },
  {
    title: "#22 Bulldozair, le saas du BTP",
    guest: "Ali El Hariri",
    duration: "84 min",
    image: "images/Ali el hariri.jpg",
    episodeLink: "https://open.spotify.com/episode/1SPAVlKrN5p7PgZQa2XoQ3?si=5e7b51b2d5744d82"
  },
  {
    title: "#23 Faire 125M€ avec du coworking",
    guest: "Clément Alteresco",
    duration: "56 min",
    image: "images/clement alteresco.jpg",
    episodeLink: "https://open.spotify.com/episode/7zbmBpERliqb4RvlTn5UQY?si=ec81d311b09c491c"
  },
  {
    title: "#24 Comment disrupter l'IA ? ",
    guest: "Timothée Emery",
    duration: "62 min",
    image: "images/timothée émery.jpg",
    episodeLink: "https://open.spotify.com/episode/3IvX9olN8SfaV4Ai0Wt8uE?si=5a844b5627254e76"
  },
  {
    title: "#25 L'app No1 pour l'immobilier",
    guest: "Marc Lebel",
    duration: "55 min",
    image: "images/marc lebel.jpg",
    episodeLink: "https://open.spotify.com/episode/7vEOiKcT1qdo0JvBFZNnkb?si=754d514e4f784010"
  },
  {
    title: "ToolBox#1 L'import export",
    guest: "Charles Dridi",
    duration: "61 min",
    image: "images/charles dridi.jpg",
    episodeLink: "https://open.spotify.com/episode/6rVRWV64VYYK0Yiv48nkls?si=06551312727c40bd"
  },
  {
    title: "#26 Toucher des millions de personnes",
    guest: "Farid Arab",
    duration: "74 min",
    image: "images/farid arab.jpg",
    episodeLink: "https://open.spotify.com/episode/08ufmQ3URNqKX9j8u8bkMq?si=ca625f6605b84bb1"
  },
  {
    title: "#27 Ne laissez pas votre argent mourir",
    guest: "Alexandre Valenscak",
    duration: "62 min",
    image: "images/alexandre valenscak.jpg",
    episodeLink: "https://open.spotify.com/episode/66KcnWCeHTmm7pAGP3JhhE?si=be4357f772064bfe"
  },
  {
    title: "Toolbox#2 Se faire financer en France",
    guest: "Romain Baranger",
    duration: "61 min",
    image: "images/romain baranger.jpg",
    episodeLink: "https://open.spotify.com/episode/3lTIc4T4IG9LeFlH5xoyH9?si=199437715c834e69"
  },
  {
    title: "#28 Il réinvente l'autopartage à moins de 30 ans",
    guest: "Antonin Boubée",
    duration: "70 min",
    image: "images/antonin boubée.jpg",
    episodeLink: "https://open.spotify.com/episode/415PEktjkXAVD6PpM0eN2y?si=c13e71c57f17488f"
  },
  {
    title: "#29 levée de 6.5M€ pour la startup tech de l'année",
    guest: "Mickael Braconnier",
    duration: "81 min",
    image: "images/mickael braconnier.jpg",
    episodeLink: "https://open.spotify.com/episode/0VOx4ZcVHKQNAvSjTiBm8J?si=123992e4cfb14d26"
  },
  {
    title: "#30 15 années d'expériences pour superperformer",
    guest: "Pascaline Bertaux",
    duration: "53 min",
    image: "images/pascaline bertaux.jpg",
    episodeLink: "https://open.spotify.com/episode/4YXSB2299lUoGlkM6zBbgH?si=bcf7ed2e151b4e40"
  },
  {
    title: "#31 L'IA au service de l'entreprise",
    guest: "Mehdi El Azhari",
    duration: "36 min",
    image: "images/mehdi el azhari.jpg",
    episodeLink: "https://open.spotify.com/episode/1D7HFadMQiF4eiu4PfDzuZ?si=865cfcd435ab4c28"
  },
  {
    title: "#32 Le CEO qui aide les CEO",
    guest: "Éric Devaulx",
    duration: "80 min",
    image: "images/eric devaulx.jpg",
    episodeLink: "https://open.spotify.com/show/5VC9tutkSSnTjxGRcTlxU1?si=249a45d350a24e9c"
  },
  {
    title: "#33 On réussit des business",
    guest: "Benoît Vasseur",
    duration: "81 min",
    image: "images/benoit vasseur.jpg",
    episodeLink: "https://open.spotify.com/show/5VC9tutkSSnTjxGRcTlxU1?si=94ccde92d0194e54"
  },
];


// Inverser l'ordre des épisodes pour afficher les plus récents en premier
const reversedEpisodes = episodes.reverse();

// Pagination parameters
let currentPage = 1;
let episodesPerPage = 6; // Valeur par défauts

function adjustEpisodesPerPage() {
  if (window.matchMedia("(max-width: 500px)").matches) {
    episodesPerPage = 4; // Si l'écran est inférieur à 768px de large, afficher 3 épisodes par page
  } else {
    episodesPerPage = 6; // Sinon, afficher 6 épisodes par page
  }

  // Appelle la fonction de réaffichage pour appliquer le changement
  displayEpisodes(currentPage);
}

// Appelle cette fonction au chargement de la page pour vérifier la taille initiale
window.addEventListener('load', adjustEpisodesPerPage);

// Appelle cette fonction à chaque redimensionnement de l'écran
window.addEventListener('resize', adjustEpisodesPerPage);


// Fonction pour créer une card HTML en utilisant innerHTML
function createCard(episode) {
  const card = document.createElement('div');
  card.classList.add('card');
  
  // Insérer le contenu de la carte directement en HTML
  card.innerHTML = `
  <a href="${episode.episodeLink}" target="_blank">
  <img src="${episode.image}" alt="Photo de l'invité ${episode.guest}" class="guest-image" />
  <div class="card-content">
  <h2 class="episode-title">${episode.title}</h2>
  <p class="guest-name">Invité: ${episode.guest}</p>
  <p class="episode-duration">Durée: ${episode.duration}</p>
  </div>
  </a>
  `;
  
  return card;
}


// Fonction pour afficher les épisodes en fonction de la page actuelle
function displayEpisodes(page) {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = ''; // Vide le container avant d'ajouter les nouvelles cards
  
  const startIndex = (page - 1) * episodesPerPage;
  const endIndex = startIndex + episodesPerPage;
  const episodesToDisplay = reversedEpisodes.slice(startIndex, endIndex);
  
  episodesToDisplay.forEach(episode => {
    const card = createCard(episode);
    cardContainer.appendChild(card);
  });
  
  // Met à jour le numéro de la page
  document.getElementById('page-number').textContent = page;
  
  // Gère l'état des boutons
  document.getElementById('prev-btn').disabled = page === 1;
  document.getElementById('next-btn').disabled = page === totalPages;
}

// Gestion des événements des boutons de pagination
document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayEpisodes(currentPage);
  }
});

document.getElementById('next-btn').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayEpisodes(currentPage);
  }
});

// Affiche les épisodes de la première page au chargement
document.addEventListener('DOMContentLoaded', () => {
  displayEpisodes(currentPage);
});


let BurgerMenuLinks = document.getElementById('BurgerMenuLinks');


function ShowMenu() {
  BurgerMenuLinks.style.display = 'flex';
  BurgerMenuLinks.style.left = '0px';
};
function HideMenu() {
  BurgerMenuLinks.style.display = 'none';
};
const totalPages = Math.ceil(reversedEpisodes.length / episodesPerPage);