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

/***/ "./src/addQuestion.ts":
/*!****************************!*\
  !*** ./src/addQuestion.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.addQuestion = void 0;\r\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\r\nconst question_1 = __webpack_require__(/*! ./question */ \"./src/question.ts\");\r\nfunction addQuestion(quiz) {\r\n    return new Promise((resolve, reject) => {\r\n        //remove all child elements of main\r\n        while (app_1.main.firstChild) {\r\n            app_1.main.removeChild(app_1.main.firstChild);\r\n        }\r\n        //create a <form> element\r\n        let form = document.createElement(\"form\");\r\n        form.setAttribute(\"class\", \"fade-in\");\r\n        form.setAttribute(\"id\", \"question-type\");\r\n        //create a <fieldset> element\r\n        let fieldset = document.createElement(\"fieldset\");\r\n        //create a <legend> element\r\n        let legend = document.createElement(\"legend\");\r\n        legend.textContent = \"Create question\";\r\n        //create a <label> element for question type\r\n        let label = document.createElement(\"label\");\r\n        label.setAttribute(\"for\", \"type\");\r\n        label.textContent = \"Type of question\";\r\n        //create a <select> element for question type\r\n        let select = document.createElement(\"select\");\r\n        select.setAttribute(\"id\", \"type\");\r\n        select.setAttribute(\"name\", \"type\");\r\n        //create the options for the select element\r\n        let option1 = document.createElement(\"option\");\r\n        option1.setAttribute(\"value\", \"One true\");\r\n        option1.textContent = \"One true\";\r\n        let option2 = document.createElement(\"option\");\r\n        option2.setAttribute(\"value\", \"Many true\");\r\n        option2.textContent = \"Many true\";\r\n        let option3 = document.createElement(\"option\");\r\n        option3.setAttribute(\"value\", \"Short answer\");\r\n        option3.textContent = \"Short answer\";\r\n        let option4 = document.createElement(\"option\");\r\n        option4.setAttribute(\"value\", \"True/false\");\r\n        option4.textContent = \"True/false\";\r\n        let option5 = document.createElement(\"option\");\r\n        option5.setAttribute(\"value\", \"Fill the word\");\r\n        option5.textContent = \"Fill the word\";\r\n        let option6 = document.createElement(\"option\");\r\n        option6.setAttribute(\"value\", \"Choose from list\");\r\n        option6.textContent = \"Choose from list\";\r\n        let option7 = document.createElement(\"option\");\r\n        option7.setAttribute(\"value\", \"Match\");\r\n        option7.textContent = \"Match\";\r\n        let option8 = document.createElement(\"option\");\r\n        option8.setAttribute(\"value\", \"Sort\");\r\n        option8.textContent = \"Sort\";\r\n        select.appendChild(option1);\r\n        select.appendChild(option2);\r\n        select.appendChild(option3);\r\n        select.appendChild(option4);\r\n        select.appendChild(option5);\r\n        select.appendChild(option6);\r\n        select.appendChild(option7);\r\n        select.appendChild(option8);\r\n        //append the elements to the fieldset\r\n        fieldset.appendChild(legend);\r\n        fieldset.appendChild(label);\r\n        fieldset.appendChild(select);\r\n        fieldset.appendChild(document.createElement(\"br\"));\r\n        //append the fieldset to the form\r\n        form.appendChild(fieldset);\r\n        //append the form to the main element\r\n        app_1.main.appendChild(form);\r\n        //ask to fill question variables\r\n        select = document.querySelector(\"#type\");\r\n        select.addEventListener(\"change\", () => {\r\n            switch (select.value) {\r\n                case \"One true\":\r\n                    //create a <label> element\r\n                    let newLabel = document.createElement(\"label\");\r\n                    //create a <input> element\r\n                    let newInput = document.createElement(\"input\");\r\n                    newInput.setAttribute(\"type\", \"text\");\r\n                    //append the newLabel and newInput elements to the select element\r\n                    select.appendChild(newLabel);\r\n                    select.appendChild(newInput);\r\n                    const question = \"?\";\r\n                    const answers = [\r\n                        [\"1\", true],\r\n                        [\"2\", false],\r\n                        [\"3\", false],\r\n                        [\"4\", false],\r\n                    ];\r\n                    resolve(new question_1.Question(question, 1 /* Type.ONE */, answers));\r\n                case \"Many true\":\r\n                case \"Short answer\":\r\n                case \"True/false\":\r\n                case \"Fill the word\":\r\n                case \"Choose from list\":\r\n                case \"Match\":\r\n                case \"Sort\":\r\n                default:\r\n                    reject(console.log(\"No such type\"));\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.addQuestion = addQuestion;\r\n\n\n//# sourceURL=webpack:///./src/addQuestion.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.main = void 0;\r\nconst quizCreator_1 = __webpack_require__(/*! ./quizCreator */ \"./src/quizCreator.ts\");\r\nexports.main = document.querySelector(\"main\");\r\nlet quizStorage = [];\r\n//render quizzes\r\nshowQuizzes();\r\n//Shows quizzes to play on main page from quizStorage + add button\r\nfunction showQuizzes() {\r\n    var _a, _b;\r\n    //remove all child elements of main\r\n    while (exports.main.firstChild) {\r\n        exports.main.removeChild(exports.main.firstChild);\r\n    }\r\n    //create a <button> element\r\n    let button = document.createElement(\"button\");\r\n    //add class and id to button\r\n    button.setAttribute(\"class\", \"rounded fade-in\");\r\n    button.setAttribute(\"id\", \"add\");\r\n    //add text to the button\r\n    button.textContent = \"+\";\r\n    //append the button to the main element\r\n    exports.main.appendChild(button);\r\n    (_a = document.querySelector(\"h1\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", showQuizzes);\r\n    (_b = document.querySelector(\"#add\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", quizCreator_1.quizCreator);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/askForSettings.ts":
/*!*******************************!*\
  !*** ./src/askForSettings.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.askForSettings = void 0;\r\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\r\nfunction askForSettings() {\r\n    return new Promise((resolve, reject) => {\r\n        var _a;\r\n        //Quiz settings\r\n        //remove all child elements of main\r\n        while (app_1.main.firstChild) {\r\n            app_1.main.removeChild(app_1.main.firstChild);\r\n        }\r\n        //create a <form> element\r\n        let form = document.createElement(\"form\");\r\n        form.setAttribute(\"class\", \"fade-in\");\r\n        //create a <fieldset> element\r\n        let fieldset = document.createElement(\"fieldset\");\r\n        //create a <legend> element\r\n        let legend = document.createElement(\"legend\");\r\n        legend.textContent = \"Settings\";\r\n        //create input element for negative points\r\n        let option1 = document.createElement(\"input\");\r\n        option1.setAttribute(\"type\", \"checkbox\");\r\n        option1.setAttribute(\"id\", \"option1\");\r\n        option1.setAttribute(\"name\", \"option\");\r\n        //create a label for negative points\r\n        let labelOption1 = document.createElement(\"label\");\r\n        labelOption1.setAttribute(\"for\", \"option1\");\r\n        labelOption1.textContent = \"Negative points\";\r\n        //create input element for time limit\r\n        let option2 = document.createElement(\"input\");\r\n        option2.setAttribute(\"type\", \"number\");\r\n        option2.setAttribute(\"id\", \"option2\");\r\n        option2.setAttribute(\"name\", \"option\");\r\n        option2.setAttribute(\"min\", \"0\");\r\n        option2.setAttribute(\"max\", \"600\");\r\n        option2.setAttribute(\"value\", \"0\");\r\n        //create a label for time limit\r\n        let labelOption2 = document.createElement(\"label\");\r\n        labelOption2.setAttribute(\"for\", \"option2\");\r\n        labelOption2.textContent = \"Time limit in s(0=unlimited)\";\r\n        //create input element for randomise questions\r\n        let option3 = document.createElement(\"input\");\r\n        option3.setAttribute(\"type\", \"checkbox\");\r\n        option3.setAttribute(\"id\", \"option3\");\r\n        option3.setAttribute(\"name\", \"option\");\r\n        //create a label for randomise questions\r\n        let labelOption3 = document.createElement(\"label\");\r\n        labelOption3.setAttribute(\"for\", \"option3\");\r\n        labelOption3.textContent = \"Randomise questions\";\r\n        //create input element for randomise answers\r\n        let option4 = document.createElement(\"input\");\r\n        option4.setAttribute(\"type\", \"checkbox\");\r\n        option4.setAttribute(\"id\", \"option4\");\r\n        option4.setAttribute(\"name\", \"option\");\r\n        //create a label for randomise answers\r\n        let labelOption4 = document.createElement(\"label\");\r\n        labelOption4.setAttribute(\"for\", \"option4\");\r\n        labelOption4.textContent = \"Randomise answers\";\r\n        //create input element for disable previous questions\r\n        let option5 = document.createElement(\"input\");\r\n        option5.setAttribute(\"type\", \"checkbox\");\r\n        option5.setAttribute(\"id\", \"option5\");\r\n        option5.setAttribute(\"name\", \"option\");\r\n        //create a label for disable previous questions\r\n        let labelOption5 = document.createElement(\"label\");\r\n        labelOption5.setAttribute(\"for\", \"option5\");\r\n        labelOption5.textContent = \"Disable previous questions\";\r\n        //create a submit input element\r\n        let submitInput = document.createElement(\"input\");\r\n        submitInput.setAttribute(\"type\", \"submit\");\r\n        //append the elements to the fieldset\r\n        fieldset.appendChild(legend);\r\n        fieldset.appendChild(option1);\r\n        fieldset.appendChild(labelOption1);\r\n        fieldset.appendChild(document.createElement(\"br\"));\r\n        fieldset.appendChild(option2);\r\n        fieldset.appendChild(labelOption2);\r\n        fieldset.appendChild(document.createElement(\"br\"));\r\n        fieldset.appendChild(option3);\r\n        fieldset.appendChild(labelOption3);\r\n        fieldset.appendChild(document.createElement(\"br\"));\r\n        fieldset.appendChild(option4);\r\n        fieldset.appendChild(labelOption4);\r\n        fieldset.appendChild(document.createElement(\"br\"));\r\n        fieldset.appendChild(option5);\r\n        fieldset.appendChild(labelOption5);\r\n        fieldset.appendChild(submitInput);\r\n        //append the fieldset to the form\r\n        form.appendChild(fieldset);\r\n        //append the form to the main element\r\n        app_1.main.appendChild(form);\r\n        //set settings\r\n        const submit = (_a = document\r\n            .querySelector(\"input[type='submit']\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\r\n            var _a, _b, _c, _d;\r\n            return {\r\n                negativePoints: (_a = document.querySelector(\"#option1\")) === null || _a === void 0 ? void 0 : _a.checked,\r\n                time: +document.querySelector(\"#option2\").value,\r\n                randomQuestions: (_b = document.querySelector(\"#option3\")) === null || _b === void 0 ? void 0 : _b.checked,\r\n                randomAnswers: (_c = document.querySelector(\"#option4\")) === null || _c === void 0 ? void 0 : _c.checked,\r\n                prevQuestion: (_d = document.querySelector(\"#option5\")) === null || _d === void 0 ? void 0 : _d.checked,\r\n            };\r\n        });\r\n    });\r\n}\r\nexports.askForSettings = askForSettings;\r\n\n\n//# sourceURL=webpack:///./src/askForSettings.ts?");

/***/ }),

