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
      fetchSearchDataGenericQueryServiceMethod();
      //fetchSearchDataByFactoryMethod();

      //LocalStorage.set('username','neeraj');

      /**
      @method 1 : generic Query Service  Call
       */
      function fetchSearchDataGenericQueryServiceMethod(){

          var fetchSearchUrl = 'search/';

          QueryService.query('GET', fetchSearchUrl, { tags : 'mobiles', facet :'1', page : '1'}, {}).then(
              function(response) {
                  self.searchData  = response.data;
                  $scope.searchData = self.searchData;
                  console.log(self.searchData );
              }
          );
      }
      /**
       * this is second factory method to call the api
       * */
      function fetchSearchDataByFactoryMethod(){
          getDataFromAPI.loadData().then(
              function(response){
                  console.log("response in controller");
                  $scope.searchData = response.data;
              }
          );
      }

  }


})();