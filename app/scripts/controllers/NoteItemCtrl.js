/**
 * @ngdoc controller
 * @name ngUiNotesAppSingleApp.controller:NoteItemCtrl
 * 
 * @description 
 * The controller of Note item manipulation
 */
(function(module){
    'use strict';
    module.controller('NoteItemCtrl', ['$scope', 'appCfg', 'NoteItemSrvc', function($scope, appCfg,  noteItemSrvc) {
        var toastMsgMap = appCfg.toastMsgMap;
        /**
         * Removes an item from the item list of the note in the scope
         * @param {object} item The removable item
         */
        function removeItem(item) {
            var items = $scope.note.items,
                index = items.indexOf(item);
            if (index > -1) {
               items.splice(index,1);
            }
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
        
        /////////////////// scope methods ////////////////////////
        /**
         * Creates a new item in the backend
         * If the promise was resolved the new item is added to the note in the scope
         */
        $scope.newItem = function() {
            var items = $scope.note.items,
                promise = noteItemSrvc.newItem();
            promise.then(function(noteItem){
                items.push(noteItem);
                displayResult(true,toastMsgMap.NEW_ITEM_OK);
            }, handleError);
        };
        /**
         * Updates the item's label in the backend
         * @param {object} item The updateble item
         */
        $scope.updateItem = function(item) {
            var promise = noteItemSrvc.updateItem(item.id, item.label);
            promise.then(function(resp){
                displayResult(true,toastMsgMap.ITEM_LABEL_OK);
            },handleError);
        };
        /**
         * Updates the item's done status in the backend
         * @param {Object} item The updatable item
         */
        $scope.updateItemIsDone = function(item) {
            console.log(item);
            var promise = noteItemSrvc.updateItemIsDone(item.id, item.isDone);
            promise.then(function(resp){
                var msg = item.isDone ? toastMsgMap.ITEM_IS_DONE_OK : toastMsgMap.ITEM_IS_NOT_DONE_OK;
                displayResult(true,msg);
            },handleError);
        };
        /**
         * Deletes the given item from the backend
         * @param {Object} item The deletable item
         */
        $scope.deleteItem = function (item) {
            console.log(item);
            var promise = noteItemSrvc.deleteItem(item.id);
            promise.then(function(){
                removeItem(item);
                displayResult(true,toastMsgMap.ITEM_DELETE_OK);
            }, handleError);
        };
    }]);
}(angular.module('ngUiNotesAppSingleApp')));