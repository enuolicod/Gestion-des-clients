//fonction pour la boite modal de l'utilisateur
var modal = document.getElementById('boite-modale');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//fonction pour la boite modal du profil
var modalProfil = document.getElementById('boite-modale-profil');

window.onclick = function (eventProfil) {
    if (eventProfil.target == modalProfil) {
        modalProfil.style.display = "none";
    }
}

//function qui ferme automatiquement le modal apres l'enregistrement
function clossModal(){
    document.getElementById('boite-modale').style.display='none'
                         title="Close Modal"
}


//fonction qui vide la boite modal apres l'enregistrement
function resetForm() {
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("dateDeNaissance").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("tel").value = "";
}
