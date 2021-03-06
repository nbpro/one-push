;(function() {

    'use strict';
    angular.module('mainApp').factory('LocalStorage', [
        '$window',
        '$rootScope',
        LocalStorageService
      ]);
    function LocalStorageService($window, $rootScope) {

      var storage = (typeof window.localStorage === 'undefined') ? undefined : window.localStorage,
          supported = !(typeof storage === undefined || typeof window.JSON === undefined);
        // refresh the local storage
        angular.element($window).on('storage', function(event, name) {
          if (event.key === name) {
            $rootScope.$apply();
          }
        });


        return {
          set: set,
          get: get,
          update: update,
          remove: remove,
          removeAll: removeAll,
          list: list
        };

         function set(name, val) {
           if (!supported) {
               console.log('localStorage not supported, make sure you have the $cookies supported.');
             }

           // in case we already have localStorage with same name alert error msg
           if (window.localStorage.getItem(name) !== null) {
             console.warn('localStorage with the name ' + name + ' already exists. Please pick another name.');
           } else {
             return $window.localStorage && $window.localStorage.setItem(name, angular.toJson(val));
           }
         }
         function get(name) {
           if (!supported) {
               console.log('localStorage not supported, make sure you have the $cookies supported.');
             }

           return $window.localStorage && angular.fromJson($window.localStorage.getItem(name));
         }

         function update(name, val) {
           if (!supported) {
               console.log('localStorage not supported, make sure you have the $cookies supported.');
             }

           return $window.localStorage && $window.localStorage.setItem(name, angular.toJson(val));
         }

         function remove(name) {
           if (!supported) {
               console.log('localStorage not supported, make sure you have the $cookies supported.');
           }

           return $window.localStorage && $window.localStorage.removeItem(name);
         }
         function removeAll() {
           if (!supported) {
               console.log('localStorage not supported, make sure you have the $cookies supported.');
           }

           return $window.localStorage && $window.localStorage.clear();
         }
        // return list of all local storage data ..in form of objects
         function list() {
           return $window.localStorage;
         }

    }


})();
