"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./src/components/ProductCard/ProductCard.tsx":
/*!****************************************************!*\
  !*** ./src/components/ProductCard/ProductCard.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductCard\": function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProductCard = (param)=>{\n    let { title , image__original  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/products/\".concat(title),\n        className: \"backdrop-opacity-10 backdrop-invert bg-neutral-900 shadow rounded-md w-44 h-60 m-4 flex flex-col justify-around\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: image__original,\n                    alt: title,\n                    width: 150,\n                    height: 150\n                }, void 0, false, {\n                    fileName: \"/Users/mauriciopauluk/Documents/projects/hunterlife/src/components/ProductCard/ProductCard.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mauriciopauluk/Documents/projects/hunterlife/src/components/ProductCard/ProductCard.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"flex justify-center font-FuturaMed text-neutral-900\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/mauriciopauluk/Documents/projects/hunterlife/src/components/ProductCard/ProductCard.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mauriciopauluk/Documents/projects/hunterlife/src/components/ProductCard/ProductCard.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProductCard;\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ0Y7QUFDdEIsTUFBTUUsY0FBYyxTQUFvQztRQUFuQyxFQUFFQyxNQUFLLEVBQUVDLGdCQUFlLEVBQU07SUFDeEQscUJBQ0UsOERBQUNILGtEQUFJQTtRQUNISSxNQUFNLGFBQW1CLE9BQU5GO1FBQ25CRyxXQUFVOzswQkFFViw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNOLG1EQUFLQTtvQkFBQ1EsS0FBS0o7b0JBQWlCSyxLQUFLTjtvQkFBT08sT0FBTztvQkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7MEJBRS9ELDhEQUFDQztnQkFBRU4sV0FBVTswQkFBdURIOzs7Ozs7Ozs7Ozs7QUFHMUUsRUFBQztLQVpZRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC50c3g/NjA0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmV4cG9ydCBjb25zdCBQcm9kdWN0Q2FyZCA9ICh7IHRpdGxlLCBpbWFnZV9fb3JpZ2luYWx9OiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayBcbiAgICAgIGhyZWY9e2AvcHJvZHVjdHMvJHt0aXRsZX1gfSBcbiAgICAgIGNsYXNzTmFtZT1cImJhY2tkcm9wLW9wYWNpdHktMTAgYmFja2Ryb3AtaW52ZXJ0IGJnLW5ldXRyYWwtOTAwIHNoYWRvdyByb3VuZGVkLW1kIHctNDQgaC02MCBtLTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWFyb3VuZFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlX19vcmlnaW5hbH0gYWx0PXt0aXRsZX0gd2lkdGg9ezE1MH0gaGVpZ2h0PXsxNTB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZm9udC1GdXR1cmFNZWQgdGV4dC1uZXV0cmFsLTkwMFwiPnt0aXRsZX08L3A+XG4gICAgPC9MaW5rPlxuICApXG59Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIlByb2R1Y3RDYXJkIiwidGl0bGUiLCJpbWFnZV9fb3JpZ2luYWwiLCJocmVmIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductCard/ProductCard.tsx\n"));

/***/ })

});