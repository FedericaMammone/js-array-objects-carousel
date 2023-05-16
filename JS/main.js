const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// variabili
const container = document.getElementById("items-container");

// creato ciclo con oggetti dell'array e aggiunti al dom

images.forEach((element) => {
    // console.log(element);
    
        const scheda = 
            `
            <div class="item">
                <div class="immagine">
                    <img src="${element.image}" alt="foto"></img>
                </div>

                <div class="testo">
        
                    <h5>${element.title}</h5>
                    <p>${element.text}</p>
                </div>
            </div>
            `
    
        // console.log(scheda);
        container.innerHTML += scheda;
        }
    );


const buttonDown = document.getElementById("down");
// console.log(buttonDown);
const buttonUp = document.getElementById("up");


// assegnazione classe active
const activeScheda = document.querySelector('.item:first-child');
console.log(activeScheda);
activeScheda.classList.add('active');
console.log(activeScheda);

// prendo le immagini
const arrayItemSchede = document.querySelectorAll('#items-container .item');
console.log(arrayItemSchede);


// seleziono freccia giù e aggiungo evento al click
buttonDown.addEventListener('click', vaiGiu);


// seleziono freccia su e aggiungo evento al click
buttonUp.addEventListener('click', vaiSu);

let activeItem = 0;

// funzioni
// freccia giù

function vaiGiu() {

    // tolgo active
    if(activeItem < (arrayItemSchede.lenght - 1)) {
        arrayItemSchede[activeItem].classList.remove('active');

        activeItem++

        // aggiungo active al nuovo elemento
        arrayItemSchede[activeItem].classList.add('active');

    }else if (activeItem === (arrayItemSchede.length - 1) ) {

        // tolgo active
        arrayItemSchede[activeItem].classList.remove('active');

        // torno alla prima
        activeItem = 0;
        
        // aggiungo active
        arrayItemSchede[activeItem].classList.add('active');

        console.log(vaiGiu);
    }
}


// freccia su
function vaiSu() {

    if (activeItem > 0) {

        // tolgo active
        arrayItemSchede[activeItem].classList.remove('active');

        activeItem--;

        // aggiungo active
        arrayItemSchede[activeItem].classList.add('active');
    }else if(activeScheda === 0){
        // tolgo active
        arrayItemSchede[activeItem].classList.remove('active');

        // torno alla prima
        activeItem = arrayItemSchede.length -1;

        // aggiungo active
        arrayItemSchede[activeItem].classList.add('active');

       
    }
    
}


// activeScheda = activeScheda + 1;

// images[activeItem].classList.add('active');

    



// buttonDown.addEventListener('click'{})


// const buttonDown = document.getElementById("down");
// buttonDown.addEventListener('click'

// );



