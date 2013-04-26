
var matchesSelector = (function() {

    if (!document.body) {
        return null;
    }

    var _method = null;
    var el = document.body;
    if (el.matches) {
        _method = 'matches';
    }
    else if (el.webkitMatchesSelector) {
        _method = 'webkitMatchesSelector';
    }
    else if (el.mozMatchesSelector) {
        _method = 'mozMatchesSelector';
    }
    else if (el.msMatchesSelector) {
        _method = 'msMatchesSelector';
    }
    else if (el.oMatchesSelector) {
        _method = 'oMatchesSelector';
    }

    /**
     * @exports matchesSelector
     */
    return function(element,selector) {

        if (!element) {
            return false;
        }

        return element[_method](selector);

    };

}());
