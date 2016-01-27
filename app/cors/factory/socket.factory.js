app.factory('socket',['$rootScope', 'CONFIG_SOCKET', 'socketFactory', function ($rootScope, CONFIG_SOCKET, socketFactory) {
    var myIoSocket = io.connect(CONFIG_SOCKET.server);

    mySocket = socketFactory({
        ioSocket: myIoSocket
    });

    return mySocket;
}]);