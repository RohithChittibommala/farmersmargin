const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connectDB = async () => {
  try {
    await client.connect();
    const db = client.db("farmersmargin");
    console.log(`connected to  ${db.databaseName}`);
    const collection = db.collection("fields");
    collection.createIndex({ location: "2dsphere" });
    var METERS_PER_MILE = 1609.34;
    const field = await collection.find({
      location: {
        $nearSphere: {
          $geometry: {
            type: "Polygon",
            coordinates: [79.46121454238892, 11.116938192544229],
          },
          $maxDistance: 5 * METERS_PER_MILE,
        },
      },
    });

    while (await field.hasNext()) {
      console.log(await field.next());
    }
    // console.log(await field.toArray());
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
    console.log("closed");
  }
};

module.exports = {
  connectDB,
};
