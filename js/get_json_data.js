/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Récupération du Json

let jsondata;

fetch('./js/data.json')
  .then((data) => data.json())
  .then((data) => {
    jsondata = data;
    createHomePageHtml(data);
  })
  .catch((err) => {
    Console.log(`error: ${err}`);
  });
