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
    .finally
}

chiamataApi();