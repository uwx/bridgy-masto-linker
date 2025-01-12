// ==UserScript==
// @name        bridgy-masto-linker
// @version     0.0.0
// @author      uwx
// @description Description goes here
// @include     https://bsky.app/*
// @include     https://*.bsky.dev/*
// @grant       none
// ==/UserScript==

(() => { // webpackBootstrap
var __webpack_modules__ = ({});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = function () {
	return "1.1.8";
};

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.1.8";

})();
/************************************************************************/
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
console.log('hello main.ts');
var processedElements = new WeakSet();
function findFiberByProps(element, condition) {
    var elAny = element;
    var fiberKey = Object.keys(elAny).find(function(k) {
        return k.startsWith('__reactFiber$');
    });
    var fiber = elAny[fiberKey];
    do {
        if (condition(fiber.memoizedProps)) return fiber;
        fiber = fiber.return;
    }while (fiber);
    console.warn('did not find fiber!');
    return undefined;
}
// document.querySelector('[data-testid^="postThreadItem-by-"]').__reactFiber$9oo16v5l9w.return.return.memoizedProps.record.bridgyOriginalUrl
// document.querySelector('[data-testid="feedItem-by-fedi.eblu.space"]').__reactFiber$en58sxiacu8.return.return.return.return.return.return.return.memoizedProps.record.bridgyOriginalUrl
setInterval(function() {
    var newElements = _to_consumable_array(document.querySelectorAll('[data-testid^="feedItem-"], [data-testid^="postThreadItem-"]')).map(function(e) {
        var _e_querySelector, _e_querySelector1;
        return {
            element: e,
            buttons: (_e_querySelector = e.querySelector('[aria-label="Open post options menu"]')) === null || _e_querySelector === void 0 ? void 0 : _e_querySelector.parentElement.parentElement.parentElement,
            postLink: (_e_querySelector1 = e.querySelector('[href^="/profile/"][href*="/post/"]')) === null || _e_querySelector1 === void 0 ? void 0 : _e_querySelector1.href
        };
    });
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var _step_value = _step.value, element = _step_value.element, buttons = _step_value.buttons, postLink = _step_value.postLink;
            if (processedElements.has(element)) {
                return "continue";
            }
            processedElements.add(element);
            var fiber = findFiberByProps(element, function(props) {
                var _props_record;
                return props === null || props === void 0 ? void 0 : (_props_record = props.record) === null || _props_record === void 0 ? void 0 : _props_record.bridgyOriginalUrl;
            });
            if (fiber) {
                var originalUrl = fiber.memoizedProps.record.bridgyOriginalUrl;
                var button = document.createElement('button');
                button.textContent = '🌐';
                button.onclick = function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    document.location.href = originalUrl;
                };
                if (!buttons) return "continue";
                buttons.append(button);
            }
        };
        for(var _iterator = newElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}, 250);

})()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpZGd5LW1hc3RvLWxpbmtlci51c2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpZGd5LW1hc3RvLWxpbmtlci8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdoZWxsbyBtYWluLnRzJyk7XG5cbmNvbnN0IHByb2Nlc3NlZEVsZW1lbnRzID0gbmV3IFdlYWtTZXQoKTtcblxuZnVuY3Rpb24gZmluZEZpYmVyQnlQcm9wcyhlbGVtZW50OiBFbGVtZW50LCBjb25kaXRpb246IChwcm9wczogUmVjb3JkPHN0cmluZywgYW55PikgPT4gYm9vbGVhbik6IGFueSB7XG4gICAgY29uc3QgZWxBbnkgPSBlbGVtZW50IGFzIGFueTtcbiAgICBjb25zdCBmaWJlcktleSA9IE9iamVjdC5rZXlzKGVsQW55KS5maW5kKGsgPT4gay5zdGFydHNXaXRoKCdfX3JlYWN0RmliZXIkJykpITtcbiAgICBsZXQgZmliZXIgPSBlbEFueVtmaWJlcktleV07XG4gICAgZG8ge1xuICAgICAgICBpZiAoY29uZGl0aW9uKGZpYmVyLm1lbW9pemVkUHJvcHMpKSByZXR1cm4gZmliZXI7XG4gICAgICAgIGZpYmVyID0gZmliZXIucmV0dXJuO1xuICAgIH0gd2hpbGUgKGZpYmVyKTtcblxuICAgIGNvbnNvbGUud2FybignZGlkIG5vdCBmaW5kIGZpYmVyIScpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlc3RpZF49XCJwb3N0VGhyZWFkSXRlbS1ieS1cIl0nKS5fX3JlYWN0RmliZXIkOW9vMTZ2NWw5dy5yZXR1cm4ucmV0dXJuLm1lbW9pemVkUHJvcHMucmVjb3JkLmJyaWRneU9yaWdpbmFsVXJsXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZXN0aWQ9XCJmZWVkSXRlbS1ieS1mZWRpLmVibHUuc3BhY2VcIl0nKS5fX3JlYWN0RmliZXIkZW41OHN4aWFjdTgucmV0dXJuLnJldHVybi5yZXR1cm4ucmV0dXJuLnJldHVybi5yZXR1cm4ucmV0dXJuLm1lbW9pemVkUHJvcHMucmVjb3JkLmJyaWRneU9yaWdpbmFsVXJsXG5cbnNldEludGVydmFsKCgpID0+IHtcbiAgICBjb25zdCBuZXdFbGVtZW50cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10ZXN0aWRePVwiZmVlZEl0ZW0tXCJdLCBbZGF0YS10ZXN0aWRePVwicG9zdFRocmVhZEl0ZW0tXCJdJyldLm1hcChlID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGUsXG4gICAgICAgICAgICBidXR0b25zOiBlLnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLWxhYmVsPVwiT3BlbiBwb3N0IG9wdGlvbnMgbWVudVwiXScpPy5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5wYXJlbnRFbGVtZW50LFxuICAgICAgICAgICAgcG9zdExpbms6IChlLnF1ZXJ5U2VsZWN0b3IoJ1tocmVmXj1cIi9wcm9maWxlL1wiXVtocmVmKj1cIi9wb3N0L1wiXScpIGFzIEhUTUxBbmNob3JFbGVtZW50KT8uaHJlZixcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGZvciAoY29uc3QgeyBlbGVtZW50LCBidXR0b25zLCBwb3N0TGluayB9IG9mIG5ld0VsZW1lbnRzKSB7XG4gICAgICAgIGlmIChwcm9jZXNzZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvY2Vzc2VkRWxlbWVudHMuYWRkKGVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IGZpYmVyID0gZmluZEZpYmVyQnlQcm9wcyhlbGVtZW50LCBwcm9wcyA9PiBwcm9wcz8ucmVjb3JkPy5icmlkZ3lPcmlnaW5hbFVybCk7XG4gICAgICAgIGlmIChmaWJlcikge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxVcmwgPSBmaWJlci5tZW1vaXplZFByb3BzLnJlY29yZC5icmlkZ3lPcmlnaW5hbFVybDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAn8J+MkCc7XG4gICAgICAgICAgICBidXR0b24ub25jbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IG9yaWdpbmFsVXJsO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKCFidXR0b25zKSBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgICAgICBidXR0b25zLmFwcGVuZChidXR0b24pO1xuICAgICAgICB9XG4gICAgfVxufSwgMjUwKTsiXSwibmFtZXMiOlsiY29uc29sZSIsInByb2Nlc3NlZEVsZW1lbnRzIiwiV2Vha1NldCIsImZpbmRGaWJlckJ5UHJvcHMiLCJlbGVtZW50IiwiY29uZGl0aW9uIiwiZWxBbnkiLCJmaWJlcktleSIsIk9iamVjdCIsImsiLCJmaWJlciIsInVuZGVmaW5lZCIsInNldEludGVydmFsIiwibmV3RWxlbWVudHMiLCJkb2N1bWVudCIsImUiLCJfZV9xdWVyeVNlbGVjdG9yIiwiX2VfcXVlcnlTZWxlY3RvcjEiLCJfaXRlcmF0b3JFcnJvciIsImJ1dHRvbnMiLCJwb3N0TGluayIsInByb3BzIiwiX3Byb3BzX3JlY29yZCIsIm9yaWdpbmFsVXJsIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsUUFBUSxHQUFHLENBQUM7QUFFWixJQUFNQyxvQkFBb0IsSUFBSUM7QUFFOUIsU0FBU0MsaUJBQWlCQyxPQUFnQixFQUFFQyxTQUFrRDtJQUMxRixJQUFNQyxRQUFRRjtJQUNkLElBQU1HLFdBQVdDLE9BQU8sSUFBSSxDQUFDRixPQUFPLElBQUksQ0FBQ0csU0FBQUE7ZUFBS0EsRUFBRSxVQUFVLENBQUM7O0lBQzNELElBQUlDLFFBQVFKLEtBQUssQ0FBQ0MsU0FBUztJQUMzQixHQUFHO1FBQ0MsSUFBSUYsVUFBVUssTUFBTSxhQUFhLEdBQUcsT0FBT0E7UUFDM0NBLFFBQVFBLE1BQU0sTUFBTTtJQUN4QixRQUFTQSxPQUFPO0lBRWhCVixRQUFRLElBQUksQ0FBQztJQUNiLE9BQU9XO0FBQ1g7QUFFQSw2SUFBNkk7QUFDN0kseUxBQXlMO0FBRXpMQyxZQUFZO0lBQ1IsSUFBTUMsY0FBZSxxQkFBR0MsU0FBUyxnQkFBZ0IsQ0FBQyxpRUFBaUUsR0FBRyxDQUFDQyxTQUFBQTtZQUd0R0Msa0JBQ0VDO1FBSGYsT0FBTztZQUNILFNBQVNGO1lBQ1QsT0FBTyxHQUFFQyxtQkFBQUEsRUFBRSxhQUFhLENBQUMsc0RBQWhCQSx1Q0FBQUEsaUJBQTBELGFBQWEsQ0FBRSxhQUFhLENBQUUsYUFBYTtZQUM5RyxRQUFRLEdBQUdDLG9CQUFBQSxFQUFFLGFBQWEsQ0FBQyxvREFBaEJBLHdDQUFBQSxrQkFBOEUsSUFBSTtRQUNqRztJQUNKO1FBRUtDLGtDQUFBQSwyQkFBQUE7OztZQUFBQSxrQkFBQUEsYUFBUWQsc0JBQUFBLFNBQVNlLHNCQUFBQSxTQUFTQyx1QkFBQUE7WUFDM0IsSUFBSW5CLGtCQUFrQixHQUFHLENBQUNHLFVBQVU7Z0JBQ2hDO1lBQ0o7WUFFQUgsa0JBQWtCLEdBQUcsQ0FBQ0c7WUFFdEIsSUFBTU0sUUFBUVAsaUJBQWlCQyxTQUFTaUIsU0FBQUE7b0JBQVNDO3VCQUFBQSxrQkFBQUEsNkJBQUFBLGdCQUFBQSxNQUFPLE1BQU0sY0FBYkEsb0NBQUFBLGNBQWUsaUJBQWlCOztZQUNqRixJQUFJWixPQUFPO2dCQUNQLElBQU1hLGNBQWNiLE1BQU0sYUFBYSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7Z0JBRWhFLElBQU1jLFNBQVNWLFNBQVMsYUFBYSxDQUFDO2dCQUN0Q1UsT0FBTyxXQUFXLEdBQUc7Z0JBQ3JCQSxPQUFPLE9BQU8sR0FBR1QsU0FBQUE7b0JBQ2JBLEVBQUUsZUFBZTtvQkFDakJBLEVBQUUsY0FBYztvQkFFaEJELFNBQVMsUUFBUSxDQUFDLElBQUksR0FBR1M7Z0JBQzdCO2dCQUVBLElBQUksQ0FBQ0osU0FBUztnQkFFZEEsUUFBUSxNQUFNLENBQUNLO1lBQ25CO1FBQ0o7UUF4QkEsUUFBS04sWUFBd0NMLGdDQUF4Q0ssU0FBQUEsNkJBQUFBLFFBQUFBLHlCQUFBQTs7UUFBQUE7UUFBQUE7OztpQkFBQUEsNkJBQUFBO2dCQUFBQTs7O2dCQUFBQTtzQkFBQUE7Ozs7QUF5QlQsR0FBRyJ9