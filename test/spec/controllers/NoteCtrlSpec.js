'use strict';
describe('controller: NoteCtrl',function(){
    var $rootScope,
        $controller,
        $httpBackend,
        scope,
        noteSrvc,
        noteCtrl,
        defaultResponse,
        apiUrl = 'http://localhost:3000/note/',
        noteObj = {
            title : '',
            color: 'yellow',
            items: []
        };
    
    // required module 
    beforeEach(module('ngUiNotesAppSingleApp'));
    
    // injecting required resources
    beforeEach(inject(function($injector){
        $httpBackend = $injector.get('$httpBackend');
        $controller = $injector.get('$controller');
        $rootScope = $injector.get('$rootScope');
        scope = $rootScope.$new();
        noteSrvc = jasmine.createSpyObj('NoteSrvc', ['getNote','updateTitle','updateColor']);
        defaultResponse = $httpBackend.when('GET',apiUrl+'get').respond(noteObj);
    }));
    
    // factory method of the controller
    function createController () {
        return  $controller('NoteCtrl',{
            $scope : scope,
            noteSrvc : noteSrvc
        });
    }
    // http backend cleaning 
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    
    it('should call get API call when created', function(){
        $httpBackend.expectGET(apiUrl + 'get');
        noteCtrl = createController();
        $httpBackend.flush();
    });
});