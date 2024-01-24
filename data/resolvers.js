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
        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            inventory: input.inventory,
            stores: input.stores
        })

        newWidget.id = newWidget._id;
        
        try {
            newWidget.save(newWidget)
            return newWidget;
        } catch (err) {
            throw new Error(err);
        }
    }
};

export default resolvers;
