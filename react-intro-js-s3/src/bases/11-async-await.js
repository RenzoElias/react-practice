

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );


// const getText = () => {
    //     return 'http://api.giphy.com/v1/gifs/random?api_key='
// }
// Poniendo el async, ahora retornara como una promesa
const getText = async() => {
    return 'http://api.giphy.com/v1/gifs/random?api_key='
}

getText().then(console.log); // Imprmir lo que se resuelva de esa promesa









const getImagen = async() => {

    // el await solo funciona dentro de una funcion async

    // Para manejar los errores para el async, se usa try - catch
    try {

        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';

        // Al poner await - se vuelve sincrono, por ende esperara que la promesa se responda
        // Luego de tener respuesta, recien pasara a la siguiente linea
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        // resp.json() // devuelve una promesa, entonces se le pone await, para poder esperar su respuesta, y obtenido recien pasar a la siguiente linea
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
}

 getImagen();



