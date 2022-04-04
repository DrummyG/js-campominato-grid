// variabili globali
const riga = document.querySelector('.row')
let stage = document.getElementById('difficolta')
const button = document.getElementById('button')
const testo = document.querySelector('.inizio')
const casella = document.getElementsByClassName('col')

// funzioni
function nulla(){
    testo.classList.add('none')
}

function aggiunta(){
    riga.classList.add('height')
}

function easy(){
    riga.innerHTML = ''
    for(let i=1; i<=100; i++){
        riga.innerHTML += `
        <div class="col easy">${i}</div>
        `
    }
    nulla()
    aggiunta()
}

function hard(){
    riga.innerHTML = ''
    for(let i=1; i<=81; i++){
        riga.innerHTML += `
        <div class="col hard">${i}</div>
        `
    }
    nulla()
    aggiunta()
}

function crazy(){
    riga.innerHTML = ''
    for(let i=1; i<=49; i++){
        riga.innerHTML += `
        <div class="col crazy">${i}</div>
        `
    }
    nulla()
    aggiunta()
}


button.addEventListener('click', function(){
    if(stage.value === 'Easy'){
        easy()
    }
    if(stage.value === 'Hard'){
        hard()
    }
    if(stage.value === 'Crazy'){
        crazy()
    }
})

casella.addEventListener('click', function(){
    casella.classList.add('back')
})

