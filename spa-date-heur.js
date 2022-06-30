//fonction traitant la date et l'heur
function afficherDateHeur() 
{
    let thisdays = new Date();
    let format = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
    let date = thisdays.toLocaleDateString("fr", format);
    let heure = ("0" + thisdays.getHours()).slice(-2) + "h :" + ("0" + thisdays.getMinutes()).slice(-2) + "min :" + ("0" + thisdays.getSeconds()).slice(-2)+"s";
    let dateheure = `${date} / ${heure}`
    dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
    document.getElementById('date-a-jour').innerHTML = dateheure;
}
setInterval(afficherDateHeur, 1000);

