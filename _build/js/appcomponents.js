!function(){function o(o,e,t,r){e.html5Mode(!1),o.when("/",{templateUrl:"views/home.html",controller:"MainController",controllerAs:"main"}).otherwise({redirectTo:"/"}),t.interceptors.push("authInterceptor"),t.defaults.useXDomain=!0}function e(o,e,t,r){return{request:function(o){return o.headers=o.headers||{},o.headers.authorization=!0,o},responseError:function(o){return 404===o.status?(r.path("/"),e.reject(o)):e.reject(o)}}}function t(o,e){}angular.module("mainApp",["ngRoute"]).config(o),o.$inject=["$routeProvider","$locationProvider","$httpProvider","$compileProvider"],angular.module("mainApp").factory("authInterceptor",e),e.$inject=["$rootScope","$q","LocalStorage","$location"],angular.module("mainApp").run(t),t.$inject=["$rootScope","$location"]}(),function(){angular.module("mainApp").constant("CONSTANTS",{API_URL:"http://api.buyingiq.com/v1/"})}(),function(){"use strict";function o(o,e){function t(e,t){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),null===window.localStorage.getItem(e)?o.localStorage&&o.localStorage.setItem(e,angular.toJson(t)):void console.warn("localStorage with the name "+e+" already exists. Please pick another name.")}function r(e){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),o.localStorage&&angular.fromJson(o.localStorage.getItem(e))}function n(e,t){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),o.localStorage&&o.localStorage.setItem(e,angular.toJson(t))}function a(e){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),o.localStorage&&o.localStorage.removeItem(e)}function l(){return i||console.log("localStorage not supported, make sure you have the $cookies supported."),o.localStorage&&o.localStorage.clear()}function u(){return o.localStorage}var c="undefined"==typeof window.localStorage?void 0:window.localStorage,i=!(void 0===typeof c||void 0===typeof window.JSON);return angular.element(o).on("storage",function(o,t){o.key===t&&e.$apply()}),{set:t,get:r,update:n,remove:a,removeAll:l,list:u}}angular.module("mainApp").factory("LocalStorage",["$window","$rootScope",o])}(),function(){"use strict";function o(o,e,t){function r(r,n,a,l){var u=e.defer();return o({method:r,url:t.API_URL+n,params:a,data:l,crossDomain:!0}).then(function(o){o.config||console.log("Server error occured."),u.resolve(o)},function(o){u.reject(o)}),u.promise}var n={query:r};return n}angular.module("mainApp").factory("QueryService",["$http","$q","CONSTANTS",o])}();