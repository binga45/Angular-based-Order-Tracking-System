'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl',['foodFinder', 'orderManager',  function(menu, om) {
    var vm = this;// ViewModel
    // this.items ='';
    menu.getMenu().then(function(data){
      vm.items=data; // fixed the this keyword(since it's contextually based), used lexicalscope to fix it.
    });
    this.chooseItem = function(menuCategory, menuItemName){
          om.chooseMenuOption(menuCategory, menuItemName);
    };
    this.increment = function(item){
      //item.rating += 0.1;
      item.rating = ((item.rating*10)+1)/10;
    };
    this.decrement = function(item){
      //item.rating -= 0.1;
      item.rating = ((item.rating*10)-1)/10;
    };
  }]);
