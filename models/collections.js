const mongoose = require("mongoose");
require('mongoose-type-url');
const Schema = mongoose.Schema;
const Trip = require("./trips");

const CollectionsSchema = new Schema({
    collectionName: {
        type: String,
        trim: true,
        required: true,
    },
    collectionDescription: {
        type: String,
    },
    collectionItems: [
        {
            itemName: {
                type: String,
                trim: true,
                required: true,
            },
            itemUrl: {
                work: {type: mongoose.SchemaTypes.Url, required: true},
                profile: {type: mongoose.SchemaTypes.Url, required: true},
            },
            itemDescription: {
                type: String 
            },
            itemSubmitter: {
                type: String,
                trim: true,
                required: true,
            }
        }
    ],
    tripRef: {
        type: Schema.Types.ObjectId,
        ref: "Trip"
    }
});

const Collection = mongoose.model("Collection", CollectionsSchema);

module.exports = Collection;