const constructionCompanyRouter = require('./construction-company');
const boilerTypesRouter = require('./boiler-types');

const router = require('express').Router();

router.use('/construction-company', constructionCompanyRouter);
router.use('/boiler-types', boilerTypesRouter);

module.exports = router;