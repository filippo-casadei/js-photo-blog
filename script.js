// COLLEGAMENTO DOM
let riga = document.querySelector(`.row`);

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
    <div class="col-4">
        <div class="polaroid border bg-white p-3 pb-4">
            <img class="chiodo" src="./img/pin.svg">
            <img class="img-fluid" src="${elemento.url}">
            <div class="polaroid-testo">
                <p class="font-titolo">${elemento.title}</p>
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


