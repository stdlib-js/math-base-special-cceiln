<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# ceiln

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a complex number to the nearest multiple of `10^n` toward positive infinity.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-cceiln
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var cceiln = require( '@stdlib/math-base-special-cceiln' );
```

#### cceiln( \[out,] re, im, n )

Rounds a `complex` number comprised of a **real** component `re` and an **imaginary** component `im` to the nearest multiple of `10^n` toward positive infinity.

```javascript
// Round components to 2 decimal places:
var v = cceiln( -3.141592653589793, 3.141592653589793, -2 );
// returns [ -3.14, 3.15 ]

// If n = 0, `cceiln` behaves like `cceil`:
v = cceiln( -3.141592653589793, 3.141592653589793, 0 );
// returns [ -3.0, 4.0 ]

// Round components to the nearest thousand:
v = cceiln( -12368.0, 12368.0, 3 );
// returns [ -12000.0, 13000.0 ]

v = cceiln( NaN, NaN, 0 );
// returns [ NaN, NaN ]
```

By default, the function returns real and imaginary components as a two-element `array`. To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var out = new Float32Array( 2 );

var v = cceiln( out, -4.2, 5.5, 0 );
// returns <Float32Array>[ -4.0, 6.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    var x = 0.2 + 0.1;
    // returns 0.30000000000000004

    // Should round components to 0.3:
    var v = cceiln( x, x, -16 );
    // returns [ 0.3000000000000001, 0.3000000000000001 ]
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex-float64' );
var randu = require( '@stdlib/random-base-randu' );
var ceil = require( '@stdlib/math-base-special-ceil' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var cceiln = require( '@stdlib/math-base-special-cceiln' );

var re;
var im;
var z;
var o;
var w;
var n;
var i;

for ( i = 0; i < 100; i++ ) {
    re = ( randu()*100.0 ) - 50.0;
    im = ( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );

    n = ceil( randu()*5.0 );
    o = cceiln( real(z), imag(z), -n );
    w = new Complex128( o[ 0 ], o[ 1 ] );

    console.log( 'ceiln(%s,%s) = %s', z.toString(), n.toString(), w.toString() );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/cceil`][@stdlib/math/base/special/cceil]</span><span class="delimiter">: </span><span class="description">round a complex number toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/cfloorn`][@stdlib/math/base/special/cfloorn]</span><span class="delimiter">: </span><span class="description">round a complex number to the nearest multiple of 10^n toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/croundn`][@stdlib/math/base/special/croundn]</span><span class="delimiter">: </span><span class="description">round a complex number to the nearest multiple of 10^n.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cceiln.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cceiln

[test-image]: https://github.com/stdlib-js/math-base-special-cceiln/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-cceiln/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cceiln/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cceiln?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cceiln.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cceiln/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cceiln/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cceiln/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cceiln/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-cceiln/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cceiln/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/cceil]: https://github.com/stdlib-js/math-base-special-cceil

[@stdlib/math/base/special/cfloorn]: https://github.com/stdlib-js/math-base-special-cfloorn

[@stdlib/math/base/special/croundn]: https://github.com/stdlib-js/math-base-special-croundn

<!-- </related-links> -->

</section>

<!-- /.links -->
