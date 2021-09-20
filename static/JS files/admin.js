"use strict";

var mainApp = angular.module("mainApp", []);
         
// Create the controller
mainApp.controller("ealstudentController", function($scope, $http) {
 
  document.getElementById("selected").style.display="none";
    // Initially hides the "selected" element
    

    $http.get("/ealstudents").then(function(response) {
        $scope.ealstudents = response.data;
      });   

     
      $scope.selectEALStudent = function(Student_ID) {
        // Get specific programme by code
        $http.get("/ealstudents/" + Student_ID).then(function(response) {
          $scope.selectedEALStudent = response.data;
          document.getElementById("selected").style.display="block";
          // Show the "selected" element
         
        });
    };
  
  $scope.deleteEALStudent = function(Student_ID) {
    // Send delete message to /module/code
    $http.delete("/ealstudents/" + Student_ID).then(function(response) {
      // When request completes, refresh list of modules
      $http.get("/ealstudents/").then(function(response) {
        $scope.ealstudents = response.data;
      });
    });
  };


  $scope.new_ealstudent = new EALStudent("", "");

  // Sends a put message to the server
  $scope.createEALStudent = function() {
    // Send post message to /modules
    $http.post("/ealstudents", $scope.new_ealstudent).then(function(response) {
      // When request completes, reset new_module
      $scope.new_ealstudent = new EALStudent("", "");
      // Then refresh list of modules
      $http.get("/ealstudents").then(function(response) {
        $scope.ealstudent = response.data;
      });
    });
  };

});



mainApp.controller("y7ealstudentController", function($scope, $http) {
 
  document.getElementById("selected").style.display="none";
    // Initially hides the "selected" element
    

    $http.get("/y7ealstudents").then(function(response) {
        $scope.y7ealstudents = response.data;
      });   

     
      $scope.selectY7EALStudent = function(Student_ID) {
        // Get specific programme by code
        $http.get("/y7ealstudents/" + Student_ID).then(function(response) {
          $scope.selectedY7EALStudent = response.data;
          document.getElementById("selected").style.display="block";
          // Show the "selected" element
         
        });
    };
  
});

mainApp.controller("y8ealstudentController", function($scope, $http) {
 
  document.getElementById("selected").style.display="none";
    // Initially hides the "selected" element
    

    $http.get("/y8ealstudents").then(function(response) {
        $scope.y8ealstudents = response.data;
      });   

     
      $scope.selectY8EALStudent = function(Student_ID) {
        // Get specific programme by code
        $http.get("/y8ealstudents/" + Student_ID).then(function(response) {
          $scope.selectedY8EALStudent = response.data;
          document.getElementById("selected").style.display="block";
          // Show the "selected" element
         
        });
    };
  
});
  
  
   
  
  
   