/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isValid = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-email-address', function tests() {

	it( 'should export a function', function test() {
		expect( isValid ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.isTrue( isValid( 'beep@boop.com') );
	});

	it( 'should negatively validate', function test() {
		var values = [
			'5',
			'beep',
			'beep/boop',
			'beep.com',
			5,
			null,
			undefined,
			NaN,
			true,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isFalse( isValid( values[ i ] ), values[ i ] );
		}
	});

});
