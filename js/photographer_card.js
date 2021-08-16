import MediaFactory from "./media.js";
// Récupération du Json

let jsondata;
let link_id;

fetch("../js/data.json")
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    jsondata = data;
    var link = location.search;
    link_id = link.substring(link.lastIndexOf("=") + 1);
    create_photograph_card(link_id);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

// Crée la carte du photographe

function create_photograph_card(link_id) {
  // Cherche la div card
  var photograph_card = document.getElementById("photographers_card");
  photograph_card.innerHTML = ``;
  create_html_photograph_card(
    link_id,
    jsondata.photographers[link_id].id,
    jsondata.photographers[link_id].portrait,
    jsondata.photographers[link_id].name,
    jsondata.photographers[link_id].city,
    jsondata.photographers[link_id].country,
    jsondata.photographers[link_id].tagline,
    jsondata.photographers[link_id].tags,
    photograph_card
  );
}

function create_html_photograph_card(
  i,
  id,
  portrait,
  name,
  city,
  country,
  tagline,
  tags,
  photograph_card
) {
  var tag_links = ``;
  for (var j = 0; j < tags.length; j++) {
    tag_links += `
          <a tabindex="4" href="#">
              <p>#${tags[j]}</p>
          </a>
          `;
  }

  photograph_card.innerHTML += `
            <div class="first_cell article_cell">
                <div tabindex="2">
                    <h1>${name}</h1>
                </div>
                <div tabindex="3">
                    <p class="location">${city}, ${country}</p>
                    <p class="tagline">${tagline}</p>
                </div>
                <div tabindex="4" class="tags">
                ${tag_links}
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

  // Form
  const toggleModal = () => {
    document.querySelector(".modal").classList.toggle("modal--hidden");
  };

  document.querySelector(".close_modal").addEventListener("click", toggleModal);

  document.querySelector("#show-modal").addEventListener("click", toggleModal);

  document.querySelector("#open-form").addEventListener("submit", (event) => {
    event.preventDefault();
    toggleModal();
    var formData = new FormData(document.querySelector("#open-form"));
    console.log(
      "Firstname:" + formData.get("firstname"),
      "Name:" + formData.get("name"),
      "Email:" + formData.get("email"),
      "Message:" + document.getElementById("message").value
    );
  });

  // Select
  document.querySelector("#photo_filter").addEventListener("change", photograph_image);

  // Lightbox
  document.querySelector("#photo_grid").addEventListener('keydown',function(event) {
    switch (event.keyCode) {
        case 37: // Left Arrow
            plusSlides(-1);
            break;
        case 39: //Right Arrow
            plusSlides(1);
            break;
    }
});

  photograph_image();
}

function photograph_image_filter(filter_value) {
  var filter = filter_value;
  var data = [];

  if (filter === "popular") {
    for (var i = 0; i < jsondata.media.length; i++) {
      if (
        jsondata.media[i].photographerId === jsondata.photographers[link_id].id
      ) {
        data.push(jsondata.media[i]);
      }
    }
    data.sort(function (b, a) {
      return a.likes - b.likes;
    });
  }
  if (filter === "date") {
    for (var i = 0; i < jsondata.media.length; i++) {
      if (
        jsondata.media[i].photographerId === jsondata.photographers[link_id].id
      ) {
        data.push(jsondata.media[i]);
      }
    }
    data.sort(function (b, a) {
      return a.date - b.date;
    });
  }
  if (filter === "title") {
    for (var i = 0; i < jsondata.media.length; i++) {
      if (
        jsondata.media[i].photographerId === jsondata.photographers[link_id].id
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

function photograph_image() {
  var Media = new MediaFactory();
  var filter_value = document.getElementById("photo_filter").value;
  var grid = document.getElementById("photo_grid");
  var lightbox = document.getElementById("lightbox-content");
  grid.innerHTML = ``;

  var firstname = jsondata.photographers[link_id].name;
  firstname = firstname.substring(0, firstname.indexOf(" "));
  firstname = firstname.replace(/-/g, " ");

  var filtered_data = [];
  filtered_data = photograph_image_filter(filter_value);

  for (var i = 0; i < filtered_data.length; i++) {
    var Media = new MediaFactory();
    if (filtered_data[i].video === undefined) {
    Media = new MediaFactory('Image');
    } else {
    Media = new MediaFactory('Video');
    }
    grid.innerHTML += Media.grid(firstname, filtered_data, i);
    lightbox.innerHTML += Media.lightbox(firstname, filtered_data, i);
  }
}
