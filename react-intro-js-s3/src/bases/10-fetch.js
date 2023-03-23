
const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// Se contesta la promesa de peticion
// Promesas en cadena00
peticion
    .then( resp => resp.json() ) // la respuesta tmb es una promesa
    .then( ({ data }) => { // se responde y se desestructura solo el campo que se quiere
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );


    })
    .catch( console.warn );

