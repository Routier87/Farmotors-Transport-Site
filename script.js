
const api="http://localhost:3000/drivers"

fetch(api)
.then(res=>res.json())
.then(data=>{

const container=document.getElementById("drivers")

if(container){

data.forEach(d=>{

let div=document.createElement("div")
div.className="driver"
div.innerHTML=`🚛 ${d.name}`

container.appendChild(div)

})

}

})

const webhook="PASTE_DISCORD_WEBHOOK"

function sendConvoy(){

let depart=document.getElementById("depart")?.value
let arrivee=document.getElementById("arrivee")?.value
let date=document.getElementById("date")?.value

fetch(webhook,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
content:`🚛 **Programme Convoi - FarmOtor's Transport**
Départ: ${depart}
Arrivée: ${arrivee}
Date: ${date}`
})
})

alert("Programme envoyé sur Discord")

}
