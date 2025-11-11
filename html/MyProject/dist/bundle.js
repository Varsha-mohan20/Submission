/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/math.js":
/*!*****************************!*\
  !*** ./src/modules/math.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PI: () => (/* binding */ PI),
/* harmony export */   add: () => (/* binding */ add)
/* harmony export */ });
// export function add(a,b){
//     return a+b;
// }
// export const PI = 3.14159;
function add(a, b) {
    return a + b;
}
const PI = 3.14159;
// // Function: Reverse an array using recursion
// export function reverse<T>([x, ...y]: T[]): T[] {
//   return y.length > 0 ? [...reverse(y), x] : [x];
// }
// console.log(reverse([1, 2, 3, 4, 5, 6]));
// // Destructuring example
// const [, , ...y]: number[] = [1, 2, 3, 4, 5];
// console.log(y);
// // Generator function: yields squares
// export function* squares(n: number): Generator<number> {
//   for (let i = 1; i < n; i++) {
//     yield Math.pow(i, 2);
//   }
// }
// console.log([...squares(6)]);
// console.log("Int: ", [...squares(5)]);
//# sourceMappingURL=math.js.map

/***/ }),

/***/ "./src/modules/string.js":
/*!*******************************!*\
  !*** ./src/modules/string.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalize: () => (/* binding */ capitalize)
/* harmony export */ });
// export function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
//# sourceMappingURL=string.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/math.js */ "./src/modules/math.js");
/* harmony import */ var _modules_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/string.js */ "./src/modules/string.js");


console.log(`Sum: ${(0,_modules_math_js__WEBPACK_IMPORTED_MODULE_0__.add)(2, 3)}`);
console.log(`PI: ${_modules_math_js__WEBPACK_IMPORTED_MODULE_0__.PI}`);
console.log(`Capatilized word: ${(0,_modules_string_js__WEBPACK_IMPORTED_MODULE_1__.capitalize)('hello Varsha')}`);
//# sourceMappingURL=index.js.map
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map