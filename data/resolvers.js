import { Widgets } from './dbConnectors';

export const resolvers = {
    getProduct: async ({ id }) => {
        try {
            const product = await Widgets.findById(id);
            return product;
        } catch (err) {
            throw new Error(err);
        }
    },
    createProduct: ({ input }) => {
        // let id = require('crypto').randomBytes(10).toString('hex');
        // productDatabse[id] = input;
        // return new Product(id, input);
    }
};

export default resolvers;
