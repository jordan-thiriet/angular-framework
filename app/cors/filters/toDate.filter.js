'use strict';

/**
 * This is an angularjs filter for date.
 */
app.filter('toDate',[ function () {
    return function (date) {
        var newDate = date.split(/[\s-:/]+/);
        if(newDate[0].length !== 4) {
            var tmp = angular.copy(newDate);
            tmp[0] = newDate[2];
            tmp[2] = newDate[0];
            newDate = tmp;
        }
        if(newDate.length === 3) {
            newDate[3] = newDate[4] = newDate[5] = '00';
        }
        return new Date(newDate[0], newDate[1]-1, newDate[2], newDate[3], newDate[4], newDate[5]);
    }
}]);