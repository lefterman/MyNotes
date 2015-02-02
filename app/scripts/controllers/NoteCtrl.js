/**
 * @ngdoc controller
 * @name ngUiNotesAppSingleApp.controller:NoteCtrl
 * 
 * @description 
 * The main controller of the application for handling the note
 * @dependencies $scope, appCfg, services.NoteSrvc
 */
(function(app){
    'use strict';
    app.controller('NoteCtrl',['$scope', 'appCfg', 'NoteSrvc', function($scope, appCfg, noteSrvc) {
        var toastMsgMap = appCfg.toastMsgMap,
            tmpColor,
            tmpTitle;
        
        ///////////// note data initialization //////////
        $scope.note = $scope.note || {
            title:'',
            items:[],
            color:'yellow'
        };
        //////////// toast data initialization //////////
        $scope.toast = $scope.toast || {ok:true};
        
        
        /**
         * Load the note data from the back-end
         */
        function init () {
            var promise = noteSrvc.getNote();
            promise.then(function(result){
                $scope.note = result;
                tmpColor = $scope.note.color;
                tmpTitle = $scope.note.title;
                displayResult(true, toastMsgMap.NOTE_OK);
            }, handleError);
        }
        
        
        /**
         * Sets the toast message and status
         * @param {boolean} ok      The response status
         * @param {string} message The result or error message to be displayed in the Toast
         */
        function displayResult (ok, message) {
            $scope.toast.ok = ok === true;
            $scope.toast.message = message;
        }
        
        /**
         * A wrapper function for promise rejects
         * @param {string} error The error message
         */
        function handleError (error) {
            displayResult(false, error);
        }
        ////////////////// scope methods /////////////////
        /**
         * Updates the title in the backend if it has been changed
         */
        $scope.updateTitle = function() {
            if (tmpTitle !== $scope.note.title) { 
                var title = $scope.note.title;
                var promise = noteSrvc.updateTitle(title);
                promise.then(function(){
                    tmpTitle = title;
                    displayResult(true,toastMsgMap.TITLE_OK);
                }, handleError);
            }
        };
       
       /**
         * Updates the color in the backend if it has been changed
         * @param {string} color The color
         */
        $scope.updateColor = function (color) {
            if (color !== tmpColor) {
                var promise = noteSrvc.updateColor(color);
                promise.then(function() {
                    tmpColor = color;
                    $scope.note.color = color;
                    displayResult(true,toastMsgMap.COLOR_OK);
                },handleError);
            }
        };
        
        ////////////// start init ///////////
        init();
    }]);
}(angular.module('ngUiNotesAppSingleApp')));