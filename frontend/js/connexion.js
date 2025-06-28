// On ajoute un écouteur d'événement sur le formulaire de connexion
document.getElementById("formConnexion").addEventListener("submit", function (e) {
    // On empêche le comportement par défaut du formulaire (évite le rechargement de la page)
    e.preventDefault();
  
    // On récupère la valeur de l’email saisie dans le champ
    const email = document.getElementById("email").value.trim();
  
    // On récupère le mot de passe saisi
    const password = document.getElementById("password").value;
  
    // On récupère l’élément HTML où afficher le message de résultat (erreur ou succès)
    const message = document.getElementById("message");
  
    // Vérifier que les champs ne sont pas vides
    if (!email || !password) {
      message.textContent = "Veuillez remplir tous les champs.";
      message.style.color = "red";
      return; // On arrête ici si un champ est vide
    }
  
    // Vérifie la validité de l'email avec une regex simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.textContent = "Adresse e-mail invalide.";
      message.style.color = "red";
      return;
    }
  
    // Vérifier la longueur minimale du mot de passe
    if (password.length < 6) {
      message.textContent = "Mot de passe trop court (min 6 caractères).";
      message.style.color = "red";
      return;
    }
  
    // ✅ Si tout est bon,affiche un message de succès (connexion simulée ici)
    message.textContent = "Connexion réussie !";
    message.style.color = "green";
  
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
    
  });
  