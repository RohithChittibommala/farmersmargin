const Farms = require("../models/farm");

exports.getFarms = async (req, res, next) => {
  const { lat, lon } = req.params;
  try {
    const farms = await Farms.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(lon), parseFloat(lat)],
          },
          spherical: true,
          distanceField: "distance",
          maxDistance: 10 * 1000,
        },
      },
      { $skip: 0 },
      { $limit: 2 },
    ]);
    return res.status(200).send({
      success: true,
      count: farms.length,
      data: farms,
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({
      error: "Server error",
    });
  }
};

exports.addFarm = async (req, res, next) => {
  try {
    const farm = await Farms.create(req.body);
    return res.status(200).send({
      sucess: true,
      data: farm,
    });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({
        error: "Farm Already exists",
      });
    }
    res.status(501).json({
      error: "Server error",
    });
  }
};
