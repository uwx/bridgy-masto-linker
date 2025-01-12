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
console.log('hello masto linker world');
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
        var _e_querySelector;
        return {
            element: e,
            buttons: (_e_querySelector = e.querySelector('[aria-label="Open post options menu"]')) === null || _e_querySelector === void 0 ? void 0 : _e_querySelector.parentElement.parentElement.parentElement
        };
    });
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var _step_value = _step.value, element = _step_value.element, buttons = _step_value.buttons;
            if (processedElements.has(element)) {
                return "continue";
            }
            processedElements.add(element);
            var fiber = findFiberByProps(element, function(props) {
                return props === null || props === void 0 ? void 0 : props.record;
            });
            if (!fiber) return "continue";
            var originalUrl = fiber.memoizedProps.record.bridgyOriginalUrl;
            if (!originalUrl) return "continue";
            var button = document.createElement('button');
            button.textContent = '🌐';
            button.onclick = function(e) {
                e.stopPropagation();
                e.preventDefault();
                document.location.href = originalUrl;
            };
            if (!buttons) return "continue";
            buttons.append(button);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpZGd5LW1hc3RvLWxpbmtlci51c2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpZGd5LW1hc3RvLWxpbmtlci8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdoZWxsbyBtYXN0byBsaW5rZXIgd29ybGQnKTtcblxuY29uc3QgcHJvY2Vzc2VkRWxlbWVudHMgPSBuZXcgV2Vha1NldCgpO1xuXG5mdW5jdGlvbiBmaW5kRmliZXJCeVByb3BzKGVsZW1lbnQ6IEVsZW1lbnQsIGNvbmRpdGlvbjogKHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiBib29sZWFuKTogYW55IHtcbiAgICBjb25zdCBlbEFueSA9IGVsZW1lbnQgYXMgYW55O1xuICAgIGNvbnN0IGZpYmVyS2V5ID0gT2JqZWN0LmtleXMoZWxBbnkpLmZpbmQoayA9PiBrLnN0YXJ0c1dpdGgoJ19fcmVhY3RGaWJlciQnKSkhO1xuICAgIGxldCBmaWJlciA9IGVsQW55W2ZpYmVyS2V5XTtcbiAgICBkbyB7XG4gICAgICAgIGlmIChjb25kaXRpb24oZmliZXIubWVtb2l6ZWRQcm9wcykpIHJldHVybiBmaWJlcjtcbiAgICAgICAgZmliZXIgPSBmaWJlci5yZXR1cm47XG4gICAgfSB3aGlsZSAoZmliZXIpO1xuXG4gICAgY29uc29sZS53YXJuKCdkaWQgbm90IGZpbmQgZmliZXIhJyk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVzdGlkXj1cInBvc3RUaHJlYWRJdGVtLWJ5LVwiXScpLl9fcmVhY3RGaWJlciQ5b28xNnY1bDl3LnJldHVybi5yZXR1cm4ubWVtb2l6ZWRQcm9wcy5yZWNvcmQuYnJpZGd5T3JpZ2luYWxVcmxcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlc3RpZD1cImZlZWRJdGVtLWJ5LWZlZGkuZWJsdS5zcGFjZVwiXScpLl9fcmVhY3RGaWJlciRlbjU4c3hpYWN1OC5yZXR1cm4ucmV0dXJuLnJldHVybi5yZXR1cm4ucmV0dXJuLnJldHVybi5yZXR1cm4ubWVtb2l6ZWRQcm9wcy5yZWNvcmQuYnJpZGd5T3JpZ2luYWxVcmxcblxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRlc3RpZF49XCJmZWVkSXRlbS1cIl0sIFtkYXRhLXRlc3RpZF49XCJwb3N0VGhyZWFkSXRlbS1cIl0nKV0ubWFwKGUgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudDogZSxcbiAgICAgICAgICAgIGJ1dHRvbnM6IGUucXVlcnlTZWxlY3RvcignW2FyaWEtbGFiZWw9XCJPcGVuIHBvc3Qgb3B0aW9ucyBtZW51XCJdJyk/LnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQhLnBhcmVudEVsZW1lbnQsXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IHsgZWxlbWVudCwgYnV0dG9ucyB9IG9mIG5ld0VsZW1lbnRzKSB7XG4gICAgICAgIGlmIChwcm9jZXNzZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvY2Vzc2VkRWxlbWVudHMuYWRkKGVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IGZpYmVyID0gZmluZEZpYmVyQnlQcm9wcyhlbGVtZW50LCBwcm9wcyA9PiBwcm9wcz8ucmVjb3JkKTtcbiAgICAgICAgaWYgKCFmaWJlcikgY29udGludWU7XG5cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxVcmwgPSBmaWJlci5tZW1vaXplZFByb3BzLnJlY29yZC5icmlkZ3lPcmlnaW5hbFVybDtcbiAgICAgICAgaWYgKCFvcmlnaW5hbFVybCkgY29udGludWU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ/CfjJAnO1xuICAgICAgICBidXR0b24ub25jbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IG9yaWdpbmFsVXJsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghYnV0dG9ucykgY29udGludWU7XG4gICAgXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kKGJ1dHRvbik7XG4gICAgfVxufSwgMjUwKTsiXSwibmFtZXMiOlsiY29uc29sZSIsInByb2Nlc3NlZEVsZW1lbnRzIiwiV2Vha1NldCIsImZpbmRGaWJlckJ5UHJvcHMiLCJlbGVtZW50IiwiY29uZGl0aW9uIiwiZWxBbnkiLCJmaWJlcktleSIsIk9iamVjdCIsImsiLCJmaWJlciIsInVuZGVmaW5lZCIsInNldEludGVydmFsIiwibmV3RWxlbWVudHMiLCJkb2N1bWVudCIsImUiLCJfZV9xdWVyeVNlbGVjdG9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJidXR0b25zIiwicHJvcHMiLCJvcmlnaW5hbFVybCIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLFFBQVEsR0FBRyxDQUFDO0FBRVosSUFBTUMsb0JBQW9CLElBQUlDO0FBRTlCLFNBQVNDLGlCQUFpQkMsT0FBZ0IsRUFBRUMsU0FBa0Q7SUFDMUYsSUFBTUMsUUFBUUY7SUFDZCxJQUFNRyxXQUFXQyxPQUFPLElBQUksQ0FBQ0YsT0FBTyxJQUFJLENBQUNHLFNBQUFBO2VBQUtBLEVBQUUsVUFBVSxDQUFDOztJQUMzRCxJQUFJQyxRQUFRSixLQUFLLENBQUNDLFNBQVM7SUFDM0IsR0FBRztRQUNDLElBQUlGLFVBQVVLLE1BQU0sYUFBYSxHQUFHLE9BQU9BO1FBQzNDQSxRQUFRQSxNQUFNLE1BQU07SUFDeEIsUUFBU0EsT0FBTztJQUVoQlYsUUFBUSxJQUFJLENBQUM7SUFDYixPQUFPVztBQUNYO0FBRUEsNklBQTZJO0FBQzdJLHlMQUF5TDtBQUV6TEMsWUFBWTtJQUNSLElBQU1DLGNBQWUscUJBQUdDLFNBQVMsZ0JBQWdCLENBQUMsaUVBQWlFLEdBQUcsQ0FBQ0MsU0FBQUE7WUFHdEdDO1FBRmIsT0FBTztZQUNILFNBQVNEO1lBQ1QsT0FBTyxHQUFFQyxtQkFBQUEsRUFBRSxhQUFhLENBQUMsc0RBQWhCQSx1Q0FBQUEsaUJBQTBELGFBQWEsQ0FBRSxhQUFhLENBQUUsYUFBYTtRQUNsSDtJQUNKO1FBRUtDLGtDQUFBQSwyQkFBQUE7OztZQUFBQSxrQkFBQUEsYUFBUWIsc0JBQUFBLFNBQVNjLHNCQUFBQTtZQUNsQixJQUFJakIsa0JBQWtCLEdBQUcsQ0FBQ0csVUFBVTtnQkFDaEM7WUFDSjtZQUVBSCxrQkFBa0IsR0FBRyxDQUFDRztZQUV0QixJQUFNTSxRQUFRUCxpQkFBaUJDLFNBQVNlLFNBQUFBO3VCQUFTQSxrQkFBQUEsNEJBQUFBLE1BQU8sTUFBTTs7WUFDOUQsSUFBSSxDQUFDVCxPQUFPO1lBRVosSUFBTVUsY0FBY1YsTUFBTSxhQUFhLENBQUMsTUFBTSxDQUFDLGlCQUFpQjtZQUNoRSxJQUFJLENBQUNVLGFBQWE7WUFFbEIsSUFBTUMsU0FBU1AsU0FBUyxhQUFhLENBQUM7WUFDdENPLE9BQU8sV0FBVyxHQUFHO1lBQ3JCQSxPQUFPLE9BQU8sR0FBR04sU0FBQUE7Z0JBQ2JBLEVBQUUsZUFBZTtnQkFDakJBLEVBQUUsY0FBYztnQkFFaEJELFNBQVMsUUFBUSxDQUFDLElBQUksR0FBR007WUFDN0I7WUFFQSxJQUFJLENBQUNGLFNBQVM7WUFFZEEsUUFBUSxNQUFNLENBQUNHO1FBQ25CO1FBekJBLFFBQUtKLFlBQThCSixnQ0FBOUJJLFNBQUFBLDZCQUFBQSxRQUFBQSx5QkFBQUE7O1FBQUFBO1FBQUFBOzs7aUJBQUFBLDZCQUFBQTtnQkFBQUE7OztnQkFBQUE7c0JBQUFBOzs7O0FBMEJULEdBQUcifQ==