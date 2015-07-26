'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' );


// VARIABLES //

var RE = /@/;


// ISVALID //

/**
* FUNCTION: isValid( value )
*	Validates if a value is a valid(ish) email address.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating whether a value is a valid(ish) email address
*/
function isValid( value ) {
	return isString( value ) && RE.test( value );
} // end FUNCTION isValid()


// EXPORTS //

module.exports = isValid;
