function getComputer(){
    let randomNumber = Math.floor(Math.random()*3)+1; /*Pour avoir le choix de l'ordinateur */
    if(randomNumber==1){
        return"ROCHE"
    }else if(randomNumber==2){
        return "PAPIER"
    }else{
        return "CISEAU"
    }
}
function getHumain(){ /*Pour avoir le choix du joueur */
    let choice_humain=prompt("ROCHE PAPIER OU CISEAU?").toUpperCase(); 
    return choice_humain;
}
function play (computer_choice,player_choice){ /*Avec les deux choix,décide le gagnant */
    if(computer_choice=="ROCHE"&&player_choice=="PAPIER"
    ||computer_choice=="PAPIER"&&player_choice=="CISEAU"
    ||computer_choice=="CISEAU"&&player_choice=="ROCHE")
    {
        return "L'humain gagne ";
    }
    else if(computer_choice=="ROCHE"&&player_choice=="CISEAU"
    ||computer_choice=="PAPIER"&&player_choice=="ROCHE"
    ||computer_choice=="CISEAU"&&player_choice=="PAPIER")
    {
        return "L'ordi gagne,car il est meilleur ";
    }
    else{
        return "PARTI NUL";
    }
}
function round(){ /*Pour avoir plusieur round de roche papier ciseau */
    let ordi_count=0;
    let player_count=0;
    let nul_count=0;
    let round=0;
    let player_choice=prompt("Combien de points pour gagner le match au roche"
    +"papier ciseau ?");
    do{
        round++;
        alert("ROUND "+(round));
        console.log("ROUND "+(round));
        let humain=getHumain();
        let computer=getComputer();
        alert("L'ordi choisit "+computer+" et l'humain choisit "+humain);
        alert(play(computer,humain));
        console.log("L'ordi choisit "+computer);
        console.log("L'humain choisit "+humain);
        console.log(play(computer,humain));

        if(play(computer,humain)=="L'ordi gagne,car il est meilleur "){
            ordi_count++;

            alert("L'ordi a "+ordi_count+" points et l'humain a "
            +player_count+" points");

            console.log("L'ordi a "+ordi_count+" points et l'humain a "+
            player_count+" points");

        }else if(play(computer,humain)=="L'humain gagne "){
            player_count++;

            alert("L'ordi a "+ordi_count+" points et l'humain a "+
            player_count+" points");

            console.log("L'ordi a "+ordi_count+" points et l'humain a "+
            player_count+" points");

        }else{
            nul_count++;
        }

    }while((player_count!=player_choice)&&(ordi_count!=player_choice));
    
    alert("Le joueur a gagner "+player_count+" fois"+", l'ordi a gagner "+
    ordi_count+" fois."+"Il y a eu "+nul_count+" nul.");
    
    if(player_count>ordi_count){
        alert("L'humain gagne la parti "+player_count+" a "+ordi_count);
    }else if(ordi_count>player_count){
        alert("L'ordi gagne la parti "+ordi_count+" a "+player_count);
    }else{
        alert("MATCH NUL "+player_count+" a "+ordi_count);
    }
    return "Le joueur a gagner "+player_count+" fois"+", l'ordi a gagner "
    +ordi_count+" fois."+"Il y a eu "+nul_count+" nul.";
}
console.log(round());
