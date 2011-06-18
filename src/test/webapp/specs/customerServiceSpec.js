describe("customerService", function() {
    var service;

    beforeEach(function() {
        service = angular.scope().$service('customerService');
    });

    it('should save a customer and assign an id', function() {
        var savedCustomer = null;
        runs(function() {
            service.save({ name: 'a',email: 'a@b.c'},
                    function(state, customer) {
                        savedCustomer = customer;
                    });
        });
        waitsFor(function() {
            return savedCustomer != null;
        }, 'server call never completed', 4000);
        runs(function() {
            expect(savedCustomer.id).toBeTruthy();
        });
    });
});
