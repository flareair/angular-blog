'use strict';

const express = require('express');
let router = express.Router();

const pagesController = require('./pagesController');


router.get('/partials/:name', pagesController.renderPartial);

router.get('/partials/directives/:name', pagesController.renderDirective);

router.get('/*', pagesController.renderLayout);


module.exports = router;
