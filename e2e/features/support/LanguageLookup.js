var LanguageLookup = function() {
    var languages = {};
    languages['English'] = 'en_GB';
    languages['Welsh'] = 'cy_GB';
    languages['TestLanguage'] = 'xx_XX';

    var that = this;
    this.languages = languages;

    this.getLanguageCode = function(languageName) {
        if(languageName in that.languages) {
            return that.languages[languageName];
        }
        return "none";
    };
};

module.exports = LanguageLookup;