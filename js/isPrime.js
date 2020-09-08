'use strict'

const isPrime = function ( arg ) {

  for ( var i = 3; i < Math.sqrt( arg ); i += 2 ) {
    if ( arg % i === 0 ) {
      return false;
    }
  }

  let x = 6 * i - 1;
  let y = 6 * i + 1;

  while ( i < Math.sqrt( arg ) ) {
    if ( arg % x === 0 || arg % y == 0 ) {
      return false;

    }
    return true;

  }
}