/***/ "./src/askForTitle.ts":
/*!****************************!*\
  !*** ./src/askForTitle.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.askForTitle = void 0;\r\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\r\nfunction askForTitle() {\r\n    return new Promise((resolve, reject) => {\r\n        //remove all child elements of main\r\n        while (app_1.main.firstChild) {\r\n            app_1.main.removeChild(app_1.main.firstChild);\r\n        }\r\n        //Enter title of quiz\r\n        //create a <form> element\r\n        let form = document.createElement(\"form\");\r\n        form.setAttribute(\"class\", \"fade-in\");\r\n        //create a <label> element\r\n        let label = document.createElement(\"label\");\r\n        label.setAttribute(\"for\", \"title\");\r\n        label.textContent = \"Title:\";\r\n        //create an <input> element for the title\r\n        let titleInput = document.createElement(\"input\");\r\n        titleInput.setAttribute(\"type\", \"text\");\r\n        titleInput.setAttribute(\"id\", \"title\");\r\n        titleInput.setAttribute(\"name\", \"title\");\r\n        titleInput.setAttribute(\"required\", \"\");\r\n        //create a submit <input> element\r\n        let submitInput = document.createElement(\"input\");\r\n        submitInput.setAttribute(\"type\", \"submit\");\r\n        //append the elements to the form\r\n        form.appendChild(label);\r\n        form.appendChild(titleInput);\r\n        form.appendChild(submitInput);\r\n        //append the form to the main element\r\n        app_1.main.appendChild(form);\r\n        //After submit title is equal to typed title\r\n        form = document.querySelector(\"form\");\r\n        form.addEventListener(\"submit\", (event) => {\r\n            event.preventDefault();\r\n            const title = document.querySelector(\"#title\").value;\r\n            if (!title) {\r\n                reject(\"Title is required.\");\r\n            }\r\n            else {\r\n                resolve(title);\r\n            }\r\n        });\r\n    });\r\n}\r\nexports.askForTitle = askForTitle;\r\n\n\n//# sourceURL=webpack:///./src/askForTitle.ts?");

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

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.quizCreator = void 0;\r\nconst addQuestion_1 = __webpack_require__(/*! ./addQuestion */ \"./src/addQuestion.ts\");\r\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/app.ts\");\r\nconst askForSettings_1 = __webpack_require__(/*! ./askForSettings */ \"./src/askForSettings.ts\");\r\nconst askForTitle_1 = __webpack_require__(/*! ./askForTitle */ \"./src/askForTitle.ts\");\r\nconst quiz_1 = __webpack_require__(/*! ./quiz */ \"./src/quiz.ts\");\r\nfunction quizCreator() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        //create new quiz\r\n        let quiz = new quiz_1.Quiz(yield (0, askForTitle_1.askForTitle)(), yield (0, askForSettings_1.askForSettings)());\r\n        yield (0, addQuestion_1.addQuestion)(quiz);\r\n        //create a <p> element\r\n        let p = document.createElement(\"p\");\r\n        p.textContent = \"Do you want to add question?\";\r\n        //create a button for ending the quiz\r\n        let endButton = document.createElement(\"button\");\r\n        endButton.setAttribute(\"id\", \"end\");\r\n        endButton.textContent = \"End\";\r\n        //create a button for adding one more question\r\n        let oneMoreButton = document.createElement(\"button\");\r\n        oneMoreButton.setAttribute(\"id\", \"oneMore\");\r\n        oneMoreButton.textContent = \"One more\";\r\n        //append the elements to main\r\n        app_1.main.appendChild(p);\r\n        app_1.main.appendChild(endButton);\r\n        app_1.main.appendChild(oneMoreButton);\r\n        while (true) { }\r\n    });\r\n}\r\nexports.quizCreator = quizCreator;\r\n\n\n//# sourceURL=webpack:///./src/quizCreator.ts?");

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