/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Création des GridCell (page d'accueil)

// Création du html page d'accueil

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

  let TagLinks = ``;
  for (let j = 0; j < tags.length; j += 1) {
    TagLinks += `
        <a tabindex="${3 * i + 7}" href="#" onclick="PhotographersFilter('${
      tags[j]
    }')">
            <p>#${tags[j]}</p>
        </a>
        `;
  }

  // Ajout du HTML

  // eslint-disable-next-line no-param-reassign
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
                <p class="price">${price}€/jour</p>
            </div>
            <div tabindex="${3 * i + 7}" class="tags">
            ${TagLinks}
            </div>
        </div>
        `;
}

function createHomePageHtml(data) {
  // Cherche la grid
  const mainContainer = document.getElementById('photographers_grid');
  mainContainer.innerHTML = ``;
  // Pour TOUT les photographes on crée une Gridcell avec leur contenu
  for (let i = 0; i < data.photographers.length; i += 1) {
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
