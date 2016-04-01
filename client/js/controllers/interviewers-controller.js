app.controller('interviewersController', ['$scope', '$resource', function ($scope, $resource) {
  var Interviewer = $resource('/api/interviewers');

  Interviewer.query(function (results) {
    $scope.interviewers = results;
  });

  $scope.interviewers = []

  $scope.createInterviewer = function () {
    var interviewer = new Interviewer();
    interviewer.name = $scope.interviewerName;
    interviewer.school = $scope.interviewerSchool;
    interviewer.headline = $scope.interviewerHeadline;
    interviewer.$save(function (result) {
      $scope.interviewers.push(result);
      $scope.interviewerName = '';
      $scope.interviewerSchool = '';
      $scope.interviewerHeadline = '';
    });
  }
}]);