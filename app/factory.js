;(function() {

  angular.module('mainApp').factory('getDataFromAPI', getDataFromAPI);

  getDataFromAPI.$inject = ['$http', '$q','LocalStorage','CONSTANTS'];

  function getDataFromAPI($http,$q, LocalStorage,CONSTANTS) {

    return {
      loadData: loadData
    };


     //var request = {
     //  tags : 'mobiles',
     //  tags : 'samsung',
     //  facet :'1',
     //  page : '1'
     //};

    function loadData(){
      var deferred = $q.defer();
      $http({
        method : 'GET',
        url : CONSTANTS.API_URL + 'search/?tags=samsung&tags=mobiles&facet=1&page=1',
        dataType : 'jsonp'
        //params : request
      }).then(function success(response){
        console.log(response);
        deferred.resolve(response);
        //return response.data;
      },function error(error){
        console.log(error);
        deferred.resolve(error);
        //return error;
      });
      return deferred.promise;
    }

  }


})();
