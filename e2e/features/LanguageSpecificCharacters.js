var ViewerPage = require("./PageObjects/ViewerPage.js");
var LanguageLookup = require("./support/LanguageLookup.js");

var LanguageSpecificCharacters = function() {

    var ptor = browser;
    var vp = new ViewerPage();
    var showdebug = vp.showdebug;
    var showsteps = vp.showsteps;

    var languageLookup = new LanguageLookup();

    this.Given(/^the user is viewing the Viewer in (\w+)$/, function(languageName, callback) {
        if(showsteps) { console.log('Given the user is viewing the Viewer in ' + languageName); }
        var languageCode = languageLookup.getLanguageCode(languageName);
        if(showdebug) { console.log('language code = ' + languageCode); }
        vp.selectLanguage(languageCode, callback, callback);
    });

    this.When(/^they choose to display the language test page$/, function(callback) {
        if(showsteps) { console.log('When they choose to display the language test page'); }
        callback.pending();
    });

    this.When(/^they switch to the (\w+) language$/, function(languageName, callback) {
        if(showsteps) { console.log('When they switch to the ' + languageName + ' language'); }
        var languageCode = languageLookup.getLanguageCode(languageName);
        if(showdebug) { console.log('language code = ' + languageCode); }
        vp.selectLanguage(languageCode, callback, callback);
    });

    this.Then(/^they see special characters in the search option label$/, function(callback) {
        if(showsteps) { console.log('Then they see special characters in the search option label'); }
        vp.resetFrame(
            function() {
                vp.searchImageLabel().then(
                    function(searchImageLabel) {
                        searchImageLabel.getText().then(
                            function(searchImageLabelText) {
                                if(searchImageLabelText.indexOf("ɠ") > -1) {
                                    callback();
                                } else {
                                    callback.fail('could not find special characters within text of searchImageLabel');
                                }
                            },
                            function() {
                                callback.fail('could not get text of searchImageLabel');
                            });
                    },
                    function() {
                        callback.fail('could not find searchImageLabel');
                    });
            });
    });
};

module.exports = LanguageSpecificCharacters;