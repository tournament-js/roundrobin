# Round Robin
[![Build Status](https://secure.travis-ci.org/clux/roundrobin.png)](http://travis-ci.org/clux/roundrobin)
[![Dependency Status](https://david-dm.org/clux/roundrobin.png)](https://david-dm.org/clux/roundrobin)
[![stable](http://hughsk.github.io/stability-badges/dist/stable.svg)](http://nodejs.org/api/documentation.html#documentation_stability_index)

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
