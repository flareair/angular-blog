'use strict';
const path = require('path');


exports.renderPartial = (req, res, next) => {
    let partialName = req.params.name;
    return res.render('pages/views/partials/' + partialName);
};