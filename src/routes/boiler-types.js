const boilerTypes = require("../controllers/boiler-types.js");
const router = require("express").Router();

//Create a new Boiler Type
router.post("/", boilerTypes.create);

//Update a Boiler Type by id
router.put("/:id_boiler_type", boilerTypes.update);

//Delete a Boiler Type by id
router.delete("/:id_boiler_type", boilerTypes.delete);

//Retrieve all Boiler Types
router.get("/", boilerTypes.findAll);

//Retrieve Boiler Type by ID
router.get("/:id_boiler_type", boilerTypes.findOne);

////Retrieve Boiler Type by type (DESCRIPTION)
router.get("/:description", boilerTypes.findDescription);

module.exports = router;
