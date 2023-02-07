const container=document.querySelector("#container");

const rond=document.createElement("p");
rond.classList.add("ronde");
container.appendChild(rond);

const rock_button = document.createElement("button");
rock_button.classList.add("roche");
rock_button.textContent="ROCHE";
container.appendChild(rock_button);

const papier_button = document.createElement("button");
papier_button.classList.add("papier");
papier_button.textContent="PAPIER";
papier_button.style.margin='5px';
container.appendChild(papier_button);

const ciseau_button = document.createElement("button");
ciseau_button.classList.add("ciseau");
ciseau_button.textContent="CISEAU";
container.appendChild(ciseau_button);

const choix=document.createElement("p");
choix.classList.add("choix");
container.appendChild(choix);

const resultat= document.createElement("div");
resultat.classList.add("resultat");
container.appendChild(resultat);

const pointage=document.createElement("p");
pointage.classList.add("pointage");
container.appendChild(pointage);

const score=document.createElement("h3");
score.classList.add("score");
container.appendChild(score);

let player_count=0;
let ordi_count=0;
let nul_count=0;
let round=0;
let win_choice=prompt("Combien de points pour gagner le match au roche"
    +" papier ciseau ?");

function ronde(){
    round++;
    rond.textContent="Round "+round;
}
ronde();
function Pointage(){
    pointage.textContent="L'ordi a "+ordi_count+" points"+", l'humain a "+player_count+" points"+" ,il y a eu "+nul_count+" nul";
}
Pointage();

function scores(player_count,ordi_count){
    if(player_count==win_choice){
        score.textContent="L'humain gagne "+player_count+" a "+ordi_count;
    }else if(ordi_count==win_choice){
        score.textContent="L'ordi gagne "+ordi_count+" a "+player_count;
    }
}

function getComputer(){
    let randomNumber = Math.floor(Math.random()*3)+1; /*Pour avoir le choix de l'ordinateur */
    if(randomNumber==1){
        return"roche"
    }else if(randomNumber==2){
        return "papier"
    }else{
        return "ciseau"
    }
}

rock_button.addEventListener("click",()=>{
    const humain_choice="ROCHE";
    const computer_choice=getComputer();
    choix.textContent="L'humain choisit roche et l'ordinateur choisit "+computer_choice;
    play(computer_choice,humain_choice);
    scores(player_count,ordi_count);
    ronde();
    Pointage()
});
papier_button.addEventListener("click",()=>{
    const humain_choice="PAPIER";
    const computer_choice=getComputer();
    choix.textContent="L'humain choisit papier et l'ordinateur choisit "+computer_choice;
    play(computer_choice,humain_choice);
    scores(player_count,ordi_count);
    ronde();
    Pointage()
});
ciseau_button.addEventListener("click",()=>{
    const humain_choice="CISEAU";
    const computer_choice=getComputer();
    choix.textContent="L'humain choisit ciseau et l'ordinateur choisit " +computer_choice;
    play(computer_choice,humain_choice);
    scores(player_count,ordi_count);
    ronde();
    Pointage()
});

function play (computer_choice,player_choice){ /*Avec les deux choix,décide le gagnant */
    if(computer_choice=="roche"&&player_choice=="PAPIER"
    ||computer_choice=="papier"&&player_choice=="CISEAU"
    ||computer_choice=="ciseau"&&player_choice=="ROCHE")
    {
        resultat.textContent="L'humain gagne, plus 1 point";
        player_count++;

    }
    else if(computer_choice=="roche"&&player_choice=="CISEAU"
    ||computer_choice=="papier"&&player_choice=="ROCHE"
    ||computer_choice=="ciseau"&&player_choice=="PAPIER")
    {
        resultat.textContent="L'ordi gagne,car il est meilleur, plus 1 point";
        ordi_count++;
    }
    else{
        resultat.textContent="PARTI NUL";
        nul_count++;
    }
    return[player_count,ordi_count,nul_count];

}
