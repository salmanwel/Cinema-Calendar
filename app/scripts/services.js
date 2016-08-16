'use strict';

angular.module('cinemaCalendar')
        .factory('pinsFactory', ['$scope',
function($scope){

	

var pinfac = {};

 pinfac.getPins = function(){
                   return $scope.pins;
                               };
pinfac.getPin = function (index) {
                                        return $scope.pins[index];
                };
                return $scope.pins;

        }]);