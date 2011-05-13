/**
 * The controller object connects the backend with the view.
 */
function CustomerController($invalidWidgets, $xhr) {
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

CustomerController.prototype = {
    CUSTOMER_URL : 'rest/customer',
    isValid: function() {
        return this.$invalidWidgets.length == 0;
    },
    save: function() {
        this.state = 'saving...';
        var self = this;
        this.$xhr('POST', this.CUSTOMER_URL + "/-1", this.data, function(code, data) {
            self.state = 'new id ' + data.id;
            self.data = data;
        });
    }
}