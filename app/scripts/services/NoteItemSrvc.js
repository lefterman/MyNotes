/**
 * @ngdoc service
 * @name services.service:NoteItemSrvc
 * 
 * @description 
 * The service is responsible for the Note items related API operations in the backend
 * @depnedencies $http, $q, services.serviceCfg, services.ServiceUilSrvc
 */
(function(services){
    'use strict';
    services.service('NoteItemSrvc', ['$http', '$q', 'serviceCfg', 'ServiceUtilSrvc', function($http, $q, serviceCfg, ServiceUtil){
        var apiUrl = serviceCfg.API_URL,
            apiIdMap = serviceCfg.apiIdMap,
            errorMap = serviceCfg.errorMap,
            postHeaders = {'Content-type':'application/x-www-form-urlencoded; charset=utf-8'};
        /**
         * The newItem API
         * @returns {object} The promise object of the API call
         */
        this.newItem = function () {
            var url = apiUrl + apiIdMap.NEW_ITEM;
            var deferred = $q.defer();
            $http.get(url).success(function(result){
                deferred.resolve(result);
            }).error(function() {
                deferred.reject(errorMap.SERVICE_CALL_ERROR);
            });
            return deferred.promise;
        };
        /**
         * The updateItemIsDone API
         * @param   {string} id     The item's ID
         * @param   {boolean} isDone The item's isDone status
         * @returns {object} The promise object of the API call
         */
        this.updateItemIsDone = function (id, isDone) {
            var url = apiUrl + id + '/' + apiIdMap.UPDATE_ITEM_IS_DONE,
                deferred = $q.defer(),
                data = ServiceUtil.serializePostData({
                    id : id,
                    isDone : isDone
                }),
                request = {
                    method : 'POST',
                    url : url,
                    headers : postHeaders,
                    data : data
                };
            
            $http(request).success(function(result) {
                deferred.resolve(result);
            }).error(function(){
                deferred.reject(errorMap.SERVICE_CALL_ERROR);
            });
            return deferred.promise;
        };
        /**
         * The updateItem API
         * @param   {string} id    The item's ID
         * @param   {string} label The item's label value
         * @returns {object} The promise object of the API call
         */
        this.updateItem = function (id, label) {
            var url = apiUrl + id + '/' + apiIdMap.UPDATE_ITEM,
                deferred = $q.defer(),
                data = ServiceUtil.serializePostData({
                    id : id,
                    value : label
                }),
                request = {
                    method: 'POST',
                    url: url,
                    data: data,
                    headers: postHeaders
                };
            $http(request).success(function(result) {
                deferred.resolve(result);
            }).error(function(){
                deferred.reject(errorMap.SERVICE_CALL_ERROR);
            });
            return deferred.promise;
        };
        /**
         * The deleteItem API
         * @param   {string} id The item's ID
         * @returns {object} The promise object of the API call
         */
        this.deleteItem = function (id) {
            var url = apiUrl + id + '/' + apiIdMap.DELETE_ITEM,
                deferred = $q.defer(),
                data = ServiceUtil.serializePostData({
                    id : id
                }),
                request = {
                    method : 'POST',
                    url : url,
                    headers: postHeaders,
                    data: data
                };
            $http(request).success(function(result) {
                deferred.resolve(result);
            }).error(function(){
                deferred.reject(errorMap.SERVICE_CALL_ERROR);
            });
            return deferred.promise;
        };
    }]);
}(angular.module('services')));