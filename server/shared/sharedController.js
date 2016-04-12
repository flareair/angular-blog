'use strict';
const path = require('path');

exports.renderDefaultLayout = (req, res, next) => {
    res.render('shared/views/layout');
};

exports.renderDirective = (req, res, next) => {
    let directiveName = req.params.name;
    res.render('shared/views/partials/directives/' + directiveName);
};