var ViewerPage = require("./PageObjects/ViewerPage.js");
var LanguageLookup = require("./support/LanguageLookup.js");

var LanguageSwitchingBehaviour = function() {

    var ptor = browser;
    var vp = new ViewerPage();
    var showdebug = vp.showdebug;
    var showsteps = vp.showsteps;

    var languageLookup = new LanguageLookup();

    this.Given(/^the user is viewing the Viewer in (\w+) on page (\w+)$/, function (languageName, pageIdentifier, callback) {
        if(showsteps) { console.log('Given the user is viewing the Viewer in ' + languageName + ' on page ' + pageIdentifier); }
        var languageCode = languageLookup.getLanguageCode(languageName);
        if(showdebug) { console.log('language code = ' + languageCode); }
        vp.selectLanguage(languageCode, callback, function() {
           vp.switchPage(pageIdentifier, callback, callback);
        });
    });

    this.When(/^they change language to (\w+)$/, function(languageName, callback) {
        if(showsteps) { console.log('When they change language to ' + languageName); }
        var languageCode = languageLookup.getLanguageCode(languageName);
        if(showdebug) { console.log('language code = ' + languageCode); }
        vp.selectLanguage(languageCode, callback, callback);
    });
};

module.exports = LanguageSwitchingBehaviour;