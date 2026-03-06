
function generer(){

let depart=document.getElementById('depart')?.value
let arrivee=document.getElementById('arrivee')?.value
let cargo=document.getElementById('cargo')?.value
let date=document.getElementById('date')?.value

if(document.getElementById('resultat')){
document.getElementById('resultat').innerHTML=`
<h3>PROGRAMME DE CONVOI</h3>
<p><b>Départ:</b> ${depart}</p>
<p><b>Arrivée:</b> ${arrivee}</p>
<p><b>Marchandise:</b> ${cargo}</p>
<p><b>Date:</b> ${date}</p>
<p><b>Entreprise:</b> FarmOtor's Transport</p>
`
}
}
