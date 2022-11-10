console.log("Node Path = " + process.argv[0]);
console.log("script file path =" + process.argv[1]);

const data: number[] = [];
for (var i = 2; i < process.argv.length; i++) {
  data.push(Number(process.argv[i]));
}
console.log(data);

for (let item of data) {
  const res = primeFactor(item);
  console.log(item + " =  " + res);
}

function primeFactor(a: number): number[] {
  const v: number[] = [];
  let x = a;
  let n = 2;
  while (x > n) {
    if (x % n == 0) {
      x = x / n;
      v.push(n);
    } else {
      n += n == 2 ? 1 : 2;
    }
  }
  v.push(x);
  return v;
}

// window.addEventListener("load", function (event) {
//   var p = document.querySelector("#target");
//   p.textContent = "修正";
// });
