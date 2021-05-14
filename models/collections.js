const mongoose = require("mongoose");
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
    collectionUrl: {
        type: String,
    },
    collectionSubmitter: {
        type: String,
        trim: true,
        required: true,
    },
    tripRef: {
        type: Schema.Types.ObjectId,
        ref: "Trip"
    }
});

const Collection = mongoose.model("Collection", CollectionsSchema);

module.exports = Collection;