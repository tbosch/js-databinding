/**
 * This version of the controller does the validation
 * using the angular validation attributes.
 */
(function() {
    /**
     * The controller object connects the backend with the view.
     */
    window.CustomerController = function($invalidWidgets, $xhr) {
        this.$invalidWidgets = $invalidWidgets;
        this.$xhr = $xhr;
        this.data = {
            name:'',
            surname:'',
            street:'',
            plz:'',
            city:'',
            email:''
        };
        this.state = '';
    }

    CustomerController.$inject = ['$invalidWidgets','$xhr'];

    var CUSTOMER_URL = 'rest/customer';

    CustomerController.prototype = {
        isValid: function() {
            return this.$invalidWidgets.length == 0;
        },
        save: function() {
            this.state = 'saving...';
            var self = this;
            this.$xhr('POST', CUSTOMER_URL + "/-1", this.data, function(code, data) {
                self.state = 'new id ' + data.id;
                self.data = data;
            });
        }
    }

})();
