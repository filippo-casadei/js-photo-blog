// COLLEGAMENTO DOM
let riga = document.querySelector(`.row`);
let overlayDiHtml = document.querySelector(`.overlay`);
let overlayImmagine = document.querySelector(`.overlay-img`);

// FUNZIONE PER LA CHIAMATA API
const chiamataApi = function() {
    fetch(`https://lanciweb.github.io/demo/api/pictures/`)

    .then(function(risposta) {
        return risposta.json()
    })
    .then(function(dato) {
        riga.innerHTML = creaPolaroid(dato)
    })
    .catch(function(error) {
            console.log("ERRORE")
        
    })
    
    
};

// FUNZIONE PER LA CREAZIONE DELLA SINGOLA POLAROID - DATI --> STRINGA HTML 
let creaPolaroidHtml = function(elemento) {
    return `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="polaroid-border border bg-white p-3 pb-4">
            <img class="chiodo" src="./img/pin.svg">
            <img class="bellissima-foto img-fluid" src="${elemento.url}">
            <div class="polaroid-testo">
                <p class="font-didascalia">${elemento.title}</p>
                <p class="font-date">${elemento.date}</p>
            </div>
        </div>
    </div> `
};

// FUNZIONE CHE CICLA L'ARRAY DI OGGETTI
let creaPolaroid = function(array) {
    let contenitorePolaroid = ""

    array.forEach(function(elemento) {
        contenitorePolaroid = contenitorePolaroid + creaPolaroidHtml(elemento)  
    });

    return contenitorePolaroid
};

chiamataApi();

// EVENT LISTENER CLICK SU POLAROID //
riga.addEventListener("click", function(e) {
    let polaroid = e.target.closest(`.polaroid-border`)
    let immagineDellaPolaroid = polaroid.querySelector(`.bellissima-foto`)
    let immagineDellaPolaroidSrc = immagineDellaPolaroid.src 
    overlayImmagine.src = immagineDellaPolaroidSrc
    overlayDiHtml.classList.remove(`d-none`)
});

// PRESO BTN DAL DOM + EVENT LISTENER CLICK SUL BOTTONE //
let bottoneChiudi = document.querySelector(`.btn`)

bottoneChiudi.addEventListener("click", function() {
    overlayDiHtml.classList.add(`d-none`)
});

