'use strict';

fitnessModule
    .controller('FitnessController',['$scope', '$rest', function ($scope, $rest) {

        $scope.weight = [];
        $scope.fat = [];
        $scope.fluids = [];
        $scope.muscule = [];

        $rest.getAll('fitness').then(function(data) {
            angular.forEach(data.data, function(value) {
                var date = new Date(value.date).getTime();
                $scope.weight.push([date, value.weight]);
                $scope.fat.push([date, value.fat]);
                $scope.fluids.push([date, value.fluids]);
                $scope.muscule.push([date, value.muscule]);
            });
        });



    }])
    .controller('FitnessAddController',['$scope', '$rest', '$alert', '$filter', '$tools', function ($scope, $rest, $alert, $filter, $tools) {

        $scope.fitness = {};

        var date = new Date;
        $scope.date = date.getFullYear()+'-'+(parseInt(date.getMonth())+1)+'-'+date.getDate()+' 08:00:00';

        $scope.save = function() {

            if(typeof $scope.fitness.weight !== 'number' || typeof $scope.fitness.fat !== 'number' ||
                typeof $scope.fitness.fluids !== 'number' || typeof $scope.fitness.muscule !== 'number'
            ) {
                $alert.error($filter('translate')('FITNESS.MEASURE_NOT_NUMBER'));
                return false;
            }

            $scope.fitness.date = $scope.date;

            if($scope.fitness.date !== undefined) {
                $scope.fitness.date = $tools.getTimestamp($scope.fitness.date);
            }

            if(!$scope.fitness.date) {
                $scope.fitness.date = null;
            }

            $rest.post('fitness', $scope.fitness).then(function() {
                $alert.success($filter('translate')('FITNESS.MEASURE_CREATED'));
                return true;
            });
        }
    }]);
