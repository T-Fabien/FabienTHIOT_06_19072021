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
          <a tabindex="${3 * i + 7}" href="#">
              <p>#${tags[j]}</p>
          </a>
          `;
  }

  photograph_card.innerHTML += `
            <div class="first_cell article_cell">
                <div tabindex="${3 * i + 5}">
                    <h1>${name}</h1>
                </div>
                <div tabindex="${3 * i + 6}">
                    <p class="location">${city}, ${country}</p>
                    <p class="tagline">${tagline}</p>
                </div>
                <div tabindex="${3 * i + 7}" class="tags">
                ${tag_links}
                </div>
            </div>
            <div class="second_cell article_cell">
            <button>Contactez-moi</button>
            </div>
            <div class="third_cell article_cell">
            <img src="../images/Photographers ID Photos/${portrait}" alt="Portrait de ${name}">
            </div>
        </div>
        `;

  image_filter(id, name);
}

function image_filter(photographerId, name) {
  var grid = document.getElementById("photo_grid");
  var firstname = name.substring(0, name.indexOf(" "));

  for (var i = 0; i < jsondata.media.length; i++) {
    if (jsondata.media[i].photographerId === photographerId) {
      grid.innerHTML += `
    <article class="gridcell" role="cell">
        <img src="../images/${firstname}/${jsondata.media[i].image.replace(/\s/g,'_')}" alt="Portrait de ${name}">
            <div tabindex="${3 * i + 6}" class="photo_desc">
                <p class="photo_name">${jsondata.media[i].title}</p>
                <p class="like">${jsondata.media[i].likes}<i class="fas fa-heart"></i></p> 
            </div>
    </article>
    `;
    }
  }
}

