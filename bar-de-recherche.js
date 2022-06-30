
//fonction de la bar de recherche
function filter(event){
    let key = event.target.value;

    //recuperation des element de local storage dans tableUsers
   let tableUsers =  userFromStorage();
   console.log(tableUsers)

   //le filtre; utilisateurFiltrer permet de filter les element mais ne se vois pas
   let utilisateurFiltrer = tableUsers.filter((personne) => {
        return (new RegExp(key, 'i')).test(personne.nom)|| (new RegExp(key, 'i')).test(personne.prenom)
        || (new RegExp(key, 'i')).test(personne.mail)
   })
   
   console.log(utilisateurFiltrer)
   tbody.innerHTML = '';
   //cette fonction prmet de voir le filtrage dans la bar de recherche
   utilisateurFiltrer.forEach((personne) => addUserIntoTable(personne) )
     
   
    
}
