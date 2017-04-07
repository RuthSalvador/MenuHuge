var coders = ["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia","Miriam Perralta","Elizabeth Condori",
"Arantza Burga","Grecia Rayme","Janine Vega","Rosario Felix","Daguiana Revoredo","Jenny Velasquez","Nadia Cuadros",
"Michell More","Marilu Llamocca","Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera","Stephanie Hiyagon",
"Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco","Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello",
"Leslie Avendaño","Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez","Nakarid Jave","Angie Cóndor",
"Maricarmen Rojas","Ariana Cabana","Flor Condori","Mitch Rodríguez","Naomi Villanueva","Mari Castillo","Miriam Peralta",
"Karin Alejo","Liliana Peña","Ruth Salvador","Maribel","Wendy Reyes","Cinthia","Maria Grecia Cutipa","Ana Durand",
"Glisse Jorge","Neiza Nuñez","Sandra Solorzano"];

function addFigure(array){
  for (var i = 0; i < array.length; i++) {
    var principal = document.getElementById("section-principal");
    var figure = document.createElement("figure");
    figure.setAttribute("class","figure-coder figure-hov");
    principal.appendChild(figure);
    var image = document.createElement("img");
    image.setAttribute("src","assets/img/students/"+ (i+1) + ".png");
    image.setAttribute("title",array[i]);
    image.setAttribute("class","image-coder");
    figure.appendChild(image);
    var title = document.createElement("figcaption");
    title.setAttribute("class","name-coder");
    figure.appendChild(title);
    var nomApe = document.createElement("p");
    nomApe.setAttribute("class","nombre");
    title.appendChild(nomApe);
    nomApe.appendChild(document.createTextNode(array[i]));
  }
}

addFigure(coders);
