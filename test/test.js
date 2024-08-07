/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var PI = require( '@stdlib/constants-float64-pi' );
var EPS = require( '@stdlib/constants-float64-eps' );
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var pow = require( '@stdlib/math-base-special-pow' );
var abs = require( '@stdlib/math-base-special-abs' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var real = require( '@stdlib/complex-float64-real' );
var imag = require( '@stdlib/complex-float64-imag' );
var cceiln = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cceiln, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a `NaN` if provided a `NaN`', function test( t ) {
	var v;

	v = cceiln( new Complex128( NaN, NaN ), 0 );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	v = cceiln( new Complex128( NaN, NaN ), NaN );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaNs` if provided `n = +-infinity`', function test( t ) {
	var v;

	v = cceiln( new Complex128( 3.14, 3.14 ), PINF );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	v = cceiln( new Complex128( 3.14, 3.14 ), NINF );
	t.strictEqual( isnan( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isnan( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var v;

	v = cceiln( new Complex128( -0.0, -0.0 ), 0 );
	t.strictEqual( isNegativeZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns expected value' );

	v = cceiln( new Complex128( -0.0, -0.0 ), -2 );
	t.strictEqual( isNegativeZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns expected value' );

	v = cceiln( new Complex128( -0.0, -0.0 ), 2 );
	t.strictEqual( isNegativeZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+0` if provided `+0`', function test( t ) {
	var v;

	v = cceiln( new Complex128( +0.0, +0.0 ), 0 );
	t.strictEqual( isPositiveZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( imag( v ) ), true, 'returns expected value' );

	v = cceiln( new Complex128( +0.0, +0.0 ), -2 );
	t.strictEqual( isPositiveZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( imag( v ) ), true, 'returns expected value' );

	v = cceiln( new Complex128( +0.0, +0.0 ), 2 );
	t.strictEqual( isPositiveZero( real( v ) ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	var v = cceiln( new Complex128( PINF, PINF ), 5 );
	t.strictEqual( real( v ), PINF, 'returns expected value' );
	t.strictEqual( imag( v ), PINF, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', function test( t ) {
	var v = cceiln( new Complex128( NINF, NINF ), -3 );
	t.strictEqual( real( v ), NINF, 'returns expected value' );
	t.strictEqual( imag( v ), NINF, 'returns expected value' );
	t.end();
});

tape( 'the function supports rounding real and imaginary components to a desired number of decimals', function test( t ) {
	var expected;
	var v;

	v = cceiln( new Complex128( -PI, PI ), -2 );
	expected = new Complex128( -3.14, 3.15 );
	t.strictEqual( real( v ), real( expected ), 'returns expected value' );
	t.strictEqual( imag( v ), imag( expected ), 'returns expected value' );

	v = cceiln( new Complex128( PI, -PI ), -2 );
	expected = new Complex128( 3.15, -3.14 );
	t.strictEqual( real( v ), real( expected ), 'returns expected value' );
	t.strictEqual( imag( v ), imag( expected ), 'returns expected value' );

	v = cceiln( new Complex128( 9.99999, 9.9999 ), -2 );
	expected = new Complex128( 10.0, 10.0 );
	t.strictEqual( real( v ), real( expected ), 'returns expected value' );
	t.strictEqual( imag( v ), imag( expected ), 'returns expected value' );

	v = cceiln( new Complex128( -9.99999, -9.9999 ), -2 );
	expected = new Complex128( -9.99, -9.99 );
	t.strictEqual( real( v ), real( expected ), 'returns expected value' );
	t.strictEqual( imag( v ), imag( expected ), 'returns expected value' );

	v = cceiln( new Complex128( 0.0, 0.0 ), -2 );
	expected = new Complex128( 0.0, 0.0 );
	t.strictEqual( real( v ), real( expected ), 'returns expected value' );
	t.strictEqual( imag( v ), imag( expected ), 'returns expected value' );

	v = cceiln( new Complex128( -12368.0, 12368.0 ), -2 );
	expected = new Complex128( -12368.0, 12368.0 );
	t.strictEqual( real( v ), real( expected ), 'returns expected value' );
	t.strictEqual( imag( v ), imag( expected ), 'returns expected value' );
	t.end();
});

tape( 'rounding components to a desired number of decimals can result in unexpected behavior', function test( t ) {
	var x;
	var v;

	x = 0.2 + 0.1; // => 0.30000000000000004
	v = cceiln( new Complex128( x, x ), -16 );

	t.strictEqual( real( v ), 0.3000000000000001, 'returns 0.3000000000000001 and not 0.3' );
	t.strictEqual( imag( v ), 0.3000000000000001, 'returns 0.3000000000000001 and not 0.3' );
	t.end();
});

tape( 'the function supports rounding components to a desired number of digits', function test( t ) {
	var expected;
	var v;

	v = cceiln( new Complex128( -PI, PI ), 4 );
	expected = new Complex128( 0.0, 10000.0 );
	t.strictEqual( real( v ), real( expected ), 'returns expected value' );
	t.strictEqual( imag( v ), imag( expected ), 'returns expected value' );

	v = cceiln( new Complex128( -12368.0, 12368.0 ), 3 );
	expected = new Complex128( -12000.0, 13000.0 );
	t.strictEqual( real( v ), real( expected ), 'returns expected value' );
	t.strictEqual( imag( v ), imag( expected ), 'returns expected value' );

	v = cceiln( new Complex128( 12363.0, -12363.0 ), 1 );
	expected = new Complex128( 12370.0, -12360.0 );
	t.strictEqual( real( v ), real( expected ), 'returns expected value' );
	t.strictEqual( imag( v ), imag( expected ), 'returns expected value' );

	v = cceiln( new Complex128( PI, -PI ), 3 );
	t.strictEqual( real( v ), 1000.0, 'returns expected value' );
	t.strictEqual( isNegativeZero( imag( v ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the components unchanged if provided an `n` which is less than the minimum decimal exponential (-324)', function test( t ) {
	var exp;
	var n;
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*616.0 ) - 308;
		x = (1.0+randu()) * pow( 10.0, exp );
		n = -(round( randu()*1000.0 ) + 325);
		v = cceiln( new Complex128( x, x ), n );
		t.strictEqual( real( v ), x, 'returns expected value when provided re='+x+', im='+x+', n='+n+'.' );
		t.strictEqual( imag( v ), x, 'returns expected value when provided re='+x+', im='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if a component is too large a double to have decimals and `n < 0`, the component is returned unchanged', function test( t ) {
	var sign;
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		sign = ( randu()<0.5 ) ? -1.0 : 1.0;
		exp = 54 + round( randu()*254.0 );
		x = sign * (1.0+randu()) * pow( 10.0, exp );
		n = -( round( randu()*324.0) );
		v = cceiln( new Complex128( x, x ), n );
		t.strictEqual( real( v ), x, 'returns expected value when provided re='+x+', im='+x+', n='+n+'.' );
		t.strictEqual( imag( v ), x, 'returns expected value when provided re='+x+', im='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if `n > 308` and a component is greater than zero, the function returns `+infinity`', function test( t ) {
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*307.0 );
		x = (1.0+randu()) * pow( 10.0, exp );
		n = round( randu()*100.0 ) + 309;
		v = cceiln( new Complex128( x, x ), n );
		t.strictEqual( real( v ), PINF, 'returns expected value when provided re='+x+', im='+x+', n='+n+'.' );
		t.strictEqual( imag( v ), PINF, 'returns expected value when provided re='+x+', im='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'if `n > 308` and a component is less than zero, the function returns `-0` (sign preserving)', function test( t ) {
	var exp;
	var x;
	var n;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		exp = round( randu()*307.0 );
		x = -(1.0+randu()) * pow( 10.0, exp );
		n = round( randu()*100.0 ) + 309;
		v = cceiln( new Complex128( x, x ), n );
		t.strictEqual( isNegativeZero( real( v ) ), true, ' returns -0 when provided re='+x+', n='+n+'.' );
		t.strictEqual( isNegativeZero( imag( v ) ), true, ' returns -0 when provided im='+x+', n='+n+'.' );
	}
	t.end();
});

tape( 'the function supports rounding very small numbers (including subnormals)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var n;
	var v;
	var i;

	x = 3.1468234343023397 * pow( 10.0, -308 );

	n = [];
	for ( i = -308; i > -325; i-- ) {
		n.push( i );
	}
	expected = [
		4e-308,
		3.2e-308,
		3.15e-308,
		3.147e-308,
		3.1469e-308,
		3.14683e-308,
		3.146824e-308,
		3.1468235e-308,
		3.14682344e-308,
		3.146823435e-308,
		3.1468234344e-308,
		3.14682343431e-308,
		3.146823434303e-308,
		3.1468234343024e-308,
		3.14682343430234e-308,
		3.146823434302340e-308,
		3.1468234343023397e-308
	];

	for ( i = 0; i < n.length; i++ ) {
		v = cceiln( new Complex128( x, x ), n[i] );
		if ( real( v ) === expected[i] ) {
			t.strictEqual( real( v ), expected[i], 'returns '+expected[i]+' when provided re='+x+', im='+x+', and n='+n[i]+'.' );
		} else {
			delta = abs( real( v ) - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 're: '+x+'. n: '+n[i]+'. v: '+v[0]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol );

			delta = abs( imag( v ) - expected[i] );
			tol = EPS * abs( expected[i] );
			t.strictEqual( delta <= tol, true, 'im: '+x+'. n: '+n[i]+'. v: '+v[1]+'. expected: '+expected[i]+'. delta: '+delta+'. tol: '+tol );
		}
	}
	t.end();
});

tape( 'if the function encounters overflow, the function returns the input component', function test( t ) {
	var x;
	var v;

	x = 3.1468234343023397;
	v = cceiln( new Complex128( x, x ), -314 );
	t.strictEqual( real( v ), x, 'returns expected value' );
	t.strictEqual( imag( v ), x, 'returns expected value' );

	x = -3.1468234343023397;
	v = cceiln( new Complex128( x, x ), -314 );
	t.strictEqual( real( v ), x, 'returns expected value' );
	t.strictEqual( imag( v ), x, 'returns expected value' );

	x = 9007199254740000;
	v = cceiln( new Complex128( x, x ), -300 );
	t.strictEqual( real( v ), x, 'returns expected value' );
	t.strictEqual( imag( v ), x, 'returns expected value' );

	x = -9007199254740000;
	v = cceiln( new Complex128( x, x ), -300 );
	t.strictEqual( real( v ), x, 'returns expected value' );
	t.strictEqual( imag( v ), x, 'returns expected value' );

	t.end();
});
