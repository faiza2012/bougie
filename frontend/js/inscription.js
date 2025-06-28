// Sélection du formulaire et ajout d'un écouteur d'événement
document.getElementById("formInscription").addEventListener("submit", function (e) {
    e.preventDefault(); //  pour empêcher le rechargement de la page
  
    // Récupération des champs du formulaire
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const message = document.getElementById("message");
  
    // Expression régulière simple pour valider un e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // la vérifications
    if (!nom || !email || !password || !confirm) {
      message.textContent = "Tous les champs sont obligatoires.";
      message.style.color = "red";
      return;
    }
  
    if (!emailRegex.test(email)) {
      message.textContent = "Adresse e-mail invalide.";
      message.style.color = "red";
      return;
    }
  
    if (password.length < 6) {
      message.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
      message.style.color = "red";
      return;
    }
  
    if (password !== confirm) {
      message.textContent = "Les mots de passe ne correspondent pas.";
      message.style.color = "red";
      return;
    }
  
    // on valide  tout les champs
    fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nom, email, password })
    })
    .then(async res => {
      const data = await res.json();
      message.textContent = data.message;
      message.style.color = res.ok ? "green" : "red";
    })
    .catch(err => {
      console.error('Erreur fetch inscription:', err);
      message.textContent = "Erreur serveur.";
      message.style.color = "red";
    });
    
  });
  