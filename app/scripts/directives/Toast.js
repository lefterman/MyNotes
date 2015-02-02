(function(directives){
    'use strict';
    directives.directive('toast', ['$timeout', function($timeout) {
        var DELAY = 2000,
            EFFECT_DELAY = 500,
            ACTIVE = 'active',
            ERROR = 'error';
        function show (el, toast) {
            var ok = toast.ok;
            $timeout(function() {
                if (!ok) {
                    el.addClass(ERROR);
                }
                el.addClass(ACTIVE);
            });
        }
        
        function hide (el, toast) {
            $timeout(function() {
                if (el.hasClass(ACTIVE)) {
                    el.removeClass(ACTIVE);
                }
            });
            $timeout(function(){
                toast.message = '';
                toast.ok = null;
                if (el.hasClass(ERROR)) {
                    el.removeClass(ERROR);
                }
            }, EFFECT_DELAY);
        }
        
        return {
            restrict : 'A',
            scope: true,
            link : function (scope, iEl) {
                var el = angular.element(iEl);
                scope.$watch('toast', function (toast) {
                    if (toast.message !== '') {
                        show(el, toast);
                        $timeout (function () {
                           hide(el, toast);
                        }, DELAY);
                    }             
                }, true);
            }
        };
    }]);
}(angular.module('directives')));