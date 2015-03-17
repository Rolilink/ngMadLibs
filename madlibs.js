/**
*  MadLibs Module
*
* Description
*/
var initializeScope = function initializeScope($scope){
  $scope.page = 'form';
}

angular.module('madlibs', [])
  .controller('controller',function($scope){
    initializeScope($scope);

    $scope.goToForm = function(){
      initializeScope($scope);
    };

    $scope.goToResult = function(){
      $scope.page = 'result';
    };
  });