module.exports = (mongoose) => {
  const boiler = mongoose.model(
    "boiler",
    mongoose.Schema(
      {
        id_boiler: Number,
        description: String,
        type: String,
        maintance_rate: String,
        hour_maintaince_cost: Number,
        hour_eventual_cost: Number,
      },
      { timestamps: true }
    )
  );
  return boiler;
};
