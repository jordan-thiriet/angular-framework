'use strict';
/**
 * Service to manage User
 */
app.service('User', function($rootScope, $localStore, $state, $http) {

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
     */
    this.setUser = function(user) {
        $rootScope.user.id = user.id;
        $rootScope.user.username = user.username;
        $rootScope.user.email = user.email;
        delete $rootScope.user.password;
        this.save();
    };

    /**
     * logout user
     */
    this.logout = function() {
        delete $rootScope.user;
        $localStore.remove('user');
        this.init();
        $state.go('login');
    }

});
