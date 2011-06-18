(function() {
    angular.validator('simpleName', function(input, format) {
        if (input.match(/[^a-z ]/i)) {
            return "Only a-z and space allowed.";
        } else {
            return "";
        }
    });
})();