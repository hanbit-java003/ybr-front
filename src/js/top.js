require('bootstrap');
require('../less/theres.less');

var common = require('./common');

var topOneModel = require('./model/top-one');
var topOneTemplate = require('../template/top-one.hbs');
var topOneHtml = topOneTemplate(topOneModel);

$('.m-top-one').html(topOneHtml);