# Round Robin
[![npm status](http://img.shields.io/npm/v/roundrobin.svg)](https://www.npmjs.org/package/roundrobin)
[![build status](https://secure.travis-ci.org/clux/roundrobin.svg)](http://travis-ci.org/clux/roundrobin)
[![dependency status](https://david-dm.org/clux/roundrobin.svg)](https://david-dm.org/clux/roundrobin)
[![coverage status](http://img.shields.io/coveralls/clux/roundrobin.svg)](https://coveralls.io/r/clux/roundrobin)
[![stable](http://img.shields.io/badge/stability-stable-74C614.svg)](http://nodejs.org/api/documentation.html#documentation_stability_index)

A simple round robin match scheduler to aid tournament implementations. The round robin implementation is [translated directly from the idea outlined on wikipedia](http://en.wikipedia.org/wiki/Round-robin_tournament#Scheduling_algorithm).

## Usage
Simply give the number of players (with an optional players array), and it will spit out the array of rounds necessary:

```js
var robin = require('roundrobin');
robin(6);
[ [ [ 1, 6 ], [ 2, 5 ], [ 3, 4 ] ],
  [ [ 1, 5 ], [ 6, 4 ], [ 2, 3 ] ],
  [ [ 1, 4 ], [ 5, 3 ], [ 6, 2 ] ],
  [ [ 1, 3 ], [ 4, 2 ], [ 5, 6 ] ],
  [ [ 1, 2 ], [ 3, 6 ], [ 4, 5 ] ] ]

// or with names supplied
robin(6, ['clux', 'lockjaw', 'pibbz', 'xeno', 'e114', 'eclipse']);
[ [ [ 'clux', 'eclipse' ], [ 'lockjaw', 'e114' ], [ 'pibbz', 'xeno' ] ],
  [ [ 'clux', 'e114' ], [ 'eclipse', 'xeno' ], [ 'lockjaw', 'pibbz' ] ],
  [ [ 'clux', 'xeno' ], [ 'e114', 'pibbz' ], [ 'eclipse', 'lockjaw' ] ],
  [ [ 'clux', 'pibbz' ], [ 'xeno', 'lockjaw' ], [ 'e114', 'eclipse' ] ],
  [ [ 'clux', 'lockjaw' ], [ 'pibbz', 'eclipse' ], [ 'xeno', 'e114' ] ] ]
```

## Installation
Install from npm:

```bash
$ npm install roundrobin --save
```

## License
MIT-Licensed. See LICENSE file for details.
