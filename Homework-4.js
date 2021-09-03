// 1.

function num_to_obj(n) {
    if(n > 999){
        console.log("Слишком большое число. Введите число число от 1 до 999")
        return {}
    } else {
        return {
            'сотни': Math.floor(n / 100) % 100,
            'десятки': Math.floor(n / 10) % 10,
            'единицы': n % 10
        }
    }
    
}

console.log(num_to_obj(198)) 



// 2.

function Products(name, price) {
    let products = {};
    products.name = name;
    products.price = price;
    return products;
}

let Shop_Cart = {
    cart: [],
    Total_Price() {
        let price_reduce = (sum, current) => sum + current.price;
        let total_result = this.cart.reduce(price_reduce, 0);
        return total_result;
    },
    addProduct(item) {
        this.cart.push(item)
    }
};

Shop_Cart.addProduct(Products('Coffee', 500));
Shop_Cart.addProduct(Products('Jam', 100));
Shop_Cart.addProduct(Products('Cheese', 200));
Shop_Cart.addProduct(Products('Cake', 700));
console.log(Shop_Cart.Total_Price());