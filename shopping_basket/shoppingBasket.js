candy = require('./candy')

class ShoppingBasket {
    constructor () {
        this.allCandies = []
    }

    addItem (candy) {
        this.allCandies = this.allCandies.concat(candy);
        return this.allCandies;
    }

    getTotalPrice () {
        let sum = 0
        this.allCandies.map((candy) => {
            sum += candy.getPrice()
        });
        return sum;
    }

}

module.exports = ShoppingBasket;