// variabili globali
const riga = document.querySelector('.row')
let stage = document.getElementById('difficolta')
const button = document.getElementById('button')
const testo = document.querySelector('.inizio')
let colNum = 0

// funzioni
function nulla(){
    testo.classList.add('none')
}

function aggiunta(){
    riga.classList.add('height')
}

function crea(){
    riga.innerHTML = ''
    for(let i=1; i<=colNum; i++){
        riga.innerHTML += `
        <div class="col ${stage.value}">${i}</div>
        `
    }
    nulla()
    aggiunta()
}

// bottone
button.addEventListener('click', function(){
    if(stage.value === 'Easy'){
        colNum = 100
        crea()
    }
    if(stage.value === 'Hard'){
        colNum = 81
        crea()
    }
    if(stage.value === 'Crazy'){
        colNum = 49
        crea()
    }
    const casella = document.querySelectorAll('.col')
    for(c=0; c<casella.length; c++){
        let d = c
        casella[c].addEventListener('click', function(){
           casella[d].classList.add('back')
            console.log(casella[d])
        })
        console.log(d)
        
    }
})
