let container = document.getElementById('container');
let miniContainer = document.getElementById('miniContainer');
console.log('Sono il mini Container', miniContainer)



const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//Milestone 0:
//Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
images.forEach((image) => {
    console.log(image.image);
    miniContainer.innerHTML += `<img class='cover' src="${image.image}"></img>`;

});

const mainImage = images.map((element) => {
    container.innerHTML += `<div id="container">
                                <img  class="styleImg" src="${element.image}"></img> 
                                <div class="caption">
                                    <div>${element.title}</div> 
                                    <div>${element.text}</div>
                                </div>
                            </div>`;
});

//una volta che abbiamo poppolato dinamicamente il carosello.   Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

//selezzionammo ogni foto grande
let mainCover = document.getElementsByClassName('styleImg');
mainCover[0].classList.add('active');
console.log('Ciao sono io il', mainCover[0]);

//selezzionammo ogni cover foto piccola
let elementCover = document.getElementsByClassName('cover');
elementCover[0].classList.add('active');
console.log('Ciao sono io il', elementCover[0]);



//aggiungiamo un contatore
let counter = parseInt(0);

const upButton = document.getElementById('up');
console.log('Sono il chevron', upButton);

//Diamo la funzione click ad uppButton facciamo andare  uno svg  tra altro, facendo  click

upButton.addEventListener('click',
    function () {
        if (counter < elementCover.length - 1) {
            mainCover[counter].classList.remove('active');
            elementCover[counter].classList.remove('active');


            counter++

            //assegniamo la clase active ad ogni elemento in maniera che appare uno alla volta.
            mainCover[counter].classList.add('active');
            elementCover[counter].classList.add('active');

        }
        console.log('stringa');
    });


//Diamo la funzione click  a down button facciamo andare  uno svg  tra altro, facendo  click
const downButton = document.getElementById('down');
console.log('Sono il chevron', downButton);

downButton.addEventListener('click',
    function () {
        if (counter > 0) {
            mainCover[counter].classList.remove('active');
            elementCover[counter].classList.remove('active');


            counter--
            console.log(elementCover)

            //assegniamo la clase active ad ogni elemento in maniera che appare uno alla volta.
            mainCover[counter].classList.add('active');
            elementCover[counter].classList.add('active');


        }
    });
