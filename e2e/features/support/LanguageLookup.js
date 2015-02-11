var LanguageLookup = function() {
    var Languages = {};
    languages['Welsh'] = 'cy-GB';
    languages['TestLanguage'] = 'xx-XX';

    this.getLanguageCode = function(languageName) {
        return this.languages[languageName];
    };
};

module.exports = LanguageLookup;