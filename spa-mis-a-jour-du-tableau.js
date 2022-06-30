
//fonction d'enregistrement de la boite modal
function enregistrement() {
    addUser()
    resetForm()
    clossModal()
    
}


//fonction de recuperation des valeurs de la boite modal
function getUsers(){
    return{
       nom : document.getElementById("nom").value ,
       prenom : document.getElementById("prenom").value ,
       dateDeNaissance : document.getElementById("dateDeNaissance").value, 
       mail: document.getElementById("mail").value ,
       tel : document.getElementById("tel").value, 
       sexe: document.querySelector('input[name=genre]:checked').value
    
    }
}

//nbid c'est le conteur qui donne les id
let nbid = 0

//fonction qui ajoute les utilisateurs dans le tableau
let tbody = document.getElementById('tbody-container');
function addUserIntoTable(personne){
    tbody.innerHTML='<tr>'
                    +'<td>'+'<input type = checkbox userId = '+nbid+' class = "check">'+'</td>'
                    +'<td>'+personne.id+'</td>'
                    +'<td>'+personne.nom+'</td>'
                    +'<td>'+personne.prenom+'</td>'
                    +'<td>'+personne.dateDeNaissance+'</td>'
                    +'<td>'+personne.mail+'</td>'
                    +'<td>'+personne.tel+'</td>'
                    +'<td>'+personne.sexe+'</td>'
                    +'<td>'+'<i class="fa-solid fa-pencil pencil"  ></i>'+
                    '<i class="fa-solid fa-eye eye"></i>'+
                    '<i class="fa-solid fa-xmark croix"></i>'+
                    '<i class="fa-solid fa-comment message" </i></td>'+tbody.innerHTML
}

//fonction qui ajoute les elements du tableau; incremente les id au fur et a mesure ; enregistres les utilisateurs dans le local storage
function addUser() {
    nbid++;
    let personne = getUsers();
    personne.id = nbid;
    addUserIntoTable(personne);
    saveUserIntoStorage(personne);

}


//enregistrement des users dans le local storage
function saveUserIntoStorage(personne){
    let users = userFromStorage()
    users.push(personne);
    localStorage.setItem('LIST', JSON.stringify(users))
}
    


