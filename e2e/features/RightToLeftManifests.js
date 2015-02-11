/**
 * Created by Adam on 26/01/2015.
 */

var ViewerPage = require("./PageObjects/ViewerPage.js");

var RightToLeftManifests = function() {

    var ptor = browser;
    var vp = new ViewerPage();
    var showdebug = vp.showdebug;
    var showsteps = vp.showsteps;

    this.Then(/^the first thumbnail of a right to left manifest is selected$/, function (callback) {
        if (showsteps) { console.log('Then the first thumbnail of a right to left manifest is selected'); }
        vp.resetFrame(
            function() {
                vp.contentsPanelNonExpandedSelectedLoadedThumbnailLabel().then(
                    function(label) {
                        label.getText().then(
                            function(text) {
                                text = text.replace(/ /g, '');
                                if(text == '1r') {
                                    callback();
                                } else {
                                    callback.fail('selected thumbnail is not first recto page');
                                }
                            },
                            function()
                            {
                                callback.fail('could not get text of selected thumbnail label');
                            });
                    },
                    function() {
                        callback.fail('could not get selected loaded thumbnail label')
                    });
            });
    });

    this.Then(/^the first thumbnail of a right to left manifest is arranged correctly$/, function(callback) {
        if(showsteps) { console.log('And the first thumbnail of a right to left manifest is arranged correctly'); }
        vp.resetFrame(
            function() {
                vp.contentsPanelNonExpandedFrame().then(
                    function(contentsPanelNonExpandedFrame) {
                        contentsPanelNonExpandedFrame.getLocation().then(
                            function(contentsPanelNonExpandedFrameLocation) {
                                if(showdebug) { console.log('thumbsViewX = ' + contentsPanelNonExpandedFrameLocation.x); }
                                vp.resetFrame(
                                    function() {
                                        vp.getThumbnailWidthInNonExpandedView(
                                            function(thumbWidth) {
                                                if(showdebug) { console.log('thumb width = ' + thumbWidth); }
                                                vp.resetFrame(
                                                    function() {
                                                        vp.contentsPanelNonExpandedSelectedLoadedThumbnail().then(
                                                            function(contentsPanelNonExpandedSelectedLoadedThumbnail) {
                                                                contentsPanelNonExpandedSelectedLoadedThumbnail.getLocation().then(
                                                                    function(contentsPanelNonExpandedSelectedLoadedThumbnailLocation) {
                                                                        if(showdebug) { console.log('selected thumb x = ' + contentsPanelNonExpandedSelectedLoadedThumbnailLocation.x); }
                                                                        var originPlusWidth = contentsPanelNonExpandedFrameLocation.x + parseInt(thumbWidth);
                                                                        if(showdebug) { console.log('origin + width = ' + originPlusWidth); }
                                                                        if(contentsPanelNonExpandedSelectedLoadedThumbnailLocation.x < originPlusWidth) {
                                                                            callback();
                                                                        } else {
                                                                            callback.fail('first selected thumbnail was in wrong position');
                                                                        }
                                                                    },
                                                                    function() {
                                                                        callback.fail('could not get non-expanded selected loaded thumbnail location');
                                                                    });
                                                            },
                                                            function() {
                                                                callback.fail('could not get non-expanded selected loaded thumbnail');
                                                            });
                                                    });
                                            },
                                            callback);
                                    });
                            },
                            function() {
                                callback.fail('could not get non-expanded thumbnail view location');
                            });
                    },
                    function() {
                        callback.fail('could not find non-expanded thumbnail view');
                    });
            });
    });

    this.Then(/^the second and third thumbnails of a right to left manifest are selected$/, function(callback) {
        if(showsteps) { console.log('Then the second and third thumbnails of a right to left manifest are selected'); }
        vp.resetFrame(
            function () {
                vp.contentsPanelNonExpandedSelectedLoadedThumbnailLabels().then(
                    function (contentsPanelNonExpandedSelectedLoadedThumbnailLabels) {
                        vp.sleep(vp.reactionDelay).then(
                            function() {
                                if (contentsPanelNonExpandedSelectedLoadedThumbnailLabels.length == 2) {
                                    contentsPanelNonExpandedSelectedLoadedThumbnailLabels[0].getText().then(
                                        function(text1) {
                                            text1 = text1.replace(/ /g,'');
                                            if(showdebug) { console.log('found label (' + text1 + ')'); }
                                            if(text1 == '1v' || text1 == '2r') {
                                                contentsPanelNonExpandedSelectedLoadedThumbnailLabels[1].getText().then(
                                                    function(text2) {
                                                        text2 = text2.replace(/ /g,'');
                                                        if(showdebug) { console.log('found label (' + text2 + ')'); }
                                                        if(text2 == '1v' || text2 == '2r') {
                                                            callback();
                                                        } else {
                                                            callback.fail('incorrect page selected (' + text2 + ')');
                                                        }
                                                    },
                                                    function() {
                                                        callback.fail('could not get text of contentsPanelNonExpandedSelectedLoadedThumbnailLabels[1]');
                                                    }
                                                );
                                            } else {
                                                callback.fail('incorrect page selected (' + text1 + ')');
                                            }
                                        },
                                        function() {
                                            callback.fail('could not get text of contentsPanelNonExpandedSelectedLoadedThumbnailLabels[0]');
                                        });
                                } else {
                                    callback.fail('2 thumbnails should be selected');
                                }
                            });
                    },
                    function () {
                        callback.fail('could not find contents panel selected loaded thumbnails')
                    });
            });
    });

    this.Then(/^the second and third thumbnails of a right to left manifest are arranged correctly$/, function(callback) {
        if(showsteps) { console.log('Then the second and third thumbnails of a right to left manifest are arranged correctly'); }
        vp.resetFrame(
            function() {
                new ViewerPage().contentsPanelNonExpandedSelectedLoadedThumbnailLabels().then(
                    function(contentsPanelNonExpandedSelectedLoadedThumbnailLabels) {
                        if(contentsPanelNonExpandedSelectedLoadedThumbnailLabels.length == 2) {
                            contentsPanelNonExpandedSelectedLoadedThumbnailLabels[0].getText().then(
                                function(text1) {
                                    text1 = text1.replace(/ /g, '');
                                    contentsPanelNonExpandedSelectedLoadedThumbnailLabels[1].getText().then(
                                        function(text2) {
                                            text2 = text2.replace(/ /g, '');
                                            contentsPanelNonExpandedSelectedLoadedThumbnailLabels[0].getLocation().then(
                                                function(location1) {
                                                    contentsPanelNonExpandedSelectedLoadedThumbnailLabels[1].getLocation().then(
                                                        function(location2) {
                                                            var page2r, page1v;
                                                            if(text1 == '2r') {
                                                                page2r = location1.x;
                                                                page1v = location2.x;
                                                            } else {
                                                                page2r = location2.x;
                                                                page1v = location1.x;
                                                            }
                                                            if(page2r < page1v) {
                                                                callback();
                                                            } else {
                                                                callback.fail('page 2r is not on the left of page 1v');
                                                            }
                                                        },
                                                        function() {
                                                            callback.fail('could not get location of contentsPanelNonExpandedSelectedLoadedThumbnailLabels[1]');
                                                        });
                                                },
                                                function() {
                                                    callback.fail('could not get location of contentsPanelNonExpandedSelectedLoadedThumbnailLabels[0]');
                                                });
                                        },
                                        function() {
                                            callback.fail('could not get text from contentsPanelNonExpandedSelectedLoadedThumbnailLabels[1]');
                                        });
                                },
                                function() {
                                    callback.fail('could not get text from contentsPanelNonExpandedSelectedLoadedThumbnailLabels[0]');
                                });
                        } else {
                            callback.fail('not enough thumbnails selected (should be 2, got ' + contentsPanelNonExpandedSelectedLoadedThumbnailLabels.length + ')');
                        }
                    });
            });
    });

};

module.exports = RightToLeftManifests;