
function generer(){

let client=document.getElementById('client').value
let trajet=document.getElementById('trajet').value
let marchandise=document.getElementById('marchandise').value
let prix=document.getElementById('prix').value

document.getElementById('resultat').innerHTML=`
<h3>DEVIS - FarmOtor's Transport</h3>
<p><b>Client:</b> ${client}</p>
<p><b>Trajet:</b> ${trajet}</p>
<p><b>Marchandise:</b> ${marchandise}</p>
<p><b>Prix:</b> ${prix}</p>
`
}
