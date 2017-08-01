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