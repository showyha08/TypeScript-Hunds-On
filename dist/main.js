(() => {
  console.log("Node Path = " + process.argv[0]),
    console.log("script file path =" + process.argv[1]);
  for (var o = [], r = 2; r < process.argv.length; r++)
    o.push(Number(process.argv[r]));
  console.log(o);
  for (var s = 0, e = o; s < e.length; s++) {
    var l = e[s],
      a = c(l);
    console.log(l + " =  " + a);
  }
  function c(o) {
    for (var r = [], s = o, e = 2; s > e; )
      s % e == 0 ? ((s /= e), r.push(e)) : (e += 2 == e ? 1 : 2);
    return r.push(s), r;
  }
})();
