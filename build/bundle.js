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

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.main = void 0;\r\nconst quizCreator_1 = __webpack_require__(/*! ./quizCreator */ \"./src/quizCreator.ts\");\r\nexports.main = document.querySelector(\"main\");\r\nlet quizStorage = [];\r\n//render quizzes\r\nshowQuizzes();\r\n//Shows quizzes to play on main page from quizStorage + add button\r\nfunction showQuizzes() {\r\n    var _a, _b;\r\n    exports.main.innerHTML = `<button class=\"rounded fade-in\" id=\"add\">+</button>`;\r\n    (_a = document.querySelector(\"h1\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", showQuizzes);\r\n    (_b = document.querySelector(\"#add\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", quizCreator_1.quizCreator);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

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
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Quiz = void 0;\r\nclass Quiz {\r\n    constructor(_title, settings) {\r\n        this.settings = {\r\n            negativePoints: false,\r\n            time: 0,\r\n            randomQuestions: false,\r\n            randomAnswers: false,\r\n            prevQuestion: false\r\n        };\r\n        this._title = _title;\r\n        this._rank = [];\r\n        this.questionStorage = [];\r\n        this.settings.negativePoints = settings.negativePoints;\r\n        this.settings.prevQuestion = settings.prevQuestion;\r\n        this.settings.randomAnswers = settings.randomAnswers;\r\n        this.settings.randomQuestions = settings.randomQuestions;\r\n        this.settings.time = settings.time;\r\n    }\r\n    get rank() {\r\n        return this._rank;\r\n    }\r\n    set rank(value) {\r\n        this._rank.push(...value);\r\n        this._rank.sort();\r\n    }\r\n    addQuestion(question) {\r\n        this.questionStorage.push(question);\r\n    }\r\n}\r\nexports.Quiz = Quiz;\r\n\n\n//# sourceURL=webpack:///./src/quiz.ts?");

/***/ }),

/***/ "./src/quizCreator.ts":
/*!****************************!*\
  !*** ./src/quizCreator.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.quizCreator = void 0;\r\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\r\nconst question_1 = __webpack_require__(/*! ./question */ \"./src/question.ts\");\r\nconst quiz_1 = __webpack_require__(/*! ./quiz */ \"./src/quiz.ts\");\r\nfunction quizCreator() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        //create new quiz\r\n        let quiz = new quiz_1.Quiz(yield askForTitle(), yield askForSettings());\r\n        yield addQuestion(quiz);\r\n        app_1.main.innerHTML =\r\n            `<p>Do you want to add question?</p>\r\n  <button id=\"end\">End</button>\r\n  <button id=\"oneMore\">One more</button>\r\n  `;\r\n        while (true) {\r\n        }\r\n    });\r\n}\r\nexports.quizCreator = quizCreator;\r\nfunction askForTitle() {\r\n    return new Promise((resolve, reject) => {\r\n        //Enter title of quiz\r\n        app_1.main.innerHTML = `<form class=\"fade-in\">\r\n          <label for=\"title\">Title:</label>\r\n          <input type=\"text\" id=\"title\" name=\"title\" required>\r\n          <input type=\"submit\">\r\n      </form>`;\r\n        //After submit title is equal to typed title\r\n        const form = document.querySelector(\"form\");\r\n        form.addEventListener(\"submit\", (event) => {\r\n            event.preventDefault();\r\n            const title = document.querySelector(\"#title\").value;\r\n            if (!title) {\r\n                reject(\"Title is required.\");\r\n            }\r\n            else {\r\n                resolve(title);\r\n            }\r\n        });\r\n    });\r\n}\r\nfunction askForSettings() {\r\n    return new Promise((resolve, reject) => {\r\n        var _a;\r\n        //Quiz settings\r\n        app_1.main.innerHTML = `\r\n        <form class=\"fade-in\">\r\n        <fieldset>\r\n            <legend>Settings</legend>\r\n            <input type=\"checkbox\" id=\"option1\" name=\"option\" />\r\n            <label for=\"option1\">Negative points</label>\r\n            <br />\r\n            <input type=\"number\" id=\"option2\" name=\"option\" min=\"0\" max=\"600\" value=0 />\r\n            <label for=\"option2\">Time limit in s(0=unlimited)</label>\r\n            <br />\r\n            <input type=\"checkbox\" id=\"option3\" name=\"option\"  />\r\n            <label for=\"option3\">Randomise questions</label>\r\n            <br />\r\n            <input type=\"checkbox\" id=\"option4\" name=\"option\"  />\r\n            <label for=\"option4\">Randomise answers</label>\r\n            <br />\r\n            <input type=\"checkbox\" id=\"option5\" name=\"option\"  />\r\n            <label for=\"option5\">Disable previous questions</label>\r\n            <input type=\"submit\">\r\n        </fieldset>\r\n        </form>\r\n        `;\r\n        //set settings\r\n        const submit = (_a = document\r\n            .querySelector(\"input[type='submit']\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\r\n            var _a, _b, _c, _d;\r\n            return {\r\n                negativePoints: (_a = document.querySelector(\"#option1\")) === null || _a === void 0 ? void 0 : _a.checked,\r\n                time: +document.querySelector(\"#option2\").value,\r\n                randomQuestions: (_b = document.querySelector(\"#option3\")) === null || _b === void 0 ? void 0 : _b.checked,\r\n                randomAnswers: (_c = document.querySelector(\"#option4\")) === null || _c === void 0 ? void 0 : _c.checked,\r\n                prevQuestion: (_d = document.querySelector(\"#option5\")) === null || _d === void 0 ? void 0 : _d.checked,\r\n            };\r\n        });\r\n    });\r\n}\r\nfunction addQuestion(quiz) {\r\n    return new Promise((resolve, reject) => {\r\n        app_1.main.innerHTML = `<form class=\"fade-in\" id=\"question-type\">\r\n    <fieldset>\r\n      <legend>Create question</legend>\r\n      <label for=\"type\">Type of question</label>\r\n      <select id=\"type\" name type>\r\n        <option value=\"One true\">One true</option>\r\n        <option value=\"Many true\">Many true</option>\r\n        <option value=\"Short answer\">Short answer</option>\r\n        <option value=\"True/false\">True/false</option>\r\n        <option value=\"Fill the word\">Fill the word</option>\r\n        <option value=\"Choose from list\">Choose from list</option>\r\n        <option value=\"Match\">Match</option>\r\n        <option value=\"Sort\">Sort</option>\r\n      </select><br>        \r\n    </fieldset>\r\n  </form>`;\r\n        let select = document.querySelector(\"#type\");\r\n        select.addEventListener(\"change\", () => {\r\n            switch (select.value) {\r\n                case \"One true\":\r\n                    select.innerHTML +=\r\n                        '<label></label><input type=\"text\">';\r\n                    const question = \"?\";\r\n                    const answers = [\r\n                        [\"1\", true],\r\n                        [\"2\", false],\r\n                        [\"3\", false],\r\n                        [\"4\", false],\r\n                    ];\r\n                    resolve(new question_1.Question(question, 1 /* Type.ONE */, answers));\r\n                case \"Many true\":\r\n                case \"Short answer\":\r\n                case \"True/false\":\r\n                case \"Fill the word\":\r\n                case \"Choose from list\":\r\n                case \"Match\":\r\n                case \"Sort\":\r\n                default:\r\n                    console.log(\"No such option in type select\");\r\n            }\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/quizCreator.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;