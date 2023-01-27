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
function play (computer_choice,player_choice){
    if(computer_choice=="ROCHE"&&player_choice=="PAPIER"||computer_choice=="PAPIER"&&player_choice=="CISEAU"||computer_choice=="CISEAU"&&player_choice=="ROCHE"){
        return "L'humain gagne";
    }else if(computer_choice=="ROCHE"&&player_choice=="CISEAU"||computer_choice=="PAPIER"&&player_choice=="ROCHE"||computer_choice=="CISEAU"&&computer_choice=="PAPIER"){
        return "L'ordi gagne,car il est meilleur";
    }else{
        return "PARTI NUL";
    }
}
function round(){
    for(let i=0;i<5;i++){
        let humain=getHumain();
        let computer=getComputer();
        console.log("L'ordi choisit "+computer);
        console.log("L'humain choisit "+humain);
        console.log(play(computer,humain));
    }
    
}
console.log(round());
