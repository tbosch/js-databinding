describe("controller", function() {
    var customerService, invalidWidgets, controller;
    beforeEach(function() {
        customerService = {};
        customerService.save = jasmine.createSpy('save');
        invalidWidgets = [];
        controller = new CustomerController(invalidWidgets, customerService);
    });

    it('should fill the customer during construction', function() {
        expect(controller.customer).toBeTruthy();
    });

    it('should return whether there are invalid widgets in the isValid method', function() {
        expect(controller.isValid()).toBeTruthy();
        invalidWidgets.push('test');
        expect(controller.isValid()).toBeFalsy();
    });

    it('should not save if a field is invalid', function() {
        invalidWidgets.push('test');
        controller.save();
        expect(customerService.save).not.toHaveBeenCalled();
    });

    it('should save the values to the model', function() {
        controller.customer.name = 'someValue';
        controller.save();
        expect(customerService.save).toHaveBeenCalled();
        var customer = customerService.save.mostRecentCall.args[0];
        expect(customer.name).toEqual('someValue');
    });

    it('should set the state during saving', function() {
        controller.save();
        expect(controller.state).toEqual('saving...');
        var customer = {id: 10};
        var finishedCallback = customerService.save.mostRecentCall.args[1];
        finishedCallback('OK', customer);
        expect(controller.customer.id).toEqual(10);
        expect(controller.state).toEqual('new id 10');
    });

});