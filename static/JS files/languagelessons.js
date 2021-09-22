
      var mainApp = angular.module("mainApp", []);
     
      mainApp.controller("itcryptographyController", function($scope, $http) {
        $http.get("/itcryptographys").then(function(response) {
          $scope.itcryptographys = response.data;
        });  
        });
     
      
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


    
    
   
   mainApp.controller("itcryptographyController", function($scope, $http) {
   $http.get("/itcryptographys").then(function(response) {
     $scope.itcryptographys = response.data;
   });  
   });


   var mainApp = angular.module("mainApp", []);
   mainApp.controller("escryptographyController", function($scope, $http) {
 $http.get("/escryptographys").then(function(response) {
    $scope.escryptographys = response.data;

   });  

 }); 

  mainApp.controller("esdatabaseController", function($scope, $http) {

 $http.get("/esdatabases").then(function(response) {

     $scope.esdatabases = response.data;

   });  

 }); 



  mainApp.controller("itdatabaseController", function($scope, $http) {

 $http.get("/itdatabases").then(function(response) {

     $scope.itdatabases = response.data;

   });  

 }); 







 mainApp.controller("esintrotopythonController", function($scope, $http) {

 $http.get("/esintrotopythons").then(function(response) {

     $scope.esintrotopythons = response.data;

   });  

 }); 

 mainApp.controller("itintrotopythonController", function($scope, $http) {

 $http.get("/itintrotopythons").then(function(response) {

     $scope.itintrotopythons = response.data;

   });  

 }); 

 

 mainApp.controller("esifelseconditionController", function($scope, $http) {

 $http.get("/esifelseconditions").then(function(response) {

     $scope.esifelseconditions = response.data;

   });   

 }); 







 mainApp.controller("itesafteyposterController", function($scope, $http) {

 $http.get("/itesafteyposters").then(function(response) {

     $scope.itesafteyposters = response.data;

   });   

 }); 

 mainApp.controller("esesafteyposterController", function($scope, $http) {

 $http.get("/esesafteyposters").then(function(response) {

     $scope.esesafteyposters = response.data;

   });   

 });    

 