
//creating module and controller
var app = angular.module("angModule", []).controller("imgController", function ($scope, $http, $log) {

    var res;
    //http get request to get image form api
    $http({
        url: "https://5ad8d1c9dc1baa0014c60c51.mockapi.io/api/br/v1/magic/1", method: 'GET', async: false, catch: false
    }).then(function successCallback(response) {
        res = response.data;
        $log.info(response.data);
        $scope.image = res.imageUrl;
    })
});