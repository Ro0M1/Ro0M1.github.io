let nom = document.getElementById("name");
let msgR = document.getElementById("msgRefus");
let msgV = document.getElementById("msgValid");
let character = document.getElementById("char");
let classe = document.getElementById("Character");
let i = document.createElement("img")
let card = document.getElementById("card");
i.className = "imgIcon"
let data = [];


function newChar(){
  let display = card.style.display;
  if (display == "none"){
    card.style.display = "block";
  }
  else{
    card.style.display = "block";
  }
}

let formValidation = () => {
  if (nom.value === ""){
    console.log("failure");
    msgR.innerHTML = "Veuillez choisir un nom de personnage";
    msgV.innerHTML = "";
  }
  else{
    console.log("success");
    msgR.innerHTML = "";
    msgV.innerHTML = "Peronnage créé";
    collectData();
  }
}

let elt = document.querySelector('select')
elt.addEventListener('change', function(){
  console.log(this.selectedIndex)
})


function collectData()
 {
    data.push({
    namer: nom.value,
    classer: classe.value,
    })
    console.log(data)
    createchar();
    nom.value=""
    localStorage.setItem("data",JSON.stringify(data));  
  }



  function createchar ()
  {
    char.innerHTML=""
    data.map((x,y) => {
    let d = document.createElement("div");
    d.id=y
    let nameP = document.createElement("p");
    nameP.className = "name"
    let classeC = document.createElement("p");
    classeC.className = "classe"
    d.className = "perso"
    nameP.textContent = x.namer;
    classeC.textContent = x.classer;
    d.appendChild(nameP);
    d.appendChild(classeC);
    char.appendChild(d);
    affichage(x.classer);
    d.appendChild(i);
    d.innerHTML += `
    <div class=buttons>  
      <img src="image/suppr.png" alt="" onclick="deleteChar(this)" id="btnSuppr">
      <img src="image/edit.png" alt="" onclick="edit(this)" id="btnEdit">
    </div>
    `;
    // d.setAttribute("onclick","choixPerso(\""+data.classe+"\")")
    })
    // ReStart();
  }

  function ReStart(){
    let display = card.style.display;
    if (display == "block"){
      card.style.display = "none";
    }
    
  }

function affichage(classe){
  if (classe == "Warrior"){
    i.setAttribute('src','image/icones/war.webp')
  }
  if (classe == "Hunter"){
    i.setAttribute('src','image/icones/hunter.png')
  }
  if (classe == "Mage"){
    i.setAttribute('src','image/icones/mage.png')
  }
  if (classe == "Warlock"){
    i.setAttribute('src','image/icones/demo.png')
  }
  if (classe == "Rogue"){
    i.setAttribute('src','image/icones/rogue.png')
  }
  if (classe == "DeathKnight"){
    i.setAttribute('src','image/icones/dk.webp')
  }
}

function deleteChar (e){
  e.parentElement.parentElement.remove();
  console.log(e.parentElement.parentElement.id)
  data.splice(e.parentElement.parentElement.id,1);
  localStorage.setItem("data",JSON.stringify(data));
  createchar();
  console.log(data);
}

function start()
  {
    let start = document.getElementById("button");
    start.remove();
    let element = document.getElementById("EnCard");
    let display = element.style.display;
    let cardE = document.getElementById("container")
    console.log(data);
    if (display == "none"){
      element.style.display = "block"
      cardE.style.display = "block"
      test();
    }
    else
    {
      element.style.display = "none";
    }
  }

function test(){

  data = JSON.parse(localStorage.getItem("data")) || [];
  console.log(data)
  createchar();
  }

function edit(e){
   let c = e.parentElement.parentElement.id;
   nom.value = data[c].namer;
   classe.value = data[c].classer;
  deleteChar(e);
 }

   function fullscreen(){
     document.documentElement.requestFullscreen()
 }