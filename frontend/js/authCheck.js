document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("utilisateurConnecte"));
  
    if (!user || user.role !== "admin") {
      // Rediriger si user ou si ce n'est pas un admin
      if (window.location.pathname.includes("ajout.html")) {
        alert("Accès réservé aux administrateurs.");
        window.location.href = "index.html";
      }
  
      //  masquer un bouton :
      const btnAjout = document.getElementById("btn-ajout-produit");
      if (btnAjout) btnAjout.style.display = "none";
    }
    const utilisateur = JSON.parse(localStorage.getItem("utilisateurConnecte"));
    const lienDeconnexion = document.getElementById("btn-deconnexion");
  
    if (utilisateur) {
      // Afficher le bouton si un utilisateur est connecté
      lienDeconnexion.style.display = "inline-block";
  
      //  modifier la nav selon le rôle
      if (utilisateur.role === "admin") {
        console.log("Connecté en tant qu'administrateur.");
      } else {
        console.log("Connecté comme utilisateur.");
      }
  
      // Gestion du clic
      lienDeconnexion.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("utilisateurConnecte");
        alert("Vous avez été déconnecté.");
        window.location.href = "index.html";
      });
    }
  });

  

  