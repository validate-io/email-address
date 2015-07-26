'use strict';

var isValid = require( './../lib' );

console.log( isValid( 'beep@boop.com') );
// returns true

console.log( isValid( 'beep' ) );
// returns false

console.log( isValid( 'beep.com' ) );
// returns false

console.log( isValid( null ) );
// returns false
