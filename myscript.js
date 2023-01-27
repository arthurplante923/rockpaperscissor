function getComputer(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    if(randomNumber==1){
        return"ROCHE"
    }else if(randomNumber==2){
        return "PAPIER"
    }else{
        return "CISEAU"
    }
}
function getHumain(){
    let choice=prompt("ROCHE PAPIER OU CISEAU?").toUpperCase(); 
    return choice;
}
function play (computer_choice,player_choice,countordi,countplayer){
    if(computer_choice=="ROCHE"&&player_choice=="PAPIER"||computer_choice=="PAPIER"&&player_choice=="CISEAU"||computer_choice=="CISEAU"&&player_choice=="ROCHE"){
        return "L'humain gagne ";
    }else if(computer_choice=="ROCHE"&&player_choice=="CISEAU"||computer_choice=="PAPIER"&&player_choice=="ROCHE"||computer_choice=="CISEAU"&&player_choice=="PAPIER"){
        return "L'ordi gagne,car il est meilleur ";
    }else{
        return "PARTI NUL";
    }
}
function round(){
    let ordi_count=0;
    let player_count=0;
    let null_count=0;
    let round=0;
    do{
        round++;
        alert("ROUND "+(round));
        console.log("ROUND"+(round));
        let humain=getHumain();
        let computer=getComputer();
        alert("L'ordi choisit "+computer+" et l'humain choisit "+humain);
        alert(play(computer,humain));
        console.log("L'ordi choisit "+computer);
        console.log("L'humain choisit "+humain);
        console.log(play(computer,humain));
        if(play(computer,humain)=="L'ordi gagne,car il est meilleur "){
            ordi_count++;
            alert("L'ordi a "+ordi_count+" points et l'humain a "+player_count+" points");
            console.log("L'ordi a "+ordi_count+" points et l'humain a "+player_count+" points");
        }else if(play(computer,humain)=="L'humain gagne "){
            player_count++;
            alert("L'ordi a "+ordi_count+" points et l'humain a "+player_count+" points");
            console.log("L'ordi a "+ordi_count+" points et l'humain a "+player_count+" points");
        }else{
            null_count++;
        }

    }while((player_count!=3)&&(ordi_count!=3));
    alert("Le joueur a gagner "+player_count+" fois"+", l'ordi a gagner "+ordi_count+" fois."+"Il y a eu "+null_count+" nul.");
    if(player_count>ordi_count){
        alert("L'humain gagne la parti "+player_count+" a "+ordi_count);
    }else if(ordi_count>player_count){
        alert("L'ordi gagne la parti "+ordi_count+" a "+player_count);
    }else{
        alert("MATCH NUL "+player_count+" a "+ordi_count);
    }
    return "Le joueur a gagner "+player_count+" fois"+", l'ordi a gagner "+ordi_count+" fois."+"Il y a eu "+null_count+" nul.";
}
console.log(round());
