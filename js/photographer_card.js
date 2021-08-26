/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import MediaFactory from './Media.js';

// Récupération du Json

let jsondata;
let LinkId;

// Filtre Images
function PhotographMediaFilter(FilterValue) {
  const filter = FilterValue;
  const data = [];

  if (filter === 'popular') {
    for (let i = 0; i < jsondata.media.length; i += 1) {
      if (
        jsondata.media[i].photographerId === jsondata.photographers[LinkId].id
      ) {
        data.push(jsondata.media[i]);
      }
    }
    data.sort((b, a) => a.likes - b.likes);
  }
  if (filter === 'date') {
    for (let i = 0; i < jsondata.media.length; i += 1) {
      if (
        jsondata.media[i].photographerId === jsondata.photographers[LinkId].id
      ) {
        data.push(jsondata.media[i]);
      }
    }
    data.sort((b, a) => a.date - b.date);
  }
  if (filter === 'title') {
    for (let i = 0; i < jsondata.media.length; i += 1) {
      if (
        jsondata.media[i].photographerId === jsondata.photographers[LinkId].id
      ) {
        data.push(jsondata.media[i]);
      }
    }
    data.sort((a, b) => {
      if (a.title < b.title) return -1;
      return a.title > b.title ? 1 : 0;
    });
  }

  return data;
}

function PhotographMedia() {
  const FilterValue = document.getElementById('photo_filter').value;
  const grid = document.getElementById('photo_grid');
  const lightbox = document.getElementById('lightbox-content');
  const TotalLikesDiv = document.getElementById('total-likes');
  grid.innerHTML = ``;

  let firstname = jsondata.photographers[LinkId].name;
  firstname = firstname.substring(0, firstname.indexOf(' '));
  firstname = firstname.replace(/-/g, ' ');

  let FilteredData = [];
  FilteredData = PhotographMediaFilter(FilterValue);

  let totalLikes = 0;

  for (let i = 0; i < FilteredData.length; i += 1) {
    let Media = new MediaFactory();
    if (FilteredData[i].video === undefined) {
      Media = new MediaFactory('Image');
    } else {
      Media = new MediaFactory('Video');
    }
    grid.innerHTML += Media.grid(firstname, FilteredData, i);
    lightbox.innerHTML += Media.lightbox(firstname, FilteredData, i);
    totalLikes += FilteredData[i].likes;
  }

  TotalLikesDiv.innerHTML = `<p>${totalLikes}</p>
  <i class="fas fa-heart heart heart-global"></i>`;
}

// Crée la carte du photographe

function CreateHtmlPhotographCard(
  i,
  id,
  portrait,
  name,
  city,
  country,
  tagline,
  tags,
  price,
  PhotographCard
) {
  let TagLinks = ``;
  for (let j = 0; j < tags.length; j += 1) {
    TagLinks += `
          <a tabindex="4" href="#">
              <p>#${tags[j]}</p>
          </a>
          `;
  }

  // eslint-disable-next-line no-param-reassign
  PhotographCard.innerHTML += `
            <div class="first_cell article_cell">
                <div tabindex="2">
                    <h1>${name}</h1>
                </div>
                <div tabindex="3">
                    <p class="location">${city}, ${country}</p>
                    <p class="tagline">${tagline}</p>
                </div>
                <div tabindex="4" class="tags">
                ${TagLinks}
                </div>
            </div>
            <div class="second_cell article_cell">
            <div class="open-btn">
            <button id="show-modal" tabindex="5">Contactez-moi</button>
          </div>
          <div class="modal modal--hidden">
            <div class="modal_contents">
              <form id="open-form">
                <div class="form_title">
                <h1>Contactez-moi ${name}</h1>
                <span class="close_modal" aria-label="fermer la modale">X</span>
                </div>
                <div>
                <label for="firstname">Prénom</label><input type="text" id="firstname" name="firstname" placeholder="Prénom" aria-labelledby="First name" />
                </div>
                <div>
                <label for="name">Nom</label><input type="text" id="name" name="name" placeholder="Nom" aria-labelledby="Last name"/>
                </div>
                <div>
                <label for="email">Email</label><input type="text" id="email" name="email" placeholder="VotreEmail@email.com" aria-labelledby="Email"/>
                </div>
                <div>
                <label for="message">Votre message</label><textarea id="message" placeholder="Message" aria-labelledby="Your message"></textarea>
                </div>
                <button aria-label="Send">Envoyer</button>
              </form>
            </div>
          </div>
          </div>
        <div class="third_cell article_cell">
        <img src="../images/Photographers ID Photos/${portrait}" alt="${name}" tabindex="6">
        </div>
        </div>
        `;

  const PriceContainer = document.getElementById('price');
  PriceContainer.innerHTML = `<p> ${price} € / jour </p>`;

  // Form
  const toggleModal = () => {
    document.querySelector('.modal').classList.toggle('modal--hidden');
  };

  document.querySelector('.close_modal').addEventListener('click', toggleModal);

  document.querySelector('#show-modal').addEventListener('click', toggleModal);

  document.querySelector('#open-form').addEventListener('submit', (event) => {
    event.preventDefault();
    toggleModal();
    const formData = new FormData(document.querySelector('#open-form'));
    console.log(
      `Firstname:${formData.get('firstname')}`,
      `Name:${formData.get('name')}`,
      `Email:${formData.get('email')}`,
      `Message:${document.getElementById('message').value}`
    );
  });

  // Select
  document
    .querySelector('#photo_filter')
    .addEventListener('change', PhotographMedia);

  // Lightbox
  document.querySelector('#photo_grid').addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case 37: // Left Arrow
        plusSlides(-1);
        break;
      case 39: // Right Arrow
        plusSlides(1);
        break;
      default:
        break;
    }
  });

  PhotographMedia();
}

// eslint-disable-next-line no-shadow
function CreatePhotographCard(LinkId) {
  // Cherche la div card
  const PhotographCard = document.getElementById('photographers_card');
  PhotographCard.innerHTML = ``;
  CreateHtmlPhotographCard(
    LinkId,
    jsondata.photographers[LinkId].id,
    jsondata.photographers[LinkId].portrait,
    jsondata.photographers[LinkId].name,
    jsondata.photographers[LinkId].city,
    jsondata.photographers[LinkId].country,
    jsondata.photographers[LinkId].tagline,
    jsondata.photographers[LinkId].tags,
    jsondata.photographers[LinkId].price,
    PhotographCard
  );
}

fetch('../js/data.json')
  .then((data) => data.json())
  .then((data) => {
    jsondata = data;
    const link = location.search;
    LinkId = link.substring(link.lastIndexOf('=') + 1);
    CreatePhotographCard(LinkId);
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });
