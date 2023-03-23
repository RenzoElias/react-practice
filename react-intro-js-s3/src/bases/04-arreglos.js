

// Arreglos en JS
// const arreglo = new Array( 100 );
const arreglo = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [ ...arreglo, 5 ];

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});

const arreglo4 = arreglo3.map( d => 
    d*2 
)

const arreglo5 = arreglo4.map( d => {
    if (d < 10) {
        console.log("d", d);
        return d
    }
    return 0
})


console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
console.log( arreglo4 );
console.log( arreglo5 );








