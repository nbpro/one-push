;(function() {

  angular.module('mainApp').factory('getDataFromAPI', getDataFromAPI);

  getDataFromAPI.$inject = ['$http', '$q','LocalStorage','CONSTANTS'];

  function getDataFromAPI($http,$q, LocalStorage,CONSTANTS) {

    return {
      loadData: loadData
    };

    function loadData(){
      var deferred = $q.defer();
      $http({
        method : 'GET',
        url : CONSTANTS.API_URL + 'one-push?type=json&query=list_websites',
        dataType : 'jsonp'
      }).then(function success(response){
        console.log(response);
        deferred.resolve(response);
      },function error(error){
        console.log(error);
        deferred.resolve(error);
      });
      return deferred.promise;
    }

  }


})();
