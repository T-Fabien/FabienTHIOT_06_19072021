/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Filtre JSON
function PhotographersFilter(tag) {
  // Cherche la grid
  const mainContainer = document.getElementById('photographers_grid');
  mainContainer.innerHTML = ``;

  for (let i = 0; i < jsondata.photographers.length; i += 1) {
    if (jsondata.photographers[i].tags.includes(tag)) {
      createGridCell(
        i,
        jsondata.photographers[i].id,
        jsondata.photographers[i].portrait,
        jsondata.photographers[i].name,
        jsondata.photographers[i].city,
        jsondata.photographers[i].country,
        jsondata.photographers[i].tagline,
        jsondata.photographers[i].price,
        jsondata.photographers[i].tags,
        mainContainer
      );
    }
  }
}
