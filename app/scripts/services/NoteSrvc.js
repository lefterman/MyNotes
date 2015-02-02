/**
 * @ngdoc service
 * @name services.service:NoteSrvc
 * 
 * @description 
 * The service is responsible for the Note related API operations in the backend
 * @depnedencies $http, $q, services.serviceCfg, services.ServiceUilSrvc
 */
(function(services){
    'use strict';
    services.service('NoteSrvc',['$http', '$q', 'serviceCfg', 'ServiceUtilSrvc', function($http, $q, serviceCfg, serviceUtil){
        var apiUrl = serviceCfg.API_URL,
            apiIdMap = serviceCfg.apiIdMap,
            errorMap = serviceCfg.errorMap,
            postHeaders = {'Content-type':'application/x-www-form-urlencoded; charset=utf-8'};

        /**
         * get API
         * @returns {object} The promise object of the API call
         */
        this.getNote = function () {
            var url = apiUrl + apiIdMap.GET,
                deferred = $q.defer();
            $http.get(url).success(function(response){
                console.log(response);
                deferred.resolve(response);
            }).error(function() {
                deferred.reject(errorMap.SERVICE_CALL_ERROR);
            });
            return deferred.promise;
        };
        /**
         * updateTitle API
         * @param   {string} title The note's title value
         * @returns {object} The promise object of the API call
         */
        this.updateTitle = function (title) {
            var url = apiUrl + apiIdMap.UPDATE_TITLE,
                deferred = $q.defer(),
                request = {
                    method: 'POST',
                    url : url,
                    data : serviceUtil.serializePostData({value:title}),
                    headers : postHeaders
                };
            $http(request).success(function(response) {
                deferred.resolve(response);
            }).error(function(){
                console.log('error:'+errorMap.SERVICE_CALL_ERROR );
                deferred.reject(errorMap.SERVICE_CALL_ERROR);
            });
            return deferred.promise;
        };
        /**
         * updateColor API
         * @param   {string} color The note's color
         * @returns {object} The promise object of the API call
         */
        this.updateColor = function (color) {
            var url = apiUrl + apiIdMap.UPDATE_COLOR,
                deferred = $q.defer(),
                request = {
                    method: 'POST',
                    url : url,
                    data : serviceUtil.serializePostData({color:color}),
                    headers : postHeaders
                };
            $http(request).success(function(){
                deferred.resolve(color);
            }).error(function(){
                deferred.reject(errorMap.SERVICE_CALL_ERROR);
            });
            return deferred.promise;
        };
    }]);
}(angular.module('services')));