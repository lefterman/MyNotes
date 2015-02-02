'use strict';

/**
 * @ngdoc overview
 * @name ngUiNotesAppSingleApp
 * @description
 * # ngUiNotesAppSingleApp
 *
 * Main module of the application.
 */
angular
  .module('ngUiNotesAppSingleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'services',
    'directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'NoteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
