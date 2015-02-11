var ViewerPage = require("./PageObjects/ViewerPage.js");

var Thumbnails = function() {

    var ptor = browser;
    var vp = new ViewerPage();
    var showdebug = vp.showdebug;
    var showsteps = vp.showsteps;
    var reactionDelay = vp.reactionDelay;

    var thumbnailPanelWidth;
    var thumbnailWidth;

    this.When(/^they click in the Thumbnails tab$/, function (callback) {
        if(showsteps) { console.log("When they click in the Thumbnails tab"); }
        var that = this;
        vp.resetFrame(
            function() {
                vp.contentsPanelExpandThumbnailsButton().then(
                    function(contentsPanelExpandThumbnailsButton) {
                        contentsPanelExpandThumbnailsButton.click().then(
                            callback,
                            function () {
                                callback.fail('clicking on thumbnails expand button did not work')
                            });
                    }, function() {
                        callback.fail('expand thumbnails button not found');
                    });
            });
    });

    this.When(/^they click in the expand arrow in the Thumbnails tab$/, function (callback) {
        if(showsteps) { console.log('When they click in the expand arrow in the Thumbnails tab'); }
        var that = this;
        vp.contentsPanelExpandThumbnailsButton().then(
            function(contentsPanelExpandThumbnailsButton) {
                vp.getThumbnailPanelWidth(
                    function (width) {
                        that.thumbnailPanelWidth = width;
                        contentsPanelExpandThumbnailsButton.click().then(
                            callback,
                            function () {
                                callback.fail('clicking on thumbnails expand button did not work')
                            });
                    },
                    callback);
            }, function() {
                callback.fail('expand thumbnails button not found');
            });
    });

    this.Then(/^a list of thumbnails is rendered to the user$/, function (callback) {
        if(showsteps) { console.log("Then a list of thumbnails is rendered to the user"); }
        vp.resetFrame(
            function() {
                vp.contentsPanelLoadedImages().then(
                    function(thumbnailImages) {
                        if(thumbnailImages.length < 3) {
                            callback.fail('not enough thumbnails for test');
                        } else {
                            thumbnailImages[0].getAttribute('src').then(
                                function(src) {
                                    if(src.substring(src.length - 4, src.length) == '.jpg') {
                                        callback();
                                    } else {
                                        callback.fail("image is not a jpg");
                                    }
                                },
                                function() {
                                    callback.fail("img src not found");
                                });
                        }
                    });
            });
    });

    this.Then(/^the list of thumbnails is expanded$/, function (callback) {
        if(showsteps) { console.log('Then the list of thumbnails is expanded'); }
        var that = this;
        vp.sleep(that.reactionDelay).then(
            function() {
                vp.getThumbnailPanelWidth(
                    function (width) {
                        if (width > that.thumbnailPanelWidth) {
                            that.thumbnailPanelWidth = width;
                            callback();
                        } else {
                            callback.fail('thumbnails panel should be expanded');
                        }
                    },
                    callback);
            });
    });

    this.Given(/^the user is viewing the expanded thumbnails list$/, function (callback) {
        if(showsteps) { console.log('Given the user is viewing the expanded thumbnails list'); }
        vp.resetFrame(
            function() {
                vp.contentsPanelExpandThumbnailsButton().then(
                    function(expandThumbnailsButton) {
                        expandThumbnailsButton.isDisplayed().then(
                            function(expandThumbnailsButtonIsDisplayed) {
                                if(expandThumbnailsButtonIsDisplayed) {
                                    if(showdebug) { console.log('expand is displayed'); }
                                    if(showdebug) { console.log('clicking expand'); }
                                    expandThumbnailsButton.click().then(
                                        callback,
                                        function() {
                                            callback.fail('clicking expand thumbnails list failed');
                                        });
                                } else {
                                    if(showdebug) { console.log('expand is not displayed'); }
                                    // might already be in expanded view
                                    vp.resetFrame(
                                        function() {
                                            vp.contentsPanelCollapseThumbnailsButton().then(
                                                function(collapseThumbnailsButton) {
                                                    collapseThumbnailsButton.isDisplayed().then(
                                                        function(collapseThumbnailsButtonIsDisplayed) {
                                                            if(collapseThumbnailsButtonIsDisplayed) {
                                                                if(showdebug) { console.log('collapse is displayed'); }
                                                                callback();
                                                            } else {
                                                                if(showdebug) { console.log('collapse is not displayed'); }
                                                                callback.fail('neither expand nor collapse is displayed');
                                                            }
                                                        },
                                                        function() {
                                                            callback.fail('expand not displayed and collapse not found');
                                                        });
                                                });
                                        });
                                }
                            });
                    });
            });
    });

    this.When(/^they click in the contract arrow$/, function (callback) {
        if(showsteps) { console.log('When they click in the contract arrow'); }
        var that = this;
        vp.resetFrame(
            function() {
                vp.contentsPanelCollapseThumbnailsButton().then(
                    function(contentsPanelCollapseThumbnailsButton) {
                        vp.getThumbnailPanelWidth(
                            function (width) {
                                that.thumbnailPanelWidth = width;
                                contentsPanelCollapseThumbnailsButton.click().then(
                                    callback,
                                    function () {
                                        callback.fail('clicking on thumbnails collapse button did not work')
                                    });
                            },
                            callback);
                    }, function() {
                        callback.fail('collapse thumbnails button not found');
                    });
            });
    });

    this.Then(/^the list of thumbnails is contracted$/, function (callback) {
        if(showsteps) { console.log('Then the list of thumbnails is contracted'); }
        var that = this;
        vp.sleep(that.reactionDelay).then(
            function() {
                vp.getThumbnailPanelWidth(
                    function (width) {
                        if (width < that.thumbnailPanelWidth) {
                            that.thumbnailPanelWidth = width;
                            callback();
                        } else {
                            callback.fail('thumbnails panel should be collapsed');
                        }
                    },
                    callback);
            });
    });

    this.When(/^they click on a thumbnail$/, function (callback) {
        if (showsteps) { console.log('When they click on a thumbnail'); }
        var that = this;
        vp.resetFrame(
            function () {
                vp.contentsPanelExpandedThumbnails().then(
                    function (thumbnails) {
                        thumbnails[0].isDisplayed().then(
                            function (elementIsDisplayed) {
                                if (elementIsDisplayed) {
                                    if(that.showdebug) { console.log('first thumbnail is displayed'); }
                                    if(that.showdebug) { console.log('clicking first thumbnail'); }
                                    vp.getThumbnailPanelWidth(
                                        function (width) {
                                            that.thumbnailPanelWidth = width;
                                            thumbnails[0].click().then(
                                                callback,
                                                function() {
                                                    callback.fail('clicking first thumbnail failed');
                                                });
                                        },
                                        callback);
                                } else {
                                    callback.fail('first thumbnail is not visible');
                                }
                            });
                    },
                    function () {
                        callback.fail('thumbnails not found')
                    });
            });
    });

    this.When(/^they click the Increase thumbnails size button$/, function (callback) {
        if(showsteps) { console.log('When they click the Increase thumbnails size button'); }
        var that = this;
        vp.resetFrame(
            function() {
                vp.contentsPanelThumbnailIncreaseSizeButton().then(
                    function(thumbnailIncreaseSizeButton) {
                        vp.getThumbnailWidthInExpandedView(
                            function(width) {
                                that.thumbnailWidth = width;
                                thumbnailIncreaseSizeButton.click().then(
                                    callback,
                                    function() {
                                        callback.fail('clicking thumbnail increase size button failed');
                                    });
                            },
                            callback);
                    },
                    function() {
                        callback.fail('thumbnail increase size button not found');
                    });
            });
    });

    this.Then(/^the size of the Thumbnail is increased$/, function (callback) {
        if(showsteps) { console.log('Then the size of the Thumbnail is increased'); }
        var that = this;
        vp.sleep(that.reactionDelay).then(
            function() {
                vp.getThumbnailWidthInExpandedView(
                    function (width) {
                        if (width > that.thumbnailWidth) {
                            that.thumbnailWidth = width;
                            callback();
                        } else {
                            callback.fail('Size of Thumbnail should be bigger than before.');
                        }
                    },
                    callback);
            });
    });

    this.When(/^they click the Decrease thumbnails size button$/, function (callback) {
        if(showsteps) { console.log('When they click the Decrease thumbnails size button'); }
        var that = this;
        vp.resetFrame(
            function() {
                vp.contentsPanelThumbnailDecreaseSizeButton().then(
                    function(thumbnailDecreaseSizeButton) {
                        vp.getThumbnailWidthInExpandedView(
                            function(width) {
                                that.thumbnailWidth = width;
                                thumbnailDecreaseSizeButton.click().then(
                                    callback,
                                    function() {
                                        callback.fail('clicking thumbnail decrease size button failed');
                                    });
                            },
                            callback);
                    },
                    function() {
                        callback.fail('thumbnail decrease size button not found');
                    });
            });
    });

    this.Then(/^the size of the Thumbnail is decreased$/, function (callback) {
        if(showsteps) { console.log('Then the size of the Thumbnail is decreased'); }
        var that = this;
        vp.sleep(that.reactionDelay).then(
            function() {
                vp.getThumbnailWidthInExpandedView(
                    function (width) {
                        if (width < that.thumbnailWidth) {
                            that.thumbnailWidth = width;
                            callback();
                        } else {
                            callback.fail('Size of Thumbnail should be smaller than before.');
                        }
                    },
                    callback);
            });
    });

};

module.exports = Thumbnails;