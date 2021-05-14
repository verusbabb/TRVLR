const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Trip = require("./trips");

const ScheduleSchema = new Schema({
    activityName: {
        type: String,
        trim: true,
        required: true,
    },
    activityDescription: {
        type: String,
    },
    activityDate: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },    
    endTime: {
        type: String,
    },
    activitySubmitter: {
        type: String,
        trim: true,
        required: true,
    },
    tripRef: {
        type: Schema.Types.ObjectId,
        ref: "Trip"
    }
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);

module.exports = Schedule;