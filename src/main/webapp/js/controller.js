(function() {
    function CustomerController($invalidWidgets, customerService) {
        this.$invalidWidgets = $invalidWidgets;
        this.customerService = customerService;
        this.customer = this.getInitialCustomer();
        this.state = '';
    }

    CustomerController.$inject = ['$invalidWidgets','customerService'];


    CustomerController.prototype = {
        getInitialCustomer: function() {
            return {
                name:'',
                surname:'',
                street:'',
                email: '',
                phones: [
                    {type: 'Standard', value:'089/12345'},
                    {type: 'Handy', value:'0172/1111'},
                ],
                plz:'',
                city:''
            };
        },
        isValid: function() {
            return this.$invalidWidgets.length == 0;
        },
        save: function() {
            if (this.isValid()) {
                this.state = 'saving...';
                var self = this;
                this.customerService.save(this.customer, function(code, data) {
                    self.state = 'new id ' + data.id;
                    self.customer = data;
                });
            }
        }
    }

    window.CustomerController = CustomerController;
})();


