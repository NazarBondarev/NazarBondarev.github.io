function sendResponses(name, surname){   
    let getName = document.getElementById(name).value.length;
    let getEmail = document.getElementById(surname).value.length;
    var sayings = new Map();
    let howErrors = 0;


    if (getName <= 1){
        sayings[howErrors+=1] = "Слишком короткое имя/логин!";
    }
    if (getEmail <= 5){
        sayings[howErrors+=1] = "Неверный e-mail";   
    }


    if (howErrors != 0){
        for(let val of sayings.values()){
            alert(val)
        }
    }
    
}