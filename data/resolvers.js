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

    getAllProducts: async () => {
        return Widgets.find({})
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
    },

    updateProduct: async ({ input }) => {
        try {
            const updatedProduct = await Widgets.findOneAndUpdate({ _id: input.id }, input, { new: true });
            return updatedProduct;
        } catch (err) {
            throw new Error(err);
        }
    },

    deleteProduct: async ({ id }) => {
        try {
            const result = await Widgets.deleteOne({ _id: id });
            if (result.deletedCount > 0) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            throw new Error(err);
        }
    }
};

export default resolvers;
