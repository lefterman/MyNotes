/**
 * @ngdoc directive
 * @name directives.directive:ColorButton
 * @restrict A
 * 
 * @description 
 * Add add click event handler to the collor button. It calls the updateColor 
 * function of the scope with the element's data-color attribute  
 * @param   {object} module directives module
 * @returns {object} The directive object
 */
(function(module){
    'use strict';
    module.directive('colorButton', function(){
        return {
            restrict: 'A',
            link : function (scope, el, attrs) {
                var color = attrs['color'],
                    btn = angular.element(el);
                btn.bind('click', function () {
                    scope.updateColor(color);
                });
            }
        };
    });
}(angular.module('directives')));