'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('foodFinder', function () {
    //Just like controller, when we call service on the module, this name and function are being stored with angular's injector. 
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getMenu = function(){
      return $.get('/menu/menu.json');
    };
    this.getItem = function(id){
       console.log(id);
       var menuItemFile = '/menu/'+id+'.json';
       return $.get(menuItemFile);
    };
  });
