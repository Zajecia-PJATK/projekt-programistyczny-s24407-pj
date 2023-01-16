/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/question.ts":
/*!*************************!*\
  !*** ./src/question.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Question = void 0;\r\nclass Question {\r\n    constructor(question, type, answers) {\r\n        this.type = type;\r\n        this.question = question;\r\n        this.answers = answers;\r\n    }\r\n}\r\nexports.Question = Question;\r\n\n\n//# sourceURL=webpack:///./src/question.ts?");

/***/ }),

/***/ "./src/quiz.ts":
/*!*********************!*\
  !*** ./src/quiz.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst question_1 = __webpack_require__(/*! ./question */ \"./src/question.ts\");\r\nclass Quiz {\r\n    constructor(_title) {\r\n        this._title = _title;\r\n        this._rank = [];\r\n        console.log(\"Hi\");\r\n    }\r\n    get rank() {\r\n        return this._rank;\r\n    }\r\n    set rank(value) {\r\n        this._rank.push(...value);\r\n        this._rank.sort();\r\n    }\r\n}\r\nconst button = (_a = document.getElementById('add')) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", addQuiz);\r\nconst main = document.getElementById('main');\r\nfunction addQuiz() {\r\n    main.innerHTML = 'sdda';\r\n    //Enter title of quiz\r\n    const quiz = new Quiz(\"Football\");\r\n    //Enter settings\r\n    //Enter question\r\n    const question = new question_1.Question('Who won World cup 2022?', 1 /* Type.ONE */, [\r\n        ['France!', true],\r\n        ['Argentina', false],\r\n        ['Poland', false],\r\n        ['Germany', false]\r\n    ]);\r\n    console.log(question);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/quiz.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/quiz.ts");
/******/ 	
/******/ })()
;