var app = angular.module('cinemaCalendar', []);





app.directive('ccPins',function() {
return {
    restrict: 'E',
    templateUrl: 'cc-pins.htm'
  };
});


app.directive('ccNews',function() {
return {
    restrict: 'E',
    templateUrl: 'cc-news.htm'
  };
});


