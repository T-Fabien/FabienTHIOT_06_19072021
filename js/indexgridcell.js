// Création des GridCell (page d'accueil)

function createGridCell(i,id, portrait, name, city, country, tagline, price, tags, mainContainer){
    // Création d'une GridCell
    var div_GridCell = document.createElement("div");

    // Ajouts des Attributs
    div_GridCell.className = "gridcell"
    div_GridCell.setAttribute("role", "cell")
    div_GridCell.ariaRowIndex = i+1;

    // Remplissage de la GridCell
        // Création de la Premiere partie de la GridCell
        var gridCellFirstPart = document.createElement("div");

        // Ajouts des Attributs
        gridCellFirstPart.ariaRowIndex = 5;

        // Ajouts du Contenu
            // Création du Portrait
            var image = document.createElement("img");

            // Ajouts des Attributs (Portrait)
            image.src = "./images/Photographers ID Photos/" + portrait;
            image.alt = "Portrait de " + name 

            // Création du Titre (Nom)
            var title_name = document.createElement("h2");

            // Ajouts des Attributs (Nom)
            title_name.innerHTML = name

            // Placements des elements
            gridCellFirstPart.appendChild(image);
            gridCellFirstPart.appendChild(title_name);

        // Placement de la Premiere partie dans sa GridCell
        div_GridCell.appendChild(gridCellFirstPart);

        // - * - * - * - * - * - SECOND PART OF GRID CELL - * - * - * - * - * - //

        // Création de la Seconde partie de la GridCell
        var gridCellSecondPart = document.createElement("div");

        // Ajouts des Attributs
        gridCellSecondPart.ariaRowIndex = 6;

        // Ajouts du Contenu
            // Création de la Localisation
            var location = document.createElement("p");

            // Ajouts des Attributs (Localisation)
            location.className = "location";
            location.innerHTML = city + ", " + country

            // Création de la Tagline
            var sentence = document.createElement("p");

            // Ajouts des Attributs (Tagline)
            sentence.className = "tagline"
            sentence.innerHTML = tagline

            // Création du prix
            var cost = document.createElement("p");

            // Ajouts des Attributs (prix)
            cost.className = "price"
            cost.innerHTML = price + "€/jour"

            // Placement des elements
            gridCellSecondPart.appendChild(location);
            gridCellSecondPart.appendChild(sentence);
            gridCellSecondPart.appendChild(cost);


        // Placement de la Seconde partie dans sa GridCell
        div_GridCell.appendChild(gridCellSecondPart);


        // - * - * - * - * - * - THIRD PART OF GRID CELL - * - * - * - * - * - //

        // Création de la Troisième partie de la GridCell
        var gridCellThirdPart = document.createElement("div");

        // Ajouts des Attributs
        gridCellThirdPart.ariaRowIndex = 7;
        gridCellThirdPart.className = "tags";

        // Ajouts du Contenu
            // Création des liens
            for (var i = 0; i < tags.length; i++) {
                // Création du lien
                var tag_link = document.createElement("a")

                // Ajouts des Attributs (Tagline)
                tag_link.tabIndex = 7;
                tag_link.href = "#";

                    // Création du Contenu du lien
                    var tag = document.createElement("p")

                    // Ajouts des Attributs (Tagline)
                    tag.innerHTML = "#" + tags[i];

                    // Placement du tag
                    tag_link.appendChild(tag);

                // Placement du Lien
                gridCellThirdPart.appendChild(tag_link);

            }

        // Placement de la Seconde partie dans sa GridCell
        div_GridCell.appendChild(gridCellThirdPart);

    // Placement de la GridCell
    mainContainer.appendChild(div_GridCell);
}