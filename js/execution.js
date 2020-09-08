'use strict'

document.write( `<h1>Branch assignments</h1>` );

document.write( `<h2>isPrime</h2>` );

let arg = Number( window.prompt( 'Add a number to see if its a prime' ) );

let start = new Date();
let b = isPrime( arg );
let stop = new Date();
let elapsed = stop - start;

document.write( `Is ${arg} a prime: ${b} <br>` );
document.write( `It took ${elapsed} miliseconds` )


document.write( `<hr/>` );
