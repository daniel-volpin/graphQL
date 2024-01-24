class Product {
    constructor(id, { name, description, price, soldout, inventory, stores }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldout = soldout;
        this.inventory = inventory;
        this.stores = stores
    }
}

const productDatabse = {};

const resolvers = {
    getProducts: ({ id }) => {
        return new Product(id, productDatabse[id]);
    },
    createProduct: ({ input }) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        productDatabse[id] = input;
        return new Product(id, input);
    }
};

export default resolvers;