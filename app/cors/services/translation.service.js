'use strict';

/**
 * Service to manage translation
 */
app.service('translationService', function($filter, $translate, CONFIG, $localStore) {

    this.currentLanguage = null;

    this.languages = [];

    this.show = false;

    /**
     * Init language
     */
    this.init = function() {
        this.languages = CONFIG.languages;
        this.show = CONFIG.show_languages;
        $localStore.get('language_code') !== null ? this.changeLanguage($localStore.get('language_code')) : this.changeLanguage(CONFIG.default_language);
    };

    /**
     * Get languages
     * @returns {Array|*}
     */
    this.getLanguages = function() {
        return this.languages;
    };

    /**
     * Get current language
     * @returns {null|*}
     */
    this.getCurrentLanguage = function() {
        return this.currentLanguage;
    };

    /**
     * Is show Languages
     * @returns {*}
     */
    this.isShow = function() {
        return this.show;
    };

    /**
     * Change Language
     * @param code
     */
    this.changeLanguage = function(code) {
        this.currentLanguage = $filter('filter')(this.languages, {code: code})[0];
        $translate.use(this.currentLanguage.code);
        $localStore.put('language_code',this.currentLanguage.code);
        return this.currentLanguage;
    };

});