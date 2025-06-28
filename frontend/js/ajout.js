
// On sélectionne le formulaire par son ID et on ajoute un écouteur sur l'événement 'submit'
document.getElementById("formProduit").addEventListener("submit", function (e) {
    // On empêche le comportement par défaut du formulaire (rechargement de la page)
    e.preventDefault();
  
    // On récupère la valeur du champ "nom" 
    const nom = document.getElementById("nom").value.trim();
  
    // On récupère et convertit en nombre le champ "prix"
    const prix = parseFloat(document.getElementById("prix").value);
  
    // On récupère l'élément du paragraphe qui affichera les messages d'erreur ou de confirmation
    const message = document.getElementById("message");
   
    // Si le nom est vide, ou si le prix n’est pas un nombre, ou inférieur ou égal à 0
    if (!nom || isNaN(prix) || prix <= 0) {
      //// On affiche un message d'erreur en rouge
      message.textContent = "Veuillez entrer un nom valide et un prix supérieur à 0.";
      message.style.color = "red";
      return; // On arrête l’exécution
    }
  
    // On affiche un message de succès en vert
    message.textContent = `La bougie "${nom}" à ${prix.toFixed(2)} $ a été ajoutée !`;
    message.style.color = "green";
     
  });
  