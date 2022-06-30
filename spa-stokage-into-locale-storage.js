

//fonction qui recupere les elements du localstorage
function userFromStorage(){
    let USERS = localStorage.getItem('LIST');
    try{
         USERS = USERS ? JSON.parse(USERS) : [];
    }
    catch(e){
         USERS = [];
    }
    console.log(USERS)
    return USERS;

}

//fonction qui met a jour les id dans le local storage
(function(){
    let users = userFromStorage();
    users.forEach((personne) =>{
        nbid = personne.id > nbid ? personne.id : nbid;
        addUserIntoTable(personne)
    })
}());

// ajout dans le local storage
function localstorage (){
    let personne = getUsers()
    let LocalStorageFromData = localStorage.getItem('LIST');
    let users = LocalStorageFromData ? JSON.parse(LocalStorageFromData) : [];
    users.push(personne);
    localStorage.setItem('LIST', JSON.stringify(users))
    return users
}
