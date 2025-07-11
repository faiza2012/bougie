document.addEventListener('DOMContentLoaded', () => {
  const conteneur = document.getElementById("produits");

  fetch('http://localhost:3000/api/produits') 
    .then(response => response.json())
    .then(data => {
      data.forEach(produit => {
        const carte = document.createElement("div");
        carte.classList.add("carte-produit");

        carte.innerHTML = `
          <img src="${produit.image}" alt="${produit.nom}" />
          <h3>${produit.nom}</h3>
          <p>${produit.prix.toFixed(2)} $</p>
        `;

        // Ajouter un bouton "Ajouter au panier"
        const bouton = document.createElement("button");
        bouton.innerText = "Ajouter au panier";
        bouton.addEventListener("click", () => ajouterAuPanier(produit));
        carte.appendChild(bouton);

        conteneur.appendChild(carte);
      });
    })
    .catch(err => {
      conteneur.innerHTML = "<p>Erreur de chargement des produits.</p>";
      console.error(err);
    });
});

// Fonction panier
function ajouterAuPanier(produit) {
  let panier = JSON.parse(localStorage.getItem("panier")) || [];
  panier.push(produit);
  localStorage.setItem("panier", JSON.stringify(panier));
  alert(`${produit.nom} ajouté au panier.`);
}
