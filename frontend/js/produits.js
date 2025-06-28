const conteneur = document.getElementById("produits");

// on charge dynamiquement les produits depuis l’API backend
fetch('http://localhost:3000/api/produits')

  .then(response => response.json())
  .then(produits => {
    produits.forEach(p => {
      const div = document.createElement("div");
      div.className = "produit";
      div.innerHTML = `
        <img src="${p.image}" alt="${p.nom}">
        <h2>${p.nom}</h2>
        <p>${p.prix.toFixed(2)} $</p>
      `;
      conteneur.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Erreur lors du chargement des produits :", err);
    conteneur.innerHTML = "<p>Erreur de chargement des produits.</p>";
  });
