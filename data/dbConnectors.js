import mongoose from "mongoose";
import { Sequelize, DataTypes } from "sequelize";
import _ from 'lodash'
import casual from 'casual'

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

const sequelize = new Sequelize('sqlite::memory')

const Categories = sequelize.define('categories', {
    category: DataTypes.STRING,
    description: DataTypes.STRING
})

Categories.sync({force: true}).then(() => {
    _.times(5, (i) => {
        Categories.create({
            category: casual.word,
            description: casual.sentence
        });
    });
});

export { Widgets, Categories };
