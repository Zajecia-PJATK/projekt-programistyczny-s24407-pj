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
/***/ (() => {

eval("\r\nconst main = document.querySelector(\"main\");\r\nconst form = document.querySelector(\"form\");\r\nlet rank;\r\nconst board = `<div id=\"board\">\r\n    <button id=\"first\" class=\"tile\"></button>\r\n    <button id=\"second\" class=\"tile\"></button>\r\n    <button id=\"third\" class=\"tile\"></button>\r\n    <button id=\"fourth\" class=\"tile\"></button>\r\n    <button id=\"fifth\" class=\"tile\"></button>\r\n    <button id=\"sixth\" class=\"tile\"></button>\r\n    <button id=\"seventh\" class=\"tile\"></button>\r\n    <button id=\"eighth\" class=\"tile\"></button>\r\n    <button id=\"nineth\" class=\"tile\"></button>\r\n</div>`;\r\nform.addEventListener(\"submit\", () => {\r\n    const inputFirst = document.querySelector(\"#first-player\");\r\n    const inputSecond = (document.querySelector(\"#second-player\"));\r\n    const firstPlayer = inputFirst.value;\r\n    const secondPlayer = inputSecond.value;\r\n    console.log(\"Names added\");\r\n    startGame(firstPlayer, secondPlayer);\r\n});\r\nfunction startGame(firstPlayer, secondPlayer) {\r\n    // 1-X, 2-O\r\n    let currentPlayer = \"X\";\r\n    //clearing main\r\n    main.innerHTML = \"\";\r\n    //add board to main\r\n    main.innerHTML = board;\r\n    const tiles = document.querySelectorAll(\".tile\");\r\n    tiles.forEach((tile) => {\r\n        tile.addEventListener(\"click\", () => {\r\n            tile.setAttribute(\"disabled\", \"\");\r\n            tile.textContent = currentPlayer;\r\n            if (currentPlayer == \"X\") {\r\n                currentPlayer = \"O\";\r\n            }\r\n            else {\r\n                currentPlayer = \"X\";\r\n            }\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;