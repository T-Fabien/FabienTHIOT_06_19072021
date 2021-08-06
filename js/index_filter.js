// Filtre JSON
function photographers_filter(tag) {
  // Cherche la grid
  var mainContainer = document.getElementById("photographers_grid");
  mainContainer.innerHTML = ``;

  for (var i = 0; i < jsondata.photographers.length; i++) {
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
