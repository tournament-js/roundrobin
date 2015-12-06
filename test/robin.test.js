var $ = require('interlude')
  , test = require('bandage')
  , robin = require('..');

test('robin', function *(t) {
  $.range(20).forEach(function (n) {
    var rs = robin(n);
    var expected = ($.odd(n)) ? n : n-1;
    t.eq(expected, rs.length, 'correct number of rounds');

    var pMaps = [];
    $.range(n).forEach(function (p) {
      pMaps[p] = [];
    });

    rs.forEach(function (rnd, r) {
      t.eq(rnd.length, Math.floor(n/2), 'number of matches in round '+ (r+1));

      var plrs = $.flatten(rnd);
      t.eq(plrs, $.nub(plrs), 'players listed only once per round');

      // keep track of who everyone is playing as well
      rnd.forEach(function (p) {
        var a = p[0]
          , b = p[1];
        pMaps[a].push(b);
        pMaps[b].push(a);
      });
    });

    Object.keys(pMaps).forEach(function (p) {
      var val = pMaps[p].sort($.compare());
      var exp = $.delete($.range(n), Number(p));
      // if this true, then each play all exactly once by previous test
      t.eq(val, exp, 'player ' + p + ' plays every enemy');
    });
  });
});

test('names', function *(t) {
  var ps = ['clux', 'lockjaw', 'pibbz', 'xeno', 'e114', 'eclipse'];
  var pscopy = ps.slice();
  t.eq(robin(6, ps), [
    [ [ 'clux', 'eclipse' ], [ 'lockjaw', 'e114' ], [ 'pibbz', 'xeno' ] ],
    [ [ 'clux', 'e114' ], [ 'eclipse', 'xeno' ], [ 'lockjaw', 'pibbz' ] ],
    [ [ 'clux', 'xeno' ], [ 'e114', 'pibbz' ], [ 'eclipse', 'lockjaw' ] ],
    [ [ 'clux', 'pibbz' ], [ 'xeno', 'lockjaw' ], [ 'e114', 'eclipse' ] ],
    [ [ 'clux', 'lockjaw' ], [ 'pibbz', 'eclipse' ], [ 'xeno', 'e114' ] ] ],
    'expected even output'
  );
  t.eq(ps, pscopy, 'have not modified even input');

  ps.pop();
  pscopy = ps.slice();
  t.eq(robin(5, ps), [
    [ [ 'lockjaw', 'e114' ], [ 'pibbz', 'xeno' ] ],
    [ [ 'clux', 'e114' ], [ 'lockjaw', 'pibbz' ] ],
    [ [ 'clux', 'xeno' ], [ 'e114', 'pibbz' ] ],
    [ [ 'clux', 'pibbz' ], [ 'xeno', 'lockjaw' ] ],
    [ [ 'clux', 'lockjaw' ], [ 'xeno', 'e114' ] ] ],
    'expected odd output'
  );
  t.eq(ps, pscopy, 'have not modified odd input');
});
