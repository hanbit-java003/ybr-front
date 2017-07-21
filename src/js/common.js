var topOne = require('./model/top-one');

function initTopOne() {
    $('.m-tops-li').empty();

    var topOneTemplate =  require('../template/top-one.hbs');

    for (var i=0; i<topOne.length; i++) {
        var html = topOneTemplate(topOne[i]);

        $('.m-tops-li').append(html);
    }
}

initTopOne(topOne);

var topLank = require('./model/top-lank');
function initTopLank() {
    $('.m-top-gen-li').empty();

    var topLankTemplate = require('../template/top-lank.hbs');

    for (var i=0; i<topLank.length; i++) {
        var html = topLankTemplate(topLank[i]);

        $('.m-top-gen-li').append(html);
    }
}
initTopLank(topLank);