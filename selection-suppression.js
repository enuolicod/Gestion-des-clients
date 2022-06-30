
//function qui permet de selectionné les checkbox et les suprimer
function mydelete(){
   let checkbox = tbody.getElementsByClassName('check')
  //suptable est un tableau qui recupere les element choisi
   let supTable = []
   Array.from(checkbox).forEach((choiCheckbox)=>{
    if(choiCheckbox.checked){
        supTable.push(parseInt(choiCheckbox.getAttribute('userId')))
        console.log(checkbox)
    }
   })

   console.log(supTable)

   //recuperation des utilisateurs present dans le localstorage
   let Users = userFromStorage();

   //fonction qui permet de voir si les utilisteurs du suptable sont dans le local storage
   let keepUser = Users.filter((personne)=>{
    //supTable.indexOf(personne.id)< 0 veut dire que il n'ya pas d'utilisateur de suptable dans le local
    return supTable.indexOf(personne.id)< 0;
   });

   console.log(keepUser)
   localStorage.setItem('LIST',JSON.stringify(keepUser));

   //je vide le tableau
   tbody.innerHTML = '';

   //je réafiche les utilisateur qui n'ont été choisi(qui ne se trouve pas dans le tableau supTable)
   keepUser.forEach((personne) => addUserIntoTable(personne));
}
