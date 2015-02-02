'use strict';
describe('service: services.ServiceUtilSrvc', function () {
    var serviceUtil; 
    beforeEach(function(){
        module('services');
        inject(function(ServiceUtilSrvc) {
            serviceUtil = ServiceUtilSrvc;
        });
    });
    it('should be instantiated', function(){
        expect(serviceUtil).toBeDefined();
    });
    describe('Testing request object serialization utility', function(){
        it('it should convert the given object to URI encoded request param string', function() {
            var requestObject = {
                    id : 'X6TFRS01',
                    label : 'Megsétáltatom a kutyát'
                },
                converted = 'id=X6TFRS01&label=Megs%C3%A9t%C3%A1ltatom%20a%20kuty%C3%A1t';
                expect(serviceUtil.serializePostData(requestObject)).toBe(converted);
        });
    });
});