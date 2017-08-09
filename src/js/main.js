require('bootstrap');
require('../less/main.less');
require('../less/main-sub/m-issue.less');

var common = require('./common');

var mainIssue = require('./model/m-mainIssue');

function initMainIssue() {
    var mainIssueTemplate = require('../template/m-mainIssue.hbs');

    for(var i=0; i<mainIssue.length; i++) {
        var mainIssueHtml = mainIssueTemplate(mainIssue[i]);

        $('.m-mainIssue-m').append(mainIssueHtml);
    }
}

initMainIssue();