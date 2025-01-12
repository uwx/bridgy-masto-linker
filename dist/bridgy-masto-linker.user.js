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
function addStyle(aCss) {
    var _document_head;
    var head = (_document_head = document.head) !== null && _document_head !== void 0 ? _document_head : document.getElementsByTagName('head')[0];
    if (head) {
        var style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.textContent = aCss;
        head.appendChild(style);
        return style;
    }
    return null;
}
addStyle("\n.maxine-masto-button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    width: 32px;\n    height: 32px;\n    line-height: 32px;\n}\n.maxine-masto-button:hover {\n    background: rgb(20, 27, 35);\n    border-radius: 50%;\n}\n");
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
                var _props_record;
                return (props === null || props === void 0 ? void 0 : (_props_record = props.record) === null || _props_record === void 0 ? void 0 : _props_record.$type) === 'app.bsky.feed.post';
            });
            if (!fiber) return "continue";
            var originalUrl = fiber.memoizedProps.record.bridgyOriginalUrl;
            if (!originalUrl) return "continue";
            var button = document.createElement('button');
            button.textContent = '🌐';
            button.className = 'maxine-masto-button';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpZGd5LW1hc3RvLWxpbmtlci51c2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJpZGd5LW1hc3RvLWxpbmtlci8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdoZWxsbyBtYXN0byBsaW5rZXIgd29ybGQnKTtcblxuY29uc3QgcHJvY2Vzc2VkRWxlbWVudHMgPSBuZXcgV2Vha1NldCgpO1xuXG5mdW5jdGlvbiBmaW5kRmliZXJCeVByb3BzKGVsZW1lbnQ6IEVsZW1lbnQsIGNvbmRpdGlvbjogKHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiBib29sZWFuKTogYW55IHtcbiAgICBjb25zdCBlbEFueSA9IGVsZW1lbnQgYXMgYW55O1xuICAgIGNvbnN0IGZpYmVyS2V5ID0gT2JqZWN0LmtleXMoZWxBbnkpLmZpbmQoayA9PiBrLnN0YXJ0c1dpdGgoJ19fcmVhY3RGaWJlciQnKSkhO1xuICAgIGxldCBmaWJlciA9IGVsQW55W2ZpYmVyS2V5XTtcbiAgICBkbyB7XG4gICAgICAgIGlmIChjb25kaXRpb24oZmliZXIubWVtb2l6ZWRQcm9wcykpIHJldHVybiBmaWJlcjtcbiAgICAgICAgZmliZXIgPSBmaWJlci5yZXR1cm47XG4gICAgfSB3aGlsZSAoZmliZXIpO1xuXG4gICAgY29uc29sZS53YXJuKCdkaWQgbm90IGZpbmQgZmliZXIhJyk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUoYUNzczogc3RyaW5nKSB7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmhlYWQgPz8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICBpZiAoaGVhZCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGFDc3M7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuYWRkU3R5bGUoYFxuLm1heGluZS1tYXN0by1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG4ubWF4aW5lLW1hc3RvLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDIwLCAyNywgMzUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmApO1xuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZXN0aWRePVwicG9zdFRocmVhZEl0ZW0tYnktXCJdJykuX19yZWFjdEZpYmVyJDlvbzE2djVsOXcucmV0dXJuLnJldHVybi5tZW1vaXplZFByb3BzLnJlY29yZC5icmlkZ3lPcmlnaW5hbFVybFxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGVzdGlkPVwiZmVlZEl0ZW0tYnktZmVkaS5lYmx1LnNwYWNlXCJdJykuX19yZWFjdEZpYmVyJGVuNThzeGlhY3U4LnJldHVybi5yZXR1cm4ucmV0dXJuLnJldHVybi5yZXR1cm4ucmV0dXJuLnJldHVybi5tZW1vaXplZFByb3BzLnJlY29yZC5icmlkZ3lPcmlnaW5hbFVybFxuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY29uc3QgbmV3RWxlbWVudHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGVzdGlkXj1cImZlZWRJdGVtLVwiXSwgW2RhdGEtdGVzdGlkXj1cInBvc3RUaHJlYWRJdGVtLVwiXScpXS5tYXAoZSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50OiBlLFxuICAgICAgICAgICAgYnV0dG9uczogZS5xdWVyeVNlbGVjdG9yKCdbYXJpYS1sYWJlbD1cIk9wZW4gcG9zdCBvcHRpb25zIG1lbnVcIl0nKT8ucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCEucGFyZW50RWxlbWVudCxcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGZvciAoY29uc3QgeyBlbGVtZW50LCBidXR0b25zIH0gb2YgbmV3RWxlbWVudHMpIHtcbiAgICAgICAgaWYgKHByb2Nlc3NlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9jZXNzZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgZmliZXIgPSBmaW5kRmliZXJCeVByb3BzKGVsZW1lbnQsIHByb3BzID0+IHByb3BzPy5yZWNvcmQ/LiR0eXBlID09PSAnYXBwLmJza3kuZmVlZC5wb3N0Jyk7XG4gICAgICAgIGlmICghZmliZXIpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVXJsID0gZmliZXIubWVtb2l6ZWRQcm9wcy5yZWNvcmQuYnJpZGd5T3JpZ2luYWxVcmw7XG4gICAgICAgIGlmICghb3JpZ2luYWxVcmwpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAn8J+MkCc7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnbWF4aW5lLW1hc3RvLWJ1dHRvbic7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gb3JpZ2luYWxVcmw7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFidXR0b25zKSBjb250aW51ZTtcblxuICAgICAgICBidXR0b25zLmFwcGVuZChidXR0b24pO1xuICAgIH1cbn0sIDI1MCk7Il0sIm5hbWVzIjpbImNvbnNvbGUiLCJwcm9jZXNzZWRFbGVtZW50cyIsIldlYWtTZXQiLCJmaW5kRmliZXJCeVByb3BzIiwiZWxlbWVudCIsImNvbmRpdGlvbiIsImVsQW55IiwiZmliZXJLZXkiLCJPYmplY3QiLCJrIiwiZmliZXIiLCJ1bmRlZmluZWQiLCJhZGRTdHlsZSIsImFDc3MiLCJfZG9jdW1lbnRfaGVhZCIsImhlYWQiLCJkb2N1bWVudCIsInN0eWxlIiwic2V0SW50ZXJ2YWwiLCJuZXdFbGVtZW50cyIsImUiLCJfZV9xdWVyeVNlbGVjdG9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJidXR0b25zIiwicHJvcHMiLCJfcHJvcHNfcmVjb3JkIiwib3JpZ2luYWxVcmwiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxRQUFRLEdBQUcsQ0FBQztBQUVaLElBQU1DLG9CQUFvQixJQUFJQztBQUU5QixTQUFTQyxpQkFBaUJDLE9BQWdCLEVBQUVDLFNBQWtEO0lBQzFGLElBQU1DLFFBQVFGO0lBQ2QsSUFBTUcsV0FBV0MsT0FBTyxJQUFJLENBQUNGLE9BQU8sSUFBSSxDQUFDRyxTQUFBQTtlQUFLQSxFQUFFLFVBQVUsQ0FBQzs7SUFDM0QsSUFBSUMsUUFBUUosS0FBSyxDQUFDQyxTQUFTO0lBQzNCLEdBQUc7UUFDQyxJQUFJRixVQUFVSyxNQUFNLGFBQWEsR0FBRyxPQUFPQTtRQUMzQ0EsUUFBUUEsTUFBTSxNQUFNO0lBQ3hCLFFBQVNBLE9BQU87SUFFaEJWLFFBQVEsSUFBSSxDQUFDO0lBQ2IsT0FBT1c7QUFDWDtBQUVBLFNBQVNDLFNBQVNDLElBQVk7UUFDYkM7SUFBYixJQUFNQyxPQUFPRCxDQUFBQSxpQkFBQUEsU0FBUyxJQUFJLGNBQWJBLDRCQUFBQSxpQkFBaUJFLFNBQVMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDdEUsSUFBSUQsTUFBTTtRQUNOLElBQU1FLFFBQVFELFNBQVMsYUFBYSxDQUFDO1FBQ3JDQyxNQUFNLFlBQVksQ0FBQyxRQUFRO1FBQzNCQSxNQUFNLFdBQVcsR0FBR0o7UUFDcEJFLEtBQUssV0FBVyxDQUFDRTtRQUNqQixPQUFPQTtJQUNYO0lBQ0EsT0FBTztBQUNYO0FBRUFMLFNBQVU7QUFlViw2SUFBNkk7QUFDN0kseUxBQXlMO0FBRXpMTSxZQUFZO0lBQ1IsSUFBTUMsY0FBZSxxQkFBR0gsU0FBUyxnQkFBZ0IsQ0FBQyxpRUFBaUUsR0FBRyxDQUFDSSxTQUFBQTtZQUd0R0M7UUFGYixPQUFPO1lBQ0gsU0FBU0Q7WUFDVCxPQUFPLEdBQUVDLG1CQUFBQSxFQUFFLGFBQWEsQ0FBQyxzREFBaEJBLHVDQUFBQSxpQkFBMEQsYUFBYSxDQUFFLGFBQWEsQ0FBRSxhQUFhO1FBQ2xIO0lBQ0o7UUFFS0Msa0NBQUFBLDJCQUFBQTs7O1lBQUFBLGtCQUFBQSxhQUFRbEIsc0JBQUFBLFNBQVNtQixzQkFBQUE7WUFDbEIsSUFBSXRCLGtCQUFrQixHQUFHLENBQUNHLFVBQVU7Z0JBQ2hDO1lBQ0o7WUFFQUgsa0JBQWtCLEdBQUcsQ0FBQ0c7WUFFdEIsSUFBTU0sUUFBUVAsaUJBQWlCQyxTQUFTb0IsU0FBQUE7b0JBQVNDO3VCQUFBQSxDQUFBQSxrQkFBQUEsNkJBQUFBLGdCQUFBQSxNQUFPLE1BQU0sY0FBYkEsb0NBQUFBLGNBQWUsS0FBSyxNQUFLOztZQUMxRSxJQUFJLENBQUNmLE9BQU87WUFFWixJQUFNZ0IsY0FBY2hCLE1BQU0sYUFBYSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7WUFDaEUsSUFBSSxDQUFDZ0IsYUFBYTtZQUVsQixJQUFNQyxTQUFTWCxTQUFTLGFBQWEsQ0FBQztZQUN0Q1csT0FBTyxXQUFXLEdBQUc7WUFDckJBLE9BQU8sU0FBUyxHQUFHO1lBQ25CQSxPQUFPLE9BQU8sR0FBR1AsU0FBQUE7Z0JBQ2JBLEVBQUUsZUFBZTtnQkFDakJBLEVBQUUsY0FBYztnQkFFaEJKLFNBQVMsUUFBUSxDQUFDLElBQUksR0FBR1U7WUFDN0I7WUFFQSxJQUFJLENBQUNILFNBQVM7WUFFZEEsUUFBUSxNQUFNLENBQUNJO1FBQ25CO1FBMUJBLFFBQUtMLFlBQThCSCxnQ0FBOUJHLFNBQUFBLDZCQUFBQSxRQUFBQSx5QkFBQUE7O1FBQUFBO1FBQUFBOzs7aUJBQUFBLDZCQUFBQTtnQkFBQUE7OztnQkFBQUE7c0JBQUFBOzs7O0FBMkJULEdBQUcifQ==