/**
*  MadLibs Module
*
* Description
*/
var initializeScope = function initializeScope($scope){
  $scope.female_name = 'Female Name';
  $scope.job_title = 'Job Title';
  $scope.tedious_task = 'Tedious Task';
  $scope.dirty_task = 'Dirty Task';
  $scope.celebrity = 'Celebrity';
  $scope.useless_skill = 'Useless Skill';
  $scope.obnoxious_celebrity = 'Obnoxious Celebrity';
  $scope.huge_number = 'Huge Number';
  $scope.adjective = 'Adjective';
}

angular.module('madlibs', [])
  .controller('controller',function($scope){
    initializeScope($scope);
  });