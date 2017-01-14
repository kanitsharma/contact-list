var myapp = angular.module('myapp', []);
myapp.controller('app_controller',['$scope','$http',function($scope,$http){
  var refresh = function(){
  $http.get('/contactlist',['response']).then(function(response){
    console.log("data recieved");
    $scope.contacts = response.data;
    $scope.contact = {};
  });
};
refresh();
$scope.addcontact = function(){
  console.log($scope.contact);
  $http.post('/contactlist',$scope.contact).then(function(response){
    console.log(response.data);
    refresh();
  });
}


}]);
