(function() {
    var CUSTOMER_URL = '/js-databinding/rest/customer';

    angular.service('customerService', function($xhr) {
        return {
            save: function(customer, callback) {
                $xhr('POST', CUSTOMER_URL + "/-1", customer, callback);
            }
        };
    }, {$inject: ['$xhr']});
})();