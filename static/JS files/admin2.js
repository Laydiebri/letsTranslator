"use strict";

var mainApp = angular.module("mainApp", []);
         
// Create the controller
mainApp.controller("keywordtranslationController", function($scope, $http) {
    $http.get("/keywordtranslations").then(function(response) {
        $scope.keywordtranslations = response.data;
      });   
     


      $http.get("/lessontopics").then(function(response) {
        $scope.lessontopics = response.data;
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
  