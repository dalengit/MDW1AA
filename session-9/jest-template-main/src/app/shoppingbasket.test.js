import ShoppingBasket from "./shoppingbasket";

describe("ShoppingBasket", () => {

    // Variable now available within describe block
    let shoppingBasket;

    // Run this logic before every test
    beforeEach(() => {
        shoppingBasket = new ShoppingBasket();
    });

    test("Should initialize with 0 items", () => {
        expect(shoppingBasket.items.length).toBe(0);
    });

    test("Should add item to shopping basket", () => {
        const item = "Apples";

        shoppingBasket.addItems(item);

        expect(shoppingBasket.items.length).toBe(1);
        expect(shoppingBasket.items).toContain(item);
    });

    afterEach(() => {
        shoppingBasket = null;
    })
});