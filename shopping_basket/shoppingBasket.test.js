const ShoppingBasket = require('./ShoppingBasket')

describe(ShoppingBasket, () => {
    it("returns 0 as the price for empty baskets", () => { 
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toEqual(0);
    });

    it("returns the value of the basket once 1 item has been added", () => {
        const candyDouble = { getName: () => 'Mars', getPrice: () => 4.99}

        const basket = new ShoppingBasket();
        basket.addItem(candyDouble);
        expect(basket.getTotalPrice()).toEqual(4.99);
    });

    it("returns the value of the basket once 1 item has been added", () => {
        const candyDouble1 = { getName: () => 'Mars', getPrice: () => 4.99};
        const candyDouble2 = { getName: () => 'Skittle', getPrice: () => 3.99};
        const candyDouble3 = { getName: () => 'Skittle', getPrice: () => 3.99};

        const basket = new ShoppingBasket();
        basket.addItem(candyDouble1);
        basket.addItem(candyDouble2);
        basket.addItem(candyDouble3);
        expect(basket.getTotalPrice()).toEqual(12.97);
    });
});