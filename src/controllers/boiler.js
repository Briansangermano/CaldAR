const db = require("../models");
const Boiler = db.boiler;

//Create a new Boiler
exports.create = (req, res) => {
  if (
    !req.body.id_boiler ||
    !req.body.description ||
    !req.body.type ||
    !req.body.maintance_rate ||
    !req.body.hour_maintaince_cost ||
    !req.body.hour_eventual_cost
  ) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const boiler = new Boiler({
    id_boiler: req.body.id_boiler,
    description: req.body.description,
    type: req.body.type,
    maintance_rate: req.body.maintance_rate,
    hour_maintaince_cost: req.body.hour_maintaince_cost,
    hour_eventual_cost: req.body.hour_eventual_cost,
  });

  boiler
    .save(boiler)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while creating the Boiler.",
      });
    });
};

//Retrieve all Boilers from the DB
exports.findAll = (req, res) => {
  Boiler.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while retrieving Boilers.",
      });
    });
};

//Find a Boiler by ID
exports.findOne = (req, res) => {
  Boiler.findOne({ id_boiler: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Boiler with id ${req.params.id_boiler} was not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while retrieving Boiler.",
      });
    });
};

//Find a Boiler by an specific property: in this case, by DESCRIPTION
exports.findDescription = (req, res) => {
  const description = req.params.description;
  Boiler.findOne({ description })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Boiler with cuit ${description} was not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred while retrieving Boiler.",
      });
    });
};

//Delete a Boiler by ID
exports.delete = (req, res) => {
  const id_boiler = req.params.id;
  Boiler.findOneAndRemove({ id_boiler }, { useFindeAndModify: false })
    .then(() => res.send({ message: `Boiler was removed succesfully` }))
    .catch(() => {
      res.status(500).send({
        message: `Some error ocurred while removing Boiler with id = ${id_boiler}`,
      });
    });
};

//Update a Boiler by ID
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  if (
    !req.body.id_boiler ||
    !req.body.description ||
    !req.body.type ||
    !req.body.maintance_rate ||
    !req.body.hour_maintaince_cost ||
    !req.body.hour_eventual_cost
  ) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const id_boiler = req.params.id;
  Boiler.findOneAndUpdate({ id_boiler }, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Boiler with id = ${id_boiler}. Maybe Boiler was not found`,
        });
      } else res.send({ message: "Boiler was updated succesfully" });
    })
    .catch(() => {
      res.status(500).send({
        message: `Error updating Boiler with id = ${id_boiler}`,
      });
    });
};
