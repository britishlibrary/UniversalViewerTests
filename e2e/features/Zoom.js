var ViewerPage = require("./PageObjects/ViewerPage.js");

var Zoom = function() {

    var ptor = browser;
    var vp = new ViewerPage();
    var showdebug = vp.showdebug;
    var showsteps = vp.showsteps;

    var currentZoomLevel;

    this.When(/^they click zoom in button$/, function (callback) {
        if(showsteps) { console.log('When they click zoom button'); }
        vp.resetFrame(
            function() {
                vp.canvasZoomInButton().then(
                    function(canvasZoomInButton) {
                        canvasZoomInButton.click().then(
                            callback,
                            function() {
                                callback.fail('could not click canvasZoomInButton');
                            });
                    },
                    function() {
                        callback.fail('could not find canvasZoomInButton');
                    });
            });
    });

    this.Then(/^an area of the image has a bigger display$/, function (callback) {
        if(showsteps) { console.log('Then an area of the image has a bigger display'); }
        callback.pending();
    });

    this.When(/^they click zoom out button$/, function (callback) {
        if(showsteps) { console.log('When they click zoom out button'); }
        vp.resetFrame(
            function() {
                vp.canvasZoomOutButton().then(
                    function(canvasZoomOutButton) {
                        canvasZoomOutButton.click().then(
                            callback,
                            function() {
                                callback.fail('could not click canvasZoomOutButton');
                            });
                    },
                    function() {
                        callback.fail('could not find canvasZoomOutButton');
                    });
            });
    });

    this.Then(/^an area of the image is seen more far away$/, function (callback) {
        if(showsteps) { console.log('Then an area of the image is seen more far away'); }
        callback.pending();
    });

    this.Given(/^the image is zoomed$/, function (callback) {
        if(showsteps) { console.log('Given the image is zoomed'); }
        callback.pending();
    });

    this.When(/^the user press the mouse and drag the image to the right$/, function (callback) {
        if(showsteps) { console.log('When the user press the mouse and drag the image to the right'); }
        callback.pending();
    });

    this.Then(/^that part of the image moves to the right$/, function (callback) {
        if(showsteps) { console.log('Then that part of the image moves to the right'); }
        callback.pending();
    });

    this.When(/^the current zoom level is recorded$/, function(callback) {
        if(showsteps) { console.log('When the current zoom level is recorded'); }
        ptor.getCurrentUrl().then(
            function(currentUrl) {
                console.log('current url = ' + currentUrl);
                that.currentZoomLevel = currentUrl;
                callback();
            },
            function() {
                callback.fail('could not get current url');
            });
    });

    this.Then(/^the current zoom level matches that which was recorded$/, function (callback) {
        if(showsteps) { console.log('Then the current zoom level matches that which was recorded'); }
        ptor.getCurrentUrl().then(
            function(currentUrl) {
                console.log('current url = ' + currentUrl);
                if(currentUrl == that.currentZoomLevel) {
                    callback();
                } else {
                    callback.fail('current zoom level (' + currentUrl + ') did not match recorded value (' + that.currentZoomLevel + ')');
                }
            },
            function() {
                callback.fail('could not get current url');
            });
    });
};

module.exports = Zoom;