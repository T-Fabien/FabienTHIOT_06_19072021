// Récupération du Json
fetch('./js/data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

// Utilisation du Json

        function appendData(data) {
            // Cherche la grid
            var mainContainer = document.getElementById("photographers_grid");
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
                )
            }
        }

        