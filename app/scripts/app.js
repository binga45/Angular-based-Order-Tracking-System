'use strict';

/**
 * @ngdoc overview
 * @name udaciMealsApp
 * @description
 * # udaciMealsApp
 *
 * Main module of the application.
 */
angular
  .module('udaciMealsApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/'); //TO load the home state by default.
    //To add a state to the stateProvider, we call .state method, 1st arg state name, and give it a configuration object as 2nd arg
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl as menu'
      })
      .state('item',{
        url: '/item/:id',
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl as item'
      });
    //App's state management is all setup after the above 2 steps. We need to tell the uiRouter where to insert the template. We can do
    //that by using the directive ui-view in the index.html
  }]

  );
