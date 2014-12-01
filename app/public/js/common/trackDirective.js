/**
 * Created by Johannes on 12/1/2014.
 */
app.directive('track', function ($rootScope, $window, playerService) {
    return {
        restrict: 'AE',
        scope: { data: '=' },
        controller: function($scope) {},
        templateUrl: "views/templateTest.html"
    }
});