// FUNZIONE PER LA CHIAMATA API
const chiamataApi = function() {
    fetch(`https://lanciweb.github.io/demo/api/pictures/`)

    .then(function(risposta) {
        return risposta.json()
    })
    .then(function(dato) {
        return console.log(dato)
    })
    .catch(function(error) {
            console.log("ERRORE")
        
    })
    
};

// FUNZIONE PER LA CREAZIONE DELLA SINGOLA POLAROID - DATI --> STRINGA HTML 
let creaPolaroid = function(elemento) {
    return `
    <div class="polaroid border bg-white p-3 pb-4">
        <img class="img-fluid" src= ${elemento.url}>
        <div class="polaroid-testo">
            <p>${elemento.title}</p>
            <p>${elemento.date}</p>
        </div>
    </div>`
};

chiamataApi();
creaPolaroid();

