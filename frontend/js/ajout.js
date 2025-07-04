
// On sélectionne le formulaire par son ID et on ajoute un écouteur sur l'événement 'submit'
document.getElementById("formProduit").addEventListener("submit", function (e) {
 
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    if (!email || !password) {
      message.textContent = "Veuillez remplir tous les champs.";
      message.style.color = "red";
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.textContent = "Adresse e-mail invalide.";
      message.style.color = "red";
      return;
    }
  
    if (password.length < 6) {
      message.textContent = "Mot de passe trop court (min 6 caractères).";
      message.style.color = "red";
      return;
    }
  
    //  Requête vers le backend pour vérifier l'utilisateur
    fetch("http://localhost:3000/api/auth/connexion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    .then(async res => {
      const data = await res.json();
      
      if (res.ok) {
        message.textContent = "Connexion réussie !";
        message.style.color = "green";
  
        //  On sauvegarde le rôle et l'email dans le localStorage
        localStorage.setItem("email", data.email);
        localStorage.setItem("role", data.role); // <-- essentiel pour Partie 3
  
        // Redirection vers page profil ou accueil
        window.location.href = "index.html";
      } else {
        message.textContent = data.message || "Erreur de connexion.";
        message.style.color = "red";
      }
    })
    .catch(() => {
      message.textContent = "Erreur de connexion au serveur.";
      message.style.color = "red";
    });
  });
  