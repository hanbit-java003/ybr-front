require('bootstrap');
require('../less/main.less');
var hello = require('./sample/hello');

$('.say-hello').on('click', function() {
    alert(hello.hello($('#txt-hello').val()));
});

$('.goto-sub').on('click', function() {
    location.href = 'sub.html';
});

var topOneModel = require('./model/top/top-one');
var topOneTemplate = require('../template/cont/top-one.hbs');
var topOneHtml = topOneTemplate(topOneModel);

$('.m-top-one').html(topOneHtml);