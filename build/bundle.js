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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nvar _a;\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst quiz_1 = __webpack_require__(/*! ./quiz */ \"./src/quiz.ts\");\r\nconst main = document.querySelector(\"main\");\r\nconst appTitle = (_a = document.querySelector(\"h1\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", showQuizzes);\r\nlet quizStorage = [];\r\n//render quizzes\r\nshowQuizzes();\r\n//Shows quizzes to play on main page\r\nfunction showQuizzes() {\r\n    var _a;\r\n    main.innerHTML = `<button class=\"rounded fade-in\" id=\"add\">+</button>`;\r\n    const button = (_a = document\r\n        .querySelector(\"#add\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", addQuiz);\r\n}\r\n//Add quiz to storage trough quiz creator\r\nfunction addQuiz() {\r\n    var _a;\r\n    //Enter title of quiz\r\n    main.innerHTML = `\r\n    <form class=\"fade-in\">\r\n        <label for=\"title\">Title:</label>\r\n        <input type=\"text\" id=\"title\" name=\"title\" required>\r\n        <input type=\"submit\">\r\n    </form>`;\r\n    //After submit title is equal to typed title\r\n    const submit = (_a = document\r\n        .querySelector(\"input[type='submit']\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\r\n        const title = document.querySelector(\"#title\").value;\r\n        quizCreator(title);\r\n    });\r\n    //Enter settings\r\n    //Enter question\r\n}\r\nfunction quizCreator(title) {\r\n    var _a;\r\n    let quiz = new quiz_1.Quiz(title);\r\n    main.innerHTML = `\r\n    <form class=\"fade-in\">\r\n    <fieldset>\r\n      <legend>Settings</legend>\r\n      <input type=\"checkbox\" id=\"option1\" name=\"option\" />\r\n      <label for=\"option1\">Negative points</label>\r\n      <br />\r\n      <input type=\"number\" id=\"option2\" name=\"option\" min=\"0\" max=\"600\" value=0 />\r\n      <label for=\"option2\">Time limit in s(0=unlimited)</label>\r\n      <br />\r\n      <input type=\"checkbox\" id=\"option3\" name=\"option\"  />\r\n      <label for=\"option3\">Randomise questions</label>\r\n      <br />\r\n      <input type=\"checkbox\" id=\"option4\" name=\"option\"  />\r\n      <label for=\"option4\">Randomise answers</label>\r\n      <br />\r\n      <input type=\"checkbox\" id=\"option5\" name=\"option\"  />\r\n      <label for=\"option5\">Disable previous questions</label>\r\n      <input type=\"submit\">\r\n    </fieldset>\r\n    </form>\r\n    `;\r\n    const submit = (_a = document\r\n        .querySelector(\"input[type='submit']\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => { });\r\n    return quiz;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/quiz.ts":
/*!*********************!*\
  !*** ./src/quiz.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Quiz = void 0;\r\nclass Quiz {\r\n    constructor(_title) {\r\n        this._title = _title;\r\n        this._rank = [];\r\n        this.questionStorage = [];\r\n    }\r\n    get rank() {\r\n        return this._rank;\r\n    }\r\n    set rank(value) {\r\n        this._rank.push(...value);\r\n        this._rank.sort();\r\n    }\r\n    addQuestion(type) {\r\n    }\r\n}\r\nexports.Quiz = Quiz;\r\n\n\n//# sourceURL=webpack:///./src/quiz.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;