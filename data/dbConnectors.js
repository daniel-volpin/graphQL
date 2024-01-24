import mongoose from "mongoose";
import { ENUM } from "sequelize";

// MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/widgets");

const widgetSchema = new mongoose.Schema({
    name: { 
        type: String 
    },
    description: { 
        type: String 
    },
    price: { 
        type: Number 
    },
    soldout: { 
        type: String,
        enum: ['SOLDOUT', 'ONSALE'] 
    },
    inventory: { 
        type: Number 
    },
    stores: { 
        type: Array 
    }
});

const Widgets = mongoose.model('widgets', widgetSchema)

export { Widgets };
