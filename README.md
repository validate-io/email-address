Email Address
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is an [email address](http://davidcel.is/posts/stop-validating-email-addresses-with-regex/).


## Installation

``` bash
$ npm install validate.io-email-address
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isValid = require( 'validate.io-email-address' );
```

#### isValid( value )

Validates if a `value` is an [email address](http://davidcel.is/posts/stop-validating-email-addresses-with-regex/).

``` javascript
var bool = isValid( 'beep@boop.com' );
// returns true
```

__Notes__:
*	Validation is __not__ rigorous, nor [should it be](http://davidcel.is/posts/stop-validating-email-addresses-with-regex/). 9 RFCs relate to email addresses, and accounting for all of them is a fool's errand. This module performs the simplest validation; i.e., requiring __at least__ one `@` symbol. 
*	For rigorous validation, send a confirmation email. If the email bounces, consider the email invalid.


## Examples

``` javascript
var isValid = require( 'validate.io-email-address' );

console.log( isValid( 'beep@boop.com') );
// returns true

console.log( isValid( 'beep' ) );
// returns false

console.log( isValid( 'beep.com' ) );
// returns false

console.log( isValid( null ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-email-address.svg
[npm-url]: https://npmjs.org/package/validate.io-email-address

[travis-image]: http://img.shields.io/travis/validate-io/email-address/master.svg
[travis-url]: https://travis-ci.org/validate-io/email-address

[codecov-image]: https://img.shields.io/codecov/c/github/validate-io/email-address/master.svg
[codecov-url]: https://codecov.io/github/validate-io/email-address?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/email-address.svg
[dependencies-url]: https://david-dm.org/validate-io/email-address

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/email-address.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/email-address

[github-issues-image]: http://img.shields.io/github/issues/validate-io/email-address.svg
[github-issues-url]: https://github.com/validate-io/email-address/issues
