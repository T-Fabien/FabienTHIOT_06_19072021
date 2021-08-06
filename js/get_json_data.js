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