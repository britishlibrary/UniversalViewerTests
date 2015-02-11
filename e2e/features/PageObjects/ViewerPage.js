var ViewerPage = function () {
    var that = this;
    var ptor = browser;

    this.showdebug = true;
    this.showsteps = true;

    this.frameSwitchDelay = 1000;
    this.reactionDelay = 5000;
    this.pageLoadDelay = 5000;

    this.resetFrame = function(callback) {
        if(that.showdebug) { console.log('switching to viewer frame'); }
        ptor.switchTo().defaultContent().then(
            function() {
                that.sleep(that.frameSwitchDelay).then(
                    function() {
                        if (that.showdebug) { console.log('switching to frame[0]'); }
                        ptor.switchTo().frame(0).then(
                            function() {
                                if (that.showdebug) { console.log('switched'); }
                                if(typeof(callback) == "function") {
                                    callback();
                                }
                            });
                    });
            });
    };

    this.sleep = function(ms) {
        if(that.showdebug) { console.log('sleeping for ' + ms + 'ms'); }
        return ptor.sleep(ms);
    };

    this.find = function(css) {
        if(that.showdebug) { console.log('finding ' + css); }
        return element(protractor.By.css(css));
    };

    this.findAll = function(css) {
        if(that.showdebug) { console.log('finding all ' + css); }
        return element.all(protractor.By.css(css));
    };

    /* MORE INFORMATION PANEL */
    {
        this.moreInformationPanelExpandButton = function () {
            return this.find('.rightPanel .expandButton');
        };

        this.moreInformationHeaders = function () {
            return this.findAll('.rightPanel .main .items .item .header');
        };

        this.moreInformationTexts = function () {
            return this.findAll('.rightPanel .main .items .item .text');
        };

        this.moreInformationPanelCollapseButton = function () {
            return this.find('.rightPanel .collapseButton');
        };

        this.moreInformationPanelRightsNoticeTitle = function () {
            return this.find('.rightPanel .main .items .item.attribution .header');
        };

        this.moreInformationPanelRightsNoticeAttribution = function () {
            return this.find('.rightPanel .main .items .item.attribution .text');
        };

        this.moreInformationPanelRightsNoticeToggle = function () {
            return this.find('.rightPanel .main .items .item.attribution .text a.toggle');
        };

        this.moreInformationPanelRightsNoticeAttributionMoreButton = function () {
            return this.find('.rightPanel .main .items .item.attribution .text a.toggle.more');
        };

        this.moreInformationPanelRightsNoticeAttributionLessButton = function () {
            return this.find('.rightPanel .main .items .item.attribution .text a.toggle.less');
        };

        this.infoPanel = function () {
            return this.find('.rightPanel');
        };
    }
    /* END OF MORE INFORMATION PANEL */

    /* NAVIGATION AND SEADRAGON PANEL */
    {
        this.startCanvas = function () {
            return this.findAll('.openseadragon-canvas canvas');
        };

        this.searchText = function () {
            return this.find('.searchText');
        };

        this.searchImageLabel = function () {
            return this.find('.headerPanel .options .centerOptions .mode label[for=image]');
        };

        this.searchPageLabel = function() {
            return this.find('.headerPanel .options .centerOptions .mode label[for=page]')
        }

        this.goButton = function () {
            return this.find('.imageBtn.go');
        };

        this.navigationNextButton = function () {
            return this.find('.imageBtn.next');
        };

        this.navigationNextDisabledButton = function () {
            return this.find('.imageBtn.next.disabled');
        };

        this.navigationPrevButton = function () {
            return this.find('.imageBtn.prev');
        };

        this.navigationPrevDisabledButton = function () {
            return this.find('.imageBtn.prev.disabled');
        };

        this.selectedThumbnailLabels = function () {
            return this.findAll('.thumb.selected .label');
        };

        this.fullScreenButton = function () {
            return this.find('.imageBtn.fullScreen');
        };

        this.settingsButton = function () {
            return this.find('.imageBtn.settings');
        };

        this.optionTwoUpCheckbox = function () {
            return this.find('#pagingEnabled');
        };

        this.settingsCloseButton = function () {
            return this.find('.overlays .settings .top .close');
        };

        this.navigationFirstButton = function () {
            return this.find('.imageBtn.first');
        };

        this.navigationLastButton = function () {
            return this.find('.imageBtn.last');
        };

        this.canvasPrevButton = function () {
            return this.find('.paging.btn.prev');
        };

        this.canvasPrevDisabledButton = function () {
            return this.find('.paging.btn.prev.disabled');
        };

        this.canvasNextButton = function () {
            return this.find('.paging.btn.next');
        };

        this.canvasNextDisabledButton = function () {
            return this.find('.paging.btn.next.disabled');
        };
    }
    /* END OF NAVIGATION AND SEADRAGON PANEL */

    /* CONTENTS PANEL */
    {
        this.contentsPanel = function () {
            return this.find('.leftPanel');
        };

        this.contentsPanelIndexTab = function () {
            return this.find('.leftPanel .main .tabs a.first');
        };

        this.contentsPanelIndexTabActivated = function () {
            return this.find('.leftPanel .main .tabs a.first.on');
        };

        this.contentsPanelIndexTabItems = function () {
            return this.findAll('.treeView .tree li');
        };

        this.contentsPanelIndexTabItemAnchors = function () {
            return this.findAll('.treeView .tree li a');
        };

        this.contentsPanelIndexTabTreeExpansionToggles = function () {
            return this.findAll('.treeView .tree li div.toggle');
        };

        this.contentsPanelIndexTabTreeExpandedToggles = function () {
            return this.findAll('.treeView .tree li div.toggle.expanded');
        };

        this.contentsPanelIndexTabSubTrees = function () {
            return this.findAll('.treeView .tree li ul');
        };

        this.contentsPanelThumbnailIncreaseSizeButton = function () {
            return this.find('.leftPanel .galleryView .btn.size-up');
        };

        this.contentsPanelThumbnailDecreaseSizeButton = function () {
            return this.find('.leftPanel .galleryView .btn.size-down');
        };

        this.contentsPanelExpandThumbnailsButton = function () {
            return this.find('.leftPanel > .top > a.expandFullButton');
        };

        this.contentsPanelCollapseThumbnailsButton = function () {
            return this.find('.leftPanel > .top > div.collapseButton');
        };

        this.contentsPanelLoadedImages = function () {
            return this.findAll('.wrap.loaded > img');
        };

        this.contentsPanelNonExpandedSelectedLoadedThumbnail = function () {
            return this.find('.thumbsView .thumb.selected');
        };

        this.contentsPanelExpandedSelectedLoadedThumbnail = function () {
            return this.find('.galleryView .thumb.selected');
        };

        this.contentsPanelNonExpandedSelectedLoadedThumbnailLabels = function () {
            return this.findAll('.thumbsView .thumb.selected > .label');
        };

        this.contentsPanelExpandedSelectedLoadedThumbnailLabels = function () {
            return this.findAll('.galleryView .thumb.selected > .label');
        };

        this.contentsPanelNonExpandedSelectedLoadedThumbnailLabel = function () {
            return this.find('.thumbsView .thumb.selected > .label');
        };

        this.contentsPanelExpandedSelectedLoadedThumbnailLabel = function () {
            return this.find('.galleryView .thumb.selected > .label');
        };

        this.contentsPanelNonExpandedSelectedLoadedThumbnailWrap = function () {
            return this.find('.thumbsView .thumb.selected > .wrap.loaded');
        };

        this.contentsPanelExpandedSelectedLoadedThumbnailWrap = function () {
            return this.find('.galleryView .thumb.selected > .wrap.loaded');
        };

        this.contentsPanelNonExpandedSelectedLoadedThumbnails = function () {
            return this.findAll('.thumbsView .thumb.selected > .wrap.loaded');
        };

        this.contentsPanelExpandedSelectedLoadedThumbnails = function () {
            return this.findAll('.galleryView .thumb.selected > .wrap.loaded');
        };

        this.contentsPanelNonExpandedFrame = function () {
            return this.find('.thumbsView');
        };

        this.contentsPanelExpandedFrame = function () {
            return this.find('.galleryView');
        };

        this.contentsPanelNonExpandedThumbnails = function () {
            return this.findAll('.thumbsView .thumb');
        };

        this.contentsPanelExpandedThumbnails = function () {
            return this.findAll('.galleryView .thumb');
        };
    }
    /* END OF CONTENTS PANEL */

    /* CENTER PANEL */
    {
        this.centerPanelRightsNoticeTitle = function () {
            return this.find('.centerPanel .rights .header .title');
        };

        this.centerPanelRightsNoticeAttribution = function () {
            return this.find('.centerPanel .rights .main .attribution');
        };

        this.centerPanelRightsNoticeAttributionMoreToggle = function () {
            return this.find('.centerPanel .rights .main .attribution a.toggle');
        };

        this.centerPanelRightsNoticeAttributionMoreButton = function () {
            return this.find('.centerPanel .rights .main .attribution a.toggle.more');
        };

        this.centerPanelRightsNoticeAttributionLessButton = function () {
            return this.find('.centerPanel .rights .main .attribution a.toggle.less');
        };

        this.centerPanelRightsNoticeLicense = function () {
            return this.find('.centerPanel .rights .main .license');
        };

        this.centerPanelRightsNoticeLogo = function () {
            return this.find('.centerPanel .rights .main .logo');
        };
    }
    /* END OF CENTER PANEL */

    /* LANGUAGE SELECTION */
    {
        this.languageSelectionMenuButton = function() {
            return this.find('.headerPanel .languageOptions a.imageBtn.languages');
        };
    }
    /* END OF LANGUAGE SELECTION */

    /* WIDTH FINDERS */
    {
        /* sometimes, I disgust even myself */
        this.widthFinderGeneral = function(widthSettingCallback, elementPromise, callback) {
            this.resetFrame(
                function() {
                    elementPromise().then(
                        function(theElement) {
                            if(that.showdebug) { console.log('will get width'); }
                            theElement.getCssValue('width').then(
                                function(w) {
                                    if(that.showdebug) { console.log('got width: ' + w); }
                                    widthSettingCallback(w.replace('px', ''));
                                },
                                function() {
                                    callback.fail('could not get width of element');
                                });
                        },
                        function() {
                            callback.fail('could not find element');
                        });
                });
        };

        this.getThumbnailPanelWidth = function(widthSettingCallback, callback) {
            if(that.showdebug) { console.log('getting thumbnail panel width'); }
            that.widthFinderGeneral(widthSettingCallback, that.contentsPanel, callback);
        };

        this.getThumbnailWidthInExpandedView = function(widthSettingCallback, callback) {
            if(that.showdebug) { console.log('getting thumbnail width'); }
            that.widthFinderGeneral(widthSettingCallback, that.contentsPanelExpandedSelectedLoadedThumbnailWrap, callback);
        };

        this.getThumbnailWidthInNonExpandedView = function(widthSettingCallback, callback) {
            if(that.showdebug) { console.log('getting thumbnail width'); }
            that.widthFinderGeneral(widthSettingCallback, that.contentsPanelNonExpandedSelectedLoadedThumbnailWrap, callback);
        };
    }
    /* END OF WIDTH FINDERS */

    this.recursivelyExpandIndexItems = function(callback) {
        if(that.showdebug) { console.log('recursively expanding index items...'); }
        that.resetFrame(
            function() {
                that.contentsPanelIndexTabTreeExpansionToggles().then(
                    function(contentsPanelIndexTabTreeExpansionToggles) {
                        if(contentsPanelIndexTabTreeExpansionToggles.length > 0) {
                            for(var x = 0; x < contentsPanelIndexTabTreeExpansionToggles.length; x++) {
                                var toggle = contentsPanelIndexTabTreeExpansionToggles[x];
                                toggle.getAttribute('class').then(
                                    function(attributeClass) {
                                        if(attributeClass.indexOf('expanded') == -1) {
                                            if(that.showdebug) { console.log('clicking expand toggle'); }
                                            toggle.click().then(
                                                function() {
                                                    that.resetFrame(
                                                        function() {
                                                            that.contentsPanelIndexTabTreeExpansionToggles().then(
                                                                function(expansionToggles) {
                                                                    that.resetFrame(
                                                                        function() {
                                                                            that.contentsPanelIndexTabTreeExpandedToggles().then(
                                                                                function(expandedToggles) {
                                                                                    if(expandedToggles.length == expansionToggles.length) {
                                                                                        if(that.showdebug) { console.log('total toggles equals expanded toggles'); }
                                                                                        callback();
                                                                                    } else {
                                                                                        if(that.showdebug) { console.log('total toggles: ' + expansionToggles.length + ' expanded: ' + expandedToggles.length); }
                                                                                        if(that.showdebug) { console.log('recursing ... '); }
                                                                                        that.recursivelyExpandIndexItems(callback);
                                                                                    }
                                                                                });
                                                                        });
                                                                },
                                                                function() {
                                                                    callback.fail('could not find any expansion toggles');
                                                                });
                                                        });
                                                },
                                                function() {
                                                    callback.fail('clicking an expansion toggle failed');
                                                });
                                        }
                                    });
                            }
                        } else {
                            callback.fail('could not find any expansion toggles');
                        }
                    });
            });
    };

    this.toggleCenterPanelRightsDisplayAttributionLength = function(callback) {
        if(that.showdebug) { console.log('toggling center panel rights display more/less'); }
        that.resetFrame(
            function() {
                that.centerPanelRightsNoticeAttributionMoreToggle().then(
                    function(centerPanelRightsNoticeAttributionMoreToggle) {
                        centerPanelRightsNoticeAttributionMoreToggle.click().then(
                            callback,
                            function() {
                                callback.fail('could not click centerPanelRightsNoticeAttributionMoreToggle');
                            });
                    },
                    function() {
                        callback.fail('could not find centerPanelRightsNoticeAttributionMoreToggle');
                    });
            });
    };

    this.clickMoreInformation = function(callback) {
        if(that.showdebug) { console.log('clicking MORE INFORMATION'); }
        that.resetFrame(
            function() {
                that.moreInformationPanelExpandButton().then(
                    function(moreInformationPanelExpandButton) {
                        moreInformationPanelExpandButton.isDisplayed().then(
                            function(moreInformationPanelExpandButtonIsDisplayed) {
                                if(moreInformationPanelExpandButtonIsDisplayed) {
                                    if(that.showdebug) { console.log('more information expand button is visible'); }
                                    moreInformationPanelExpandButton.click().then(
                                        callback,
                                        function() {
                                            callback.fail('clicking more information button failed');
                                        });
                                } else {
                                    if(that.showdebug) { console.log('more information expand button is not visible'); }
                                    that.moreInformationPanelCollapseButton().then(
                                        function(moreInformationPanelCollapseButton) {
                                            moreInformationPanelCollapseButton.isDisplayed().then(
                                                function(moreInformationPanelCollapseButtonIsDisplayed) {
                                                    if(moreInformationPanelCollapseButtonIsDisplayed) {
                                                        if(that.showdebug) { console.log('more information collapse button is visible'); }
                                                        if(that.showdebug) { console.log('more information panel must be already open'); }
                                                        callback();
                                                    } else {
                                                        callback.fail('more information expand and collapse buttons not visible');
                                                    }
                                                },
                                                function() {
                                                    callback.fail('could not determine whether more information collapse button is visible');
                                                });
                                        },
                                        function() {
                                            callback.fail('could not find more information collapse button');
                                        });
                                }
                            },
                            function() {
                                callback.fail('could not determine whether more information expand button is visible');
                            });
                    },
                    function() {
                        callback.fail('could not find more information expand button');
                    });
            });
    };
};

module.exports = ViewerPage;