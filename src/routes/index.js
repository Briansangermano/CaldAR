const constructionCompanyRouter = require('./construction-company');
const boilerTypesRouter = require('./boiler-types');
const techniciansRouter = require('./technicians');
const buildingRouter = require('./buildings')

const router = require('express').Router();

router.use('/construction-company', constructionCompanyRouter);
router.use('/boiler-types', boilerTypesRouter);
router.use('/technicians', techniciansRouter);
router.use('/buildings', buildingRouter)

module.exports = router;
