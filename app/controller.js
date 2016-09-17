/**
 * Main application controller
 * Author : @Neerajpro : 23rd March 2016
 */
;(function() {
  'use strict';

  angular.module('mainApp').controller('MainController', MainController);

  MainController.$inject = ['$scope','LocalStorage', 'QueryService','getDataFromAPI'];


  function MainController($scope,LocalStorage, QueryService,getDataFromAPI) {

      var self = this;

      fetchSearchDataByFactoryMethod();
      /**
       * this is factory method to call the api
       * */
      function fetchSearchDataByFactoryMethod(){
          getDataFromAPI.loadData().then(
              function(response){
                  console.log("response in controller");
                  $scope.searchData = response.data.websites;
                  $scope.totalDataCount = response.data.websites.length;
              }
          );
      }

  }


})();