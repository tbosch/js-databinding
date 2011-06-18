describe("simpleNameValidator", function() {
    var validator;
    beforeEach(function() {
        validator = angular.validator('simpleName');
    });

    it('should be valid for empty values', function() {
        expect(validator('')).toEqual('');
    });

    it('should be valid for simple names', function() {
        expect(validator('asdf')).toEqual('');
    });

    it('should be valid for simple names with spaces', function() {
        expect(validator('asdf HK')).toEqual('');
    });

    it('should be invalid for non simple names', function() {
        expect(validator('asdf öäüHK')).not.toEqual('');
    });
});
