const mongoose = require("mongoose");
const Float = require("mongoose-float").loadType(mongoose);
const FieldSchema = new mongoose.Schema({
  location: {
    type: {
      type: String,
      enum: ["Polygon"],
      required: true,
    },
    coordinates: {
      type: [[[Number]]],
      required: true,
    },
  },
  username: {
    type: String,
    maxlength: [16, "Username must be less than 16 characters long"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  globalVisibility: {
    type: Boolean,
    default: false,
  },
});

FieldSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("Fields", FieldSchema);
