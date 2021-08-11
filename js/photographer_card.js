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
            <button id="show-modal">Contactez-moi</button>
          </div>
          <div class="modal modal--hidden">
            <div class="modal_contents">
              <form id="open-form">
                <div class="form_title">
                <h1>Contactez-moi ${name}</h1>
                <span class="close_modal" aria-label="fermer la modale">X</span>
                </div>
                <label for="firstname">Prénom</label><input type="text" name="firstname" placeholder="Prénom" aria-labelledby="First name">
                <label for="name">Nom</label><input type="text" name="name" placeholder="Nom" aria-labelledby="Last name">
                <label for="email">Email</label><input type="text" name="email" placeholder="VotreEmail@email.com" aria-labelledby="Email">
                <label for="message">Votre message</label><textarea placeholder="Message"aria-labelledby="Your message"></textarea>
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
      "Message:" + formData.get("message")
    );
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
    if (filtered_data[i].video === undefined) {
      grid.innerHTML += `
        <article class="gridcell" role="cell">
        <img tabindex="10" src="../images/${firstname}/${filtered_data[
        i
      ].image.replace(/[-\s]/g, "_")}" alt="${
        filtered_data[i].title
      }" onclick="openModal();currentSlide(${i + 1})">
                <div tabindex="11" class="photo_desc">
                    <p class="photo_name">${filtered_data[i].title}</p>
                    <p class="like">${
                      filtered_data[i].likes
                    }<i class="fas fa-heart" aria-label="likes"></i></p> 
                </div>
        </article>
        `;
      lightbox.innerHTML += `
        <div class="mySlides">
            <img src="../images/${firstname}/${filtered_data[i].image.replace(
        /[-\s]/g,
        "_"
      )}" alt="${filtered_data[i].title}">
      <p class="photo_name">${filtered_data[i].title}</p>
          </div>
        `;
    } else {
      grid.innerHTML += `
    <article class="gridcell" role="cell">
        <video controls tabindex="10">
            <source src="../images/${firstname}/${
        filtered_data[i].video
      }" type="video/mp4" onclick="openModal();currentSlide(${i + 1})">
        </video>
            <div tabindex="11" class="photo_desc">
                <p class="photo_name">${filtered_data[i].title}</p>
                <p class="like">${
                  filtered_data[i].likes
                }<i class="fas fa-heart"></i></p> 
            </div>
    </article>
    `;
      lightbox.innerHTML += `
    <div class="mySlides">
        <video controls tabindex="10">
        <source src="../images/${firstname}/${filtered_data[i].video}" type="video/mp4">
    </video>
    <p class="photo_name">${filtered_data[i].title}</p>
      </div>
    `;
    }
  }
}

class MediaFactory {
  constructor(type) {
    switch (type) {
      case "image":
        return new Image();
      case "video":
        return new Video();
    }
  }
}

class Image {
  constructor() {
    return `<img tabindex=0 class )=`;
  }
}
class Video {
  constructor() {
    return `<video controls type= "video/mp4" tabindex=0 class )=`;
  }
}

// export default MediaFactory;
