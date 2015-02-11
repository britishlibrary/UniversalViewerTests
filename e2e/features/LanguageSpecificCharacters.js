/**
 * Created by Adam on 11/02/2015.
 */

var ViewerPage = require("./PageObjects/ViewerPage.js");
var LanguageLookup = require("./support/LanguageLookup.js");

var LanguageSpecificCharacters = function() {

    var ptor = browser;
    var vp = new ViewerPage();
    var showdebug = vp.showdebug;
    var showsteps = vp.showsteps;

    var languageLookup = new LanguageLookup();

    this.Given(/^the user is viewing the Viewer in (\w+)$/, function(language, callback) {
        if(showsteps) { console.log('Given the user is viewing the Viewer in ' + language); }
        var languageCode = languageLookup.getLanguageCode(language);
        if(showdebug) { console.log('language code = ' + languageCode); }

        vp.resetFrame(
            function() {
                vp.languageSelectionMenuButton().then(
                    function(languageSelectionMenuButton) {
                        languageSelectionMenuButton.click().then(
                            function() {
                                callback();
                            },
                            function() {
                                callback.fail('could not click languageSelectionMenuButton');
                            });
                    },
                    function() {
                        callback.fail('could not find languageSelectionMenuButton');
                    });
            });
    });

    this.When(/^they choose to display the language test page$/, function(callback) {
        if(showsteps) { console.log('When they choose to display the language test page'); }
        callback.pending();
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
