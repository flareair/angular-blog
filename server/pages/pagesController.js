'use strict';
const path = require('path');


exports.renderPartial = (req, res, next) => {
    let partialName = req.params.name;
    res.render('pages/views/partials/' + partialName);
};

exports.renderLayout = (req, res, next) => {
    res.render('pages/views/layout');
};

exports.renderDirective = (req, res, next) => {
    let directiveName = req.params.name;
    res.render('pages/views/partials/directives/' + directiveName);
};