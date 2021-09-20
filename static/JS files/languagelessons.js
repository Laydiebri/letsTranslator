
      var mainApp = angular.module("mainApp", []);
      
      
      mainApp.controller("esintrotogamesController", function($scope, $http) {
        $http.get("/esintrotogames").then(function(response) {
        $scope.esintrotogames = response.data;
   }); });   

   mainApp.controller("esvariablesandobjectsController", function($scope, $http) {
        $http.get("/esvariablesandobjects").then(function(response) {
        $scope.esvariablesandobjects = response.data;
   }); }); 

   mainApp.controller("esoperatorsController", function($scope, $http) {
        $http.get("/esoperators").then(function(response) {
        $scope.esoperators = response.data;
   }); });
   
   mainApp.controller("esiterationandselectionController", function($scope, $http) {
        $http.get("/esiterationandselections").then(function(response) {
        $scope.esiterationandselections = response.data;
   }); });
   

   mainApp.controller("itintrotogamesController", function($scope, $http) {
     $http.get("/itintrotogames").then(function(response) {
     $scope.itintrotogames = response.data;
}); });   

mainApp.controller("itvariablesandobjectsController", function($scope, $http) {
     $http.get("/itvariablesandobjects").then(function(response) {
     $scope.itvariablesandobjects = response.data;
}); }); 

mainApp.controller("itoperatorsController", function($scope, $http) {
     $http.get("/itoperators").then(function(response) {
     $scope.itoperators = response.data;
}); });

mainApp.controller("ititerationandselectionController", function($scope, $http) {
     $http.get("/ititerationandselections").then(function(response) {
     $scope.ititerationandselections = response.data;
}); });
    
    var mainApp = angular.module("mainApp", []);
   
   mainApp.controller("itcryptographyController", function($scope, $http) {
   $http.get("/itcryptographys").then(function(response) {
     $scope.itcryptographys = response.data;
   });  
   });

       

 