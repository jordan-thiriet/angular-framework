'use strict';

fitnessModule
    .controller('FitnessController',['$scope', '$rest', 'CONFIG_FITNESS', '$filter', '$rootScope', function ($scope, $rest, CONFIG_FITNESS, $filter, $rootScope) {

        $rootScope.$on('changeLanguage', function(event, code) { refresh() });

        function refresh() {
            $scope.weight = [];
            $scope.fat = [];
            $scope.fluids = [];
            $scope.muscule = [];

            $rest.getAll('fitness').then(function (data) {

                angular.forEach(data.data, function (value) {
                    var date = new Date(value.date).getTime();
                    $scope.weight.push([date, value.weight]);
                    $scope.fat.push([date, value.fat]);
                    $scope.fluids.push([date, value.fluids]);
                    $scope.muscule.push([date, value.muscule]);
                });

                $scope.chartConfig = CONFIG_FITNESS.darkTheme;
                $scope.chartConfig.series = [
                    {
                        name: $filter('translate')('FITNESS.WEIGHT'),
                        data: $scope.weight
                    },
                    {
                        name: $filter('translate')('FITNESS.FAT_MASS'),
                        data: $scope.fat
                    },
                    {
                        name: $filter('translate')('FITNESS.FLUIDS_MASS'),
                        data: $scope.fluids
                    },
                    {
                        name: $filter('translate')('FITNESS.MUSCULE_MASS'),
                        data: $scope.muscule
                    }
                ];

                $scope.chartWeight = angular.copy(CONFIG_FITNESS.whiteTheme);
                $scope.chartWeight.series = [
                    {
                        name: $filter('translate')('FITNESS.WEIGHT'),
                        data: $scope.weight
                    }
                ];

                $scope.chartFat = angular.copy(CONFIG_FITNESS.whiteTheme);
                $scope.chartFat.series = [
                    {
                        name: $filter('translate')('FITNESS.FAT_MASS'),
                        data: $scope.fat
                    }
                ];

                $scope.chartFluids = angular.copy(CONFIG_FITNESS.whiteTheme);
                $scope.chartFluids.series = [
                    {
                        name: $filter('translate')('FITNESS.FLUIDS_MASS'),
                        data: $scope.fluids
                    }
                ];
                $scope.chartMuscule = angular.copy(CONFIG_FITNESS.whiteTheme);
                $scope.chartMuscule.series = [
                    {
                        name: $filter('translate')('FITNESS.MUSCULE_MASS'),
                        data: $scope.muscule
                    }
                ];
            });
        }

        refresh();
    }])
    .controller('FitnessAddController',['$scope', '$rest', '$alert', '$filter', '$tools', '$settings', '$http', function ($scope, $rest, $alert, $filter, $tools, $settings, $http) {

        $scope.fitness = {};

        //$scope.settings = $settings.get();

        var date = new Date;
        $scope.fitness.date = date.getFullYear()+'-'+(parseInt(date.getMonth())+1)+'-'+date.getDate()+' 08:00:00';

        $http({method: 'GET', url: './app/modules/FitnessModule/form.json'}).success(function(data) {
            $scope.form = data;
        });

        $scope.save = function() {

            if(typeof $scope.fitness.weight !== 'number' || typeof $scope.fitness.fat !== 'number' ||
                typeof $scope.fitness.fluids !== 'number' || typeof $scope.fitness.muscule !== 'number'
            ) {
                $alert.error($filter('translate')('FITNESS.MEASURE_NOT_NUMBER'));
                return false;
            }

            if($scope.fitness.date !== undefined) {
                $scope.fitness.date = $tools.getTimestamp($scope.fitness.date);
            }

            if(!$scope.fitness.date) {
                $scope.fitness.date = null;
            }

            $rest.post('fitness', $scope.fitness).then(function() {
                $scope.fitness = {};
                $alert.success($filter('translate')('FITNESS.MEASURE_CREATED'));
                return true;
            });
        }
    }]);
