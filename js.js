// On ajoute une fonction au survol
image1.addEventListener("mouseover",function(){
// La fonction fait apparraître une bordure rouge de 3px sur l'id sélectionner
  image1.style.border = "3px solid red"
});
// La fonction fait disparaître la bordure quand on ne survol plus l'image
image1.addEventListener("mouseout",function(){
  image1.style.border= "none"
});
