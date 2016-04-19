'use strict';
/**
 * Service to manage User
 */
app.service('User',['$rootScope', '$localStore', '$state', '$http', 'md5', '$tools', function($rootScope, $localStore, $state, $http, md5, $tools) {
    /**
     * Init User
     */
    this.init = function() {
        var that = this;
        $rootScope.user = $localStore.get('user') !== null ? $localStore.get('user') : {};
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $rootScope.user.token;
        if($rootScope.user.username != undefined) {
            $rootScope.logout = function() {
                that.logout();
            }
        }
    };

    /**
     * Set token to user
     * @param token
     * @param refreshToken
     */
    this.setToken = function(token, refreshToken) {
        $rootScope.user.token = token;
        $rootScope.user.refreshToken = refreshToken;
        $rootScope.user.isLogged = true;
        this.save();
        $state.go('home');
    };

    /**
     * Save user in browser cache
     */
    this.save = function() {
        $localStore.put('user', $rootScope.user);
    };

    /**
     * Set user
     * @param user
     * @param password
     */
    this.setUser = function(user, password) {
        $rootScope.user.id = user.id;
        $rootScope.user.username = user.username;
        $rootScope.user.firstname = user.firstname;
        $rootScope.user.lastname = user.lastname;
        $rootScope.user.email = user.email;
        $rootScope.user.password = this.encodePassword(password);
        this.updatePicture();
        this.save();
    };

    /**
     * update user
     * @param user
     */
    this.updateUser = function(user) {
        $rootScope.user.username = user.username;
        $rootScope.user.firstname = user.firstname;
        $rootScope.user.lastname = user.lastname;
        $rootScope.user.email = user.email;
        this.updatePicture();
        this.save();
    };

    /**
     * update password
     * @param password
     */
    this.updatePassword = function(password) {
        $rootScope.user.password = this.encodePassword(password);
        this.save();
    };

    /**
     * Test if same password
     * @param password
     */
    this.isSamePassword = function(password) {
        if(!password) return false;
        return $rootScope.user.password === this.encodePassword(password);
    };

    /**
     * encode password
     * @param password
     */
    this.encodePassword = function(password) {
        return md5.createHash(password)
    };

    /**
     * Update picture
     */
    this.updatePicture = function() {
        var that = this;
        var baseUrl = $rootScope.urlPublic+'/images/avatar/';
        $tools.isImageExists(baseUrl+$rootScope.user.id+'.png').then(function(exist) {
            if(exist) {
                $rootScope.user.picture = baseUrl+$rootScope.user.id+'.png?'+ new Date().getTime();
            } else {
                $rootScope.user.picture = baseUrl+'avatar.png?'+ new Date().getTime();
            }
            that.save();
        });
    };

    /**
     * logout user
     */
    this.logout = function() {
        delete $rootScope.user;
        $localStore.remove('user');
        $localStore.put('last-page', $state.$current.name);
        this.init();
        $state.go('login');
    }

}]);
