// Récupération du Json

let jsondata;
fetch("./js/data.json")
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    jsondata = data;
    createHomePageHtml(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

// Utilisation du Json

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

// Filtre JSON
function test(tag) {
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
