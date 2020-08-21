// const { client } = require("./dbconnection");

// async function getFields(req, res) {
//   const lon = parseFloat(req.params.lon);
//   const lat = parseFloat(req.params.lat);
//   console.log(lon, lat);
//   try {
//     await client.connect();
//     const db = client.db("farmersmargin");
//     console.log(`connected to  ${db.databaseName}`);
//     const collection = db.collection("fields");
//     collection.createIndex({ location: "2dsphere" });
//     var METERS_PER_MILE = 1609.34;
//     const field = await collection.find({
//       location: {
//         $nearSphere: {
//           $geometry: {
//             type: "Polygon",
//             coordinates: [lon, lat],
//           },
//           $maxDistance: 5 * METERS_PER_MILE,
//         },
//       },
//     });

//     // while (await field.hasNext()) {
//     //   console.log(await field.next());
//     // }
//     res.status(200).json({
//       success: true,
//       data: await field.toArray(),
//     });
//     // console.log(await field.toArray());
//   } catch (err) {
//     console.log(err);
//     res.status(501).send({
//       success: false,
//       data: "error",
//     });
//   } finally {
//     client.close();
//     console.log("closed");
//   }
// }

// async function addField(req, res) {
//   console.log(req.body);
//   try {
//     await client.connect();
//     const db = client.db("farmersmargin");
//     const fieldsCollection = db.collection("fields");
//     const cursor = await fieldsCollection.insertOne(req.body);
//     if (cursor.insertedCount) {
//       return res.status(200).json({
//         success: true,
//         message: "data inserted successfully",
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   } finally {
//     client.close();
//     console.log("closed");
//   }
// }

// module.exports = {
//   getFields,
//   addField,
// };

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
  farm: {
    type: String,
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
  color: {
    type: String,
  },
  crop: {
    type: String,
  },
});

FieldSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("Fields", FieldSchema);
