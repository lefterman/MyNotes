(function(services){
    'use strict';
    services.service('ServiceUtil', function(){
        /**
         * Converts request data object to query string (only one level depth)
         * @param   {object} data The serializable request data
         * @returns {string} The URI encoded request query string
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
}(angular.module('services')));