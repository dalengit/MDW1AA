/*
 Shopping Basket 

We should be able to: 
- Create a shopping basket and have a total of 0.
- Be able to add a single item and have it's value added to the total.
- Be able to add multiple items and accumulate the total of the items.
- Be able to add the same items multple times and accumulate the total value of items.
*/
let total = [];

class Item {
    constructor (name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    };

    // Allows you to call this method in the shoppingbasket class 
    getName() {
        return this.name;
    };
};

class ShoppingBasket {
    constructor (){
        this.total = 0;
    };

    addItems(items = []) {

        let basket = [];
        items.forEach(items => {
            basket += " " + items.name + " " + items.quantity;
        });
        console.log(basket);
    };

    getTotal(items = []){

        totalPrice = 0;

        items.forEach(items => {
            let total = items.price * items.quantity;
            total += totalPrice;
        })

        console.log(totalPrice);
    };
};

// New instances
const shoppingBasket = new ShoppingBasket();

const apples = new Item ('apple', 5, 1);

const pears = new Item ('pear', 2, 2);

shoppingBasket.addItems([apples, pears]);

shoppingBasket.getTotal([apples, pears]);

