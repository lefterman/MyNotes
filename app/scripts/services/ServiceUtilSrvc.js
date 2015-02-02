/**
 * @ngdoc service
 * @name services.service:ServiceUtilSrvc
 * @description 
 * Gives common utility functions for the components of the rebrickable module
 * 
 * @param   {object} services The services module
 * @returns {object} The ServiceUtil singleton object
 */
(function(ng){
    'use strict';
    var services = ng.module('services');
    services.service('ServiceUtilSrvc', function(){
        /**
         * Converts the given request data object to URI encoded string containing key value pairs 
         * for POST requests. (Not recursive, only one level depth) 
         * @param   {object} data The request data
         * @returns {string} URI encoded string
         */
        this.serializePostData = function (data) {
            var k,
                str = [];
            for(k in data) {
                str.push(encodeURIComponent(k) + '=' + encodeURIComponent(data[k]));
            }
            return str.join('&');
        };
    });
}(angular));