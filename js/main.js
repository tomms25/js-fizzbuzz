

// Scrivere una programma che stampi in console i numeri da 1 a 100


// associo l'elemento Html container a quello Js

let container = document.getElementById("container");


// Creao il programma tramite for che inserisca i numeri da 1 a 100 nella console


for (let i = 1; i <= 100; i++){
    console.log(i)

    
    // Il programma deve stampare FizzBuzz per il multipli di di 3 e 5
    if (i%15 == 0) {
        console.log("FizzBuzz");
        // Ora devo collegarlo con L'HTML in modo da vederlo in pagina
        container.innerHTML += '<div class="box fizzbuzz">FizzBuzz</div>';
    }
    // Oppure if((i%3 == 0) && (i%5 == 0)){}??

    

    // Il programma deve stampare Fizz per i multipli di 3
    else if (i%3 == 0) {
        console.log("Fizz");
        container.innerHTML += '<div class="box fizz">Fizz</div>';
    }



    // Il programma deve stampare Buzz per il multipli di 5

    else if (i%5 == 0) {
        console.log("Buzz");
        container.innerHTML += '<div class="box buzz">Buzz</div>';
    }

    // Altrimenti il programma deve scrivere solo la progressione dei numeri in console


    else {
        console.log (i); // Scrive i numeri in console
        container.innerHTML += '<div class="box number">' + i + '</div>';
       
    }

    

}