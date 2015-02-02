 (function(ng){
    'use strict';
    var services = ng.module('services');
    services.constant('serviceCfg', {
        API_URL : 'http://localhost:3000/note/',
        apiIdMap : {
            GET : 'get',
            NEW_ITEM : 'newItem',
            UPDATE_ITEM_IS_DONE : 'updateItemIsDone',
            UPDATE_TITLE : 'updateTitle',
            UPDATE_ITEM : 'updateItem',
            DELETE_ITEM : 'delete',
            UPDATE_COLOR : 'updateColor'
        },
        errorMap : {
            SERVICE_CALL_ERROR : 'Service communication error'
        }
    });
}(angular));