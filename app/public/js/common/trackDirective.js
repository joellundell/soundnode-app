/**
 * Created by Johannes on 12/1/2014.
 */
app.directive('track', function () {
    return {
        restrict: 'AE',
        scope: { data: '=' },
        templateUrl: "views/templateTest.html"
    }
});