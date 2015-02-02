(function(ng){
    'use strict';
    var app = ng.module('ngUiNotesAppSingleApp');
    app.constant('appCfg',{
        'toastMsgMap' : {
            NOTE_OK : 'The note has been loaded successfully',
            TITLE_OK : 'The title has been changed',
            COLOR_OK : 'The color has been changed',
            NEW_ITEM_OK : 'New item has been created',
            ITEM_IS_DONE_OK : 'Item is done',
            ITEM_IS_NOT_DONE_OK : 'Item is not done',
            ITEM_LABEL_OK : 'The item\'s label has been changed',
            ITEM_DELETE_OK : 'The item has been deleted successfully'
        },
        colors : [
            'yellow',
            'green',
            'blue',
            'red'
        ]
    });
}(angular));