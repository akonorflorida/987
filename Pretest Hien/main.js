
var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/List", {
            templateUrl: "list.html"
        })
        .when("/Search", {
            templateUrl: "search.html"
        })
        .when("/Sort", {
            templateUrl: "sort.html"
        })
        .when("/Add", {
            templateUrl: "add.html"
        });
});

// start list from list.html
app.run(function ($rootScope, $http) {            // Câu lệnh để chạy hàm ng-view
    $http.get("list.json").then(function (rsp) {  // Kết nối đến file chứa danh sách
        $rootScope.list = rsp.data.List;    // Thuộc tinh dó tìm danh sách
        $scope.name = List.name;            // Gán biến name để tìm kiếm bằng biến name
    })
})
app.controller("listCtrl", function ($scope) {    // Ctroller điều khiển hiển thị dữ liệu danh sách

})
// end list from list.html

// start add list 
app.controller("addCtrl", function ($scope) {
    $scope.addList = function () {
        var newList = { "id": $scope.myID, "name": $scope.myName, "price": $scope.myPrice };
        $scope.list.push(newList);
        alert("Add new list successfully")
    }
})
// end add list

// start delete list
app.controller("deleteCtrl", function ($scope) {
        $scope.removeList = function (x) {
            $scope.list.splice(x, 1);
        }
})
// end delete list


