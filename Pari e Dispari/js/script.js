let pari_dispari = prompt("Pari o Dispari?")
let num = parseInt(prompt("Inserire un numero da 1 a 5"))

function randomNumber(){
    return Math.floor(Math.random()* 5 + 1)
}
let random_num = randomNumber()
console.log(random_num)

function somma(cifra1, cifra2){
    let risultato = cifra1 + cifra2 
    console.log(risultato)
    return risultato 

    
    
}
let addizione = somma(num, random_num)

function checkVittoria(pari_dispari, addizione){

    pari_dispari = pari_dispari.toLowerCase()
    if(pari_dispari == "pari" && addizione%2 == 0){
        console.log("Hai vinto")
    }
    else if (pari_dispari == "pari" && addizione%2 != 0){
        console.log("Hai perso")
    }
    else if (pari_dispari == "dispari" && addizione%2 == 0){
        console.log("Hai perso")
    }
    else if (pari_dispari == "dispari" && addizione%2 != 0){
        console.log("Hai vinto")
    }
}
checkVittoria(pari_dispari, addizione)




