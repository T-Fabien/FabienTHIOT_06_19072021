// Création des GridCell (page d'accueil)

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
        <a tabindex="${3 * i + 7}" href="#" onclick="test('${tags[j]}'")>
            <p>#${tags[j]}</p>
        </a>
        `;
  }

  // Ajout du HTML

  mainContainer.innerHTML += `
        <div class="gridcell" role="cell" aria-rowindex="${i + 1}">
            <div tabindex="${3 * i + 5}">
                <a href="#" class="lien_photographes lien_${portrait}">
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
