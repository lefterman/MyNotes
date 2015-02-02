'use strict';
describe('directive: directives.ColorButton',function(){
    var scope,
        $rootScope,
        $compile,
        element,
        elementTmpl = '<ul class="color-chooser">' +
                '<li data-color="yellow" class="yellow" data-color-button></li>' +
                '<li data-color="green" class="green" data-color-button></li>' +
                '</ul>';
        beforeEach(function(){
            module('directives');
        });
        beforeEach(inject(function($injector){
            $compile = $injector.get('$compile');
            $rootScope = $injector.get('$rootScope');
            scope = $rootScope.$new();
            scope.updateColor = jasmine.createSpy('updateColor');
            element = $compile(elementTmpl)(scope);
            $rootScope.$digest();
        }));
    // jQuery is needed to evaluate this test
    it('should call updateColor when clicking on the yellow chooser item', function() {
        var button = element.find('.yellow');
        button.trigger('click');
        expect(scope.updateColor).toHaveBeenCalled();
    });
    
    it('should call updateColor with green value when clicking on the green chooser item', function() {
        var button = element.find('.green');
        button.trigger('click');
        expect(scope.updateColor).toHaveBeenCalledWith('green');
    });
});