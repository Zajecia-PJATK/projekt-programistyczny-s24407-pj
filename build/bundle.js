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
/***/ (function() {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nconst main = document.querySelector(\"main\");\r\nconst form = document.querySelector(\"form\");\r\n// const title: HTMLHeadingElement = document.querySelector(\"h1\")!;\r\n// title.addEventListener(\"click\",askForNames);\r\nlet rank;\r\nconst board = `<div id=\"board\">\r\n    <button id=\"first\" class=\"tile\"></button>\r\n    <button id=\"second\" class=\"tile\"></button>\r\n    <button id=\"third\" class=\"tile\"></button>\r\n    <button id=\"fourth\" class=\"tile\"></button>\r\n    <button id=\"fifth\" class=\"tile\"></button>\r\n    <button id=\"sixth\" class=\"tile\"></button>\r\n    <button id=\"seventh\" class=\"tile\"></button>\r\n    <button id=\"eighth\" class=\"tile\"></button>\r\n    <button id=\"nineth\" class=\"tile\"></button>\r\n</div>`;\r\naskForNames();\r\nfunction askForNames() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        form.addEventListener(\"submit\", () => __awaiter(this, void 0, void 0, function* () {\r\n            const inputFirst = (document.querySelector(\"#first-player\"));\r\n            const inputSecond = (document.querySelector(\"#second-player\"));\r\n            const firstPlayer = inputFirst.value;\r\n            const secondPlayer = inputSecond.value;\r\n            console.log(\"Names added\");\r\n            yield startGame();\r\n        }));\r\n    });\r\n}\r\nfunction startGame() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        return new Promise((resolve, reject) => {\r\n            // 1-X, 2-O\r\n            let currentPlayer = \"X\";\r\n            //clearing main\r\n            main.innerHTML = \"\";\r\n            //add board to main\r\n            main.innerHTML = board;\r\n            const tiles = document.querySelectorAll(\".tile\");\r\n            const tilesArray = Array.from(tiles);\r\n            tiles.forEach((tile) => {\r\n                //when clicked set to disabled\r\n                tile.addEventListener(\"click\", () => {\r\n                    tile.setAttribute(\"disabled\", \"\");\r\n                    //mark tile\r\n                    tile.textContent = currentPlayer;\r\n                    //check if someone won\r\n                    if (checkIfWin(tiles)) {\r\n                        main.innerHTML = `<p>Congrats, you have won!</p>`;\r\n                        resolve(currentPlayer);\r\n                    }\r\n                    //check if draw\r\n                    if (tilesArray.every(button => button.disabled)) {\r\n                        main.innerHTML = `<p>Draw!</p>`;\r\n                        resolve(\"draw\");\r\n                    }\r\n                    //change move to next player\r\n                    if (currentPlayer == \"X\") {\r\n                        currentPlayer = \"O\";\r\n                    }\r\n                    else {\r\n                        currentPlayer = \"X\";\r\n                    }\r\n                });\r\n            });\r\n        });\r\n    });\r\n}\r\nfunction checkIfWin(tiles) {\r\n    const winningCombinations = [\r\n        [0, 1, 2],\r\n        [3, 4, 5],\r\n        [6, 7, 8],\r\n        [0, 3, 6],\r\n        [1, 4, 7],\r\n        [2, 5, 8],\r\n        [0, 4, 8],\r\n        [2, 4, 6],\r\n    ];\r\n    for (let i = 0; i < winningCombinations.length; i++) {\r\n        if (tiles[winningCombinations[i][0]].textContent !== \"\" &&\r\n            tiles[winningCombinations[i][0]].textContent ===\r\n                tiles[winningCombinations[i][1]].textContent &&\r\n            tiles[winningCombinations[i][1]].textContent ===\r\n                tiles[winningCombinations[i][2]].textContent) {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.ts"]();
/******/ 	
/******/ })()
;