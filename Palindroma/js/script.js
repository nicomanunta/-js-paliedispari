let parola = prompt("Inserire una parola")

function palindroma(){
    
    let parola_reverse = parola.split("").reverse().join("").toLowerCase()
    console.log(parola_reverse)

    if (parola == parola_reverse){
        console.log("Questa parola è palindroma")
    
    }
    else{
        console.log("Questa parola NON è palindroma")
    }
}

palindroma()