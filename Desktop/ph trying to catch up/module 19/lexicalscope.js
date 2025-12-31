let x = 10;

function outer() {
  let y = 20;

  function inner() {
    console.log(x, y);
  }

  inner();
}

outer();
// --------------------------------
let value = "global";

function first() {
  let value = "first";

  second();
}

function second() {
  console.log(value);
}

first();
let obj = {
  a: 1,
  b: 2
};
let map = new Map();
map.set("a", 1);
map.get("a");
