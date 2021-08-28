// 1.

var i = 2;

while (i <= 100) {
    var a = 2;
    var b = 1;

    while (a < i) {
        if (i % a === 0)
            b = 0;

        a++;
    }

    if (b !== 0)
        console.log(i);

    i++;
}



// 2.

let shop_cart = [55, 106, 98, 205, 76, 44, 91, 110, 59, 201];

function total_sum(shop_cart) {
  let sum = 0;
  for (let price of shop_cart) {
    sum = sum + price;
  }
  return sum;
}

console.log(total_sum(shop_cart));



