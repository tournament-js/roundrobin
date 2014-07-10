var $ = require('interlude')
  , robin = require('../');

exports.robin = function (t) {
  $.range(20).forEach(function (n) {
    var rs = robin(n);
    var expected = ($.odd(n)) ? n : n-1;
    t.equal(expected, rs.length, "correct number of rounds");

    var pMaps = [];
    $.range(n).forEach(function (p) {
      pMaps[p] = [];
    });

    rs.forEach(function (rnd, r) {
      t.equal(rnd.length, Math.floor(n/2), "number of matches in round "+ (r+1));

      var plrs = $.flatten(rnd);
      t.deepEqual(plrs, $.nub(plrs), "players listed only once per round");

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
      t.deepEqual(val, exp, "player " + p + " plays every enemy");
    });
  });
  t.done();
};
