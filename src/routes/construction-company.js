const constructionCompany = require("../controllers/construction-company.js");
const router = require("express").Router();

//Create a new Construction Company
router.post("/", constructionCompany.create);

//Update a Construction Company by id
router.put("/:id_company", constructionCompany.update);
/* **** - router.put('/:id', constructionCompany.update); - **** --> I don't think this is correct because I have other
endpoints with id first, as "id_building" and "id_user"*/

//Delete a Construction Company by id
router.delete("/:id_company", constructionCompany.delete);
/* **** - router.delete('/:id', constructionCompany.delete); - **** --> I don't think this is correct because I have other
endpoints with id first, as "id_building" and "id_user"*/

//Retrieve all Construction Companies
router.get("/", constructionCompany.findAll);

//Retrieve Construction Companies by ID
router.get("/:id_company", constructionCompany.findOne);
/* **** - router.get('/:id', constructionCompany.findOne); - **** --> I don't think this is correct because I have other
endpoints with id first, as "id_building" and "id_user"*/

////Retrieve Construction Companies by type (CUIT)
router.get("/:cuit", constructionCompany.findCuit);

module.exports = router;
