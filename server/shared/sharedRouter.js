'use strict';

const express = require('express');
let router = express.Router();

const sharedController = require('./sharedController');

/*
    Mount point /
*/


router.get('/shared/partials/directives/:name', sharedController.renderDirective);

router.get('/*', sharedController.renderDefaultLayout);


module.exports = router;
