
// Chargement du panier
let panier = JSON.parse(localStorage.getItem("panier")) || [];

// Ajouter un produit au panier
function ajouterAuPanier(produit) {
  panier.push(produit);
  localStorage.setItem("panier", JSON.stringify(panier));
  alert(`${produit.nom} ajouté au panier.`);
}

// Retirer un produit par ID
function retirerDuPanier(id) {
  panier = panier.filter(p => p.id !== id);
  localStorage.setItem("panier", JSON.stringify(panier));
  afficherPanier();
}

// Afficher le contenu du panier
function afficherPanier() {
  const panierDiv = document.getElementById("panier");
  if (!panierDiv) return;

  panierDiv.innerHTML = "";

  if (panier.length === 0) {
    panierDiv.innerHTML = "<p>Votre panier est vide.</p>";
    return;
  }

  let total = 0;

  panier.forEach(produit => {
    total += parseFloat(produit.prix);

    const item = document.createElement("div");
    item.classList.add("panier-item");
    item.innerHTML = `
      <p><strong>${produit.nom}</strong> - ${produit.prix} $</p>
      <button class="btn secondaire" onclick="retirerDuPanier(${produit.id})">Retirer</button>
    `;
    panierDiv.appendChild(item);
  });

  // Total
  const totalDiv = document.createElement("div");
  totalDiv.innerHTML = `<p><strong>Total :</strong> ${total.toFixed(2)} $</p>`;
  panierDiv.appendChild(totalDiv);
}

// Vider le panier
function viderPanier() {
  panier = [];
  localStorage.removeItem("panier");
  afficherPanier();
}

// Chargement automatique du panier si la page contient #panier
window.addEventListener("DOMContentLoaded", afficherPanier);
