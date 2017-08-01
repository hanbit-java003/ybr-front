require('bootstrap');
require('../less/main.less');
require('../less/main-sub/m-top.less');

var common = require('./common');

var hello = require('./sample/hello');
$('.say-hello').on('click', function() {
    alert(hello.hello($('#txt-hello').val()));
});

$('.goto-sub').on('click', function() {
    location.href = 'sub.html';
});

var topLank = require('./model/top-lank');

function initTopLank() {
    $('.m-top-gen-li').empty();

    var topLankTemplate = require('../template/top-lank.hbs');

    for (var i=0; i<topLank.length; i++) {
        var topLankHtml = topLankTemplate(topLank[i]);

        $('.m-top-gen-li').append(topLankHtml);
    }
}
initTopLank(topLank);