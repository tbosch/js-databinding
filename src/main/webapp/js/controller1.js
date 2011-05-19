/**
 * This version of the controller does the validation
 * all alone.
 */
(function() {

    /**
     * The controller object connects the backend with the view.
     */
    window.CustomerController = function($xhr) {
        this.$xhr = $xhr;
        this.data = {
            name: '',
            surname: '',
            street: '',
            plz: '',
            city: '',
            email: ''
        };
        this.errors = {};
        this.state = '';
        this.valid = true;
        for (var id in this.data) {
            this.$watch('data.' + id, this.validate);
        }
    }

    window.CustomerController.$inject = ['$xhr'];

    var CUSTOMER_URL = '/js-databinding/rest/customer';
    var REQUIRED_FIELDS = ['name', 'surname', 'email'];
    var EMAIL_REGEX = /.+@.+\..+/;

    CustomerController.prototype.validate = function() {
        this.errors = {};
        validateRequiredFields(this.data, this.errors);
        validateEmail(this.data, this.errors);
        this.valid = isEmpty(this.errors);
        return this.valid;
    }

    function isEmpty(object) {
        for (var id in object) {
            return false;
        }
        return true;
    }

    function foreachInList(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i]);
        }
    }

    function validateRequiredFields(data, errors) {
        foreachInList(REQUIRED_FIELDS, function(id) {
            var value = data[id];
            if (!value) {
                errors[id] = true;
            }
        });
    }

    function validateEmail(data, errors) {
        var value = data.email;
        if (!EMAIL_REGEX.test(value)) {
            errors.email = true;
        }
    }

    CustomerController.prototype.fieldClass = function(fieldId) {
        var classes = '';
        if (this.errors[fieldId]) {
            classes = 'error';
        }
        return classes;
    }

    CustomerController.prototype.save = function() {
        this.state = 'saving...';
        var self = this;
        this.$xhr('POST', CUSTOMER_URL + "/-1", this.data, function(code, data) {
            self.state = 'new id ' + data.id;
            self.data = data;
        });
    }
})();
