// Création des GridCell (page d'accueil)

// Création du html page d'accueil

function createHomePageHtml(data) {
  // Cherche la grid
  var mainContainer = document.getElementById("photographers_grid");
  mainContainer.innerHTML = ``;
  // Pour TOUT les photographes on crée une Gridcell avec leur contenu
  for (var i = 0; i < data.photographers.length; i++) {
    createGridCell(
      i,
      data.photographers[i].id,
      data.photographers[i].portrait,
      data.photographers[i].name,
      data.photographers[i].city,
      data.photographers[i].country,
      data.photographers[i].tagline,
      data.photographers[i].price,
      data.photographers[i].tags,
      mainContainer
    );
  }
}

function createGridCell(
  i,
  id,
  portrait,
  name,
  city,
  country,
  tagline,
  price,
  tags,
  mainContainer
) {
  // Boucle des liens

  var tag_links = ``;
  for (var j = 0; j < tags.length; j++) {
    tag_links += `
        <a tabindex="${3 * i + 7}" href="#" onclick="photographers_filter('${tags[j]}')">
            <p>#${tags[j]}</p>
        </a>
        `;
  }

  // Ajout du HTML

  mainContainer.innerHTML += `
        <div class="gridcell" role="cell" aria-rowindex="${i + 1}">
            <div tabindex="${3 * i + 5}">
                <a href="./webpages/photographer_page.html?ID=${i}" class="lien_photographes lien_${portrait}" onclick="create_photograph_card('${name}')">
                    <img src="./images/Photographers ID Photos/${portrait}" alt="Portrait de ${name}">
                    <h2>${name}</h2>
                </a>
            </div>
            <div tabindex="${3 * i + 6}">
                <p class="location">${city}, ${country}</p>
                <p class="tagline">${tagline}</p>
                <p class="price">${price}/jour</p>
            </div>
            <div tabindex="${3 * i + 7}" class="tags">
            ${tag_links}
            </div>
        </div>
        `;
}
