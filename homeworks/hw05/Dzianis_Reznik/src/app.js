import angular from 'angular';

import './styles/styles.scss';
import students from './lib/students.json';

angular.module('students', [])
  .controller('StudentsController', function($scope) {
    $scope.students = students;
  });
