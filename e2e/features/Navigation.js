var ViewerPage = require("./PageObjects/ViewerPage.js");

var Navigation = function() {

    var ptor = browser;
    var vp = new ViewerPage();
    var showdebug = vp.showdebug;
    var showsteps = vp.showsteps;

    this.Given(/^the user is viewing the Viewer on page (\w+)$/, function (arg1, callback) {
        if(showsteps) { console.log('Given the user is viewing the Viewer on page ' + arg1); }
        vp.switchPage(arg1, callback);
    });

    this.When(/^they click the Next arrow button$/, function (callback) {
        if(showsteps) { console.log('When they click the Next arrow button'); }
        vp.resetFrame(
            function() {
                vp.navigationNextButton().then(
                    function(nextButton) {
                        nextButton.click().then(
                            callback,
                            function() {
                                callback.fail('clicking next failed');
                            });
                    },
                    function(){
                        callback.fail("button next not found");
                    });
            });
    });

    this.When(/^they click the Previous arrow button$/, function (callback) {
        if(showsteps) { console.log('When they click the Previous arrow button'); }
        vp.resetFrame(
            function() {
                vp.navigationPrevButton().then(
                    function (prevButton) {
                        prevButton.click().then(
                            callback,
                            function() {
                                callback.fail('clicking prev failed');
                            });
                    },
                    function () {
                        callback.fail("button next not found");
                    });
            });
    });

    this.Then(/^the content of the page (\w+) is displayed to the user$/, function (arg1, callback) {
        if(showsteps) { console.log('Then the content of the page "' + arg1 + '" is displayed to the user'); }
        vp.resetFrame(
            function() {
                vp.selectedThumbnailLabels().then(
                    function (labels) {
                        var actual = '';
                        var label = labels[0];
                        for(i = 0; i < labels.length; i++){
                            label = labels[i];
                            label.getText().then(
                                function (labelText) {
                                    labelText = labelText.trim();
                                    if(labelText == arg1) {
                                        callback();
                                    } else {
                                        actual =+ labelText;
                                        if(i == labels.length - 1) {
                                            callback.fail("Expected labelText(" + actual + ") to be equal arg1(" + arg1 + ")");
                                        }
                                    }
                                },
                                function() {
                                    callback.fail('get label text failed');
                                });
                        }
                    },
                    function () {
                        callback.fail("incorrect page label");
                    });
            });
    });

    this.Given(/^the Viewer is on full screen mode$/, function (callback) {
        if(showsteps) { console.log('Given the Viewer is on full screen mode'); }
        vp.resetFrame(
            function() {
                vp.fullScreenButton().then(
                    function (fullScreenButton) {
                        fullScreenButton.click().then(
                            callback,
                            function() {
                                callback.fail('clicking full screen button failed');
                            }
                        );
                    },
                    function () {
                        if(showdebug) { console.log('could not find full screen button so must be in full screen mode already'); }
                        callback();
                    });
            });
    });

    this.Given(/^the Viewer is in one-up mode$/, function(callback) {
       if(showsteps) { console.log('Given the Viewer is in one-up mode'); }
        vp.resetFrame(
            function() {
                vp.settingsButton().then(
                    function(settingsButton) {
                        settingsButton.click().then(
                            function() {
                                vp.resetFrame(
                                    function() {
                                        vp.optionTwoUpCheckbox().then(
                                            function (optionTwoUpCheckbox) {
                                                optionTwoUpCheckbox.getAttribute('checked').then(
                                                    function(checked) {
                                                        if(checked) {
                                                            optionTwoUpCheckbox.click().then(
                                                                function () {
                                                                    vp.resetFrame(
                                                                        function () {
                                                                            vp.settingsCloseButton().then(
                                                                                function (settingsCloseButton) {
                                                                                    settingsCloseButton.click().then(
                                                                                        callback,
                                                                                        function () {
                                                                                            callback.fail('could not click settings close button to exit option screen');
                                                                                        });
                                                                                },
                                                                                function() {
                                                                                    callback.fail('could not find settings close button');
                                                                                });
                                                                        });
                                                                },
                                                                function () {
                                                                    callback.fail('could not click two-up checkbox option');
                                                                });
                                                        } else {
                                                            // already un-checked
                                                            callback();
                                                        }
                                                    },
                                                    function() {
                                                        callback.fail('could not get checked attribute of two-up checkbox option');
                                                    });
                                            },
                                            function () {
                                                callback.fail('could not find two-up checkbox option');
                                            });
                                    });
                            },
                            function() {
                                callback.fail('could not click settings button');
                            });
                    },
                    function() {
                        callback.fail('could not find settings button');
                    });
            });
    });

    this.Given(/^the user is viewing the Viewer on its very first page$/, function (callback) {
        if(showsteps) { console.log('Given the user is viewing the Viewer on its very first page'); }
        vp.resetFrame(
            function() {
                vp.navigationFirstButton().then(
                    function(firstButton){
                        firstButton.click().then(
                            callback,
                            function() {
                                callback.fail('clicking navigation first item button failed');
                            });
                    },
                    function(){
                        callback.fail('navigation first item button not found');
                    });
            });
    });

    this.Then(/^the Previous arrow button is disabled$/, function (callback) {
        if(showsteps) { console.log('Then the Previous arrow button is disabled'); }
        vp.resetFrame(
            function() {
                vp.sleep(vp.reactionDelay).then(
                    function() {
                        vp.navigationPrevDisabledButton().then(
                            function(disabledNavigationPrevButton) {
                                vp.resetFrame(
                                    function() {
                                        vp.canvasPrevDisabledButton().then(
                                            function(disabledCanvasPrevButton) {
                                                callback();
                                            },
                                            function() {
                                                callback.fail('Canvas previous page arrow should be disabled');
                                            });
                                    });
                            },
                            function() {
                                callback.fail('Previous button should be disabled');
                            });
                    });
            });
    });

    this.Given(/^the user is viewing the Viewer in its last page$/, function (callback) {
        if(showsteps) { console.log('Given the user is viewing the Viewer in its last page'); }
        vp.resetFrame(
            function() {
                vp.navigationLastButton().then(
                    function (lastButton) {
                        lastButton.click().then(
                            callback,
                            function() {
                                callback.fail('clicking navigation last item button failed');
                            });
                    },
                    function () {
                        callback.fail("button last page not found");
                    });
            });
    });

    this.Then(/^the Next arrow is disabled$/, function (callback) {
        if(showsteps) { console.log('Then the Next arrow is disabled'); }
        vp.resetFrame(
            function() {
                vp.sleep(vp.reactionDelay).then(
                    function() {
                        vp.navigationNextDisabledButton().then(
                            function (disabledNavigationNextButton) {
                                vp.resetFrame(
                                    function() {
                                        vp.canvasNextDisabledButton().then(
                                            function(disabledCanvasNextButton) {
                                                callback();
                                            },
                                            function () {
                                                callback.fail('Canvas next page arrow should be disabled');
                                            });
                                    });
                            },
                            function () {
                                callback.fail('Next button should be disabled');
                            });
                    });
            });
    });

    this.When(/^they go to the page (\d+)$/, function (arg1, callback) {
        if(showsteps) { console.log('When they go to the page '+ arg1); }
        vp.resetFrame(
            function() {
                vp.searchText().then(
                    function (searchText) {
                        searchText.clear();
                        searchText.sendKeys(arg1);
                        vp.resetFrame(
                            function() {
                                vp.goButton().then(
                                    function (goButton) {
                                        goButton.click().then(
                                            callback,
                                            function() {
                                                callback.fail('clicking go button failed');
                                            });
                                    },
                                    function () {
                                        callback.fail("button go not found");
                                    });
                            });
                    },
                    function () {
                        callback.fail("page search text box not found");
                    });
            });
    });

    this.Then(/^the image is labeled with page (\d+)$/, function (arg1, callback) {
        if(showsteps) { console.log('Then the image is labeled with page '+ arg1); }
        vp.resetFrame(
            function() {
                vp.selectedThumbnailLabels().then(
                    function (labels) {
                        var label;
                        var actual;
                        for(i = 0; i < labels.length; i++){
                            label = labels[i];
                            label.getText().then(
                                function (labelText) {
                                    labelText = labelText.trim();
                                    if(labelText.substring(0,2) == arg1) {
                                        callback();
                                    } else {
                                        actual =+ labelText;
                                        if(i == labels.length - 1) {
                                            callback.fail("page label (" + actual + ") should be (" + arg1 + ")");
                                        }
                                    }
                                },
                                function () {
                                    callback.fail('could not get text of thumbnail label');
                                });
                        }
                    },
                    function () {
                        callback.fail('could not find thumbnail labels');
                    });
            });
    });
};

module.exports = Navigation;