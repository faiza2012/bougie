function afficherCheckout() {
    const panier = JSON.parse(localStorage.getItem('panier')) || [];
    const container = document.getElementById('checkout-details');
    const totalElement = document.getElementById('checkout-total');
  
    if (panier.length === 0) {
      container.innerHTML = "<p>Votre panier est vide.</p>";
      return;
    }
  
    let total = 0;
    container.innerHTML = "";
  
    panier.forEach(produit => {
      total += produit.prix;
  
      const item = document.createElement('div');
      item.innerHTML = `<p>${produit.nom} — ${produit.prix.toFixed(2)} $</p>`;
      container.appendChild(item);
    });
  
    totalElement.textContent = total.toFixed(2) + " $";
  }
  
  function validerCommande() {
    alert("Commande validée ! Merci pour votre achat.");
    localStorage.removeItem('panier');
    window.location.href = 'index.html';
  }
  
  window.onload = afficherCheckout;
  