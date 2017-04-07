var coders = ["Flor Retamozo","Magali Zambrano","Ayda Sulca","Maria Jave","Dana Franco","Jenny Velasquez",
"Milagros Gonzales","Wendy Reyes","Janine Vega","Nathaly Pacheco","Aslheys Cabana","Maricarmen Rojas",
"Katherine Ortega","Yelitza Choque","Sandra Solorzano","Schelsen Majuan","Arantza Burga","Neiza Nuñez",
"Rocio Tapia","Elizabeth Condori","Nadia Cuadros","Mary Castillo","Geraldine Chauca","Maria Cutipa",
"Mitchell Rodriguez","Cindy Mendoza","Grecia Rayme","Stephanie Hiyagon","Angie Condor","Erika Vidal",
"Eliana Silva","Mariel Garcia","Betsi Loayza","Fiorella Cisneros","Ingrid More","Karin Alejo","Luz Gutierrez",
"Naomi Villanueva","Flor Condori","Miriam Mendoza","Liliana Peña","Rosario Felix","Leidy Maldonado","Annia Flores",
"Fiorella Quispe","Miriam Peralta","Flor Tello","Leslie Avendaño","Ruth Salvador",
"Ana Durand","Glisse Jorge","Maria Vilchez","Mery Cardenas","Marilu Llamocca"];

function addFigure(array){
  for (var i = 0; i < array.length; i++) {
    var principal = document.getElementById('section-principal');
    var figure = document.createElement('figure');
    principal.appendChild(figure);
    var image = document.createElement("img");
    image.setAttribute("src","assets/img/students/"+ (i+1) + ".png");
    image.setAttribute("title",array[i]);
    image.setAttribute("class","image-coder");
    figure.appendChild(image);
    var title = document.createElement("figcaption");
    figure.appendChild(title);
  }
}

addFigure(coders);
