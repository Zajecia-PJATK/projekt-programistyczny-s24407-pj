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

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nconst main = document.querySelector(\"main\");\r\nconst form = document.querySelector(\"form\");\r\nlet rank;\r\nlet lastTile;\r\nlet firstPlayer;\r\nlet secondPlayer;\r\nconst board = `<div id=\"board\" class=\"fade-in\">\r\n    <button class=\"tile\"></button>\r\n    <button class=\"tile\"></button>\r\n    <button class=\"tile\"></button>\r\n    <button class=\"tile\"></button>\r\n    <button class=\"tile\"></button>\r\n    <button class=\"tile\"></button>\r\n    <button class=\"tile\"></button>\r\n    <button class=\"tile\"></button>\r\n    <button class=\"tile\"></button>\r\n    <button id=\"undo\"><i class=\"bi bi-arrow-counterclockwise\"></i></button>\r\n</div>`;\r\naskForNames();\r\n//add winner to rank\r\nfunction updateRank(name) {\r\n    if (name === \"draw\") {\r\n    }\r\n    else {\r\n        if (name == \"X\") {\r\n            name = firstPlayer;\r\n        }\r\n        else {\r\n            name = secondPlayer;\r\n        }\r\n        let winner = { name: name, winCount: 1 }; //something wrong here\r\n        let index = rank.findIndex((p) => p.name === winner.name);\r\n        if (index !== -1) {\r\n            rank[index].winCount++;\r\n        }\r\n        else {\r\n            rank.push(winner);\r\n        }\r\n    }\r\n}\r\nfunction askForNames() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        form.addEventListener(\"submit\", () => __awaiter(this, void 0, void 0, function* () {\r\n            const inputFirst = (document.querySelector(\"#first-player\"));\r\n            const inputSecond = (document.querySelector(\"#second-player\"));\r\n            firstPlayer = inputFirst.value;\r\n            secondPlayer = inputSecond.value;\r\n            console.log(\"Names added\");\r\n            startGame();\r\n        }));\r\n    });\r\n}\r\nfunction startGame() {\r\n    var _a;\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        // 1-X, 2-O\r\n        let currentPlayer = \"X\";\r\n        let isUndoPossible = false;\r\n        //clearing main\r\n        main.innerHTML = \"\";\r\n        //add board to main\r\n        main.innerHTML = board;\r\n        const tiles = document.querySelectorAll(\".tile\");\r\n        const tilesArray = Array.from(tiles);\r\n        //Undo function\r\n        (_a = document.querySelector(\"#undo\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\r\n            if (isUndoPossible) {\r\n                lastTile.textContent = \"\";\r\n                lastTile.removeAttribute(\"disabled\");\r\n                if (currentPlayer == \"X\") {\r\n                    currentPlayer = \"O\";\r\n                }\r\n                else {\r\n                    currentPlayer = \"X\";\r\n                }\r\n                isUndoPossible = false;\r\n            }\r\n        });\r\n        tiles.forEach((tile) => {\r\n            //when clicked set to disabled\r\n            tile.addEventListener(\"click\", () => {\r\n                if (currentPlayer == \"X\") {\r\n                    tile.innerHTML = `<i class=\"bi bi-x-lg\"></i>`;\r\n                }\r\n                else {\r\n                    tile.innerHTML = `<i class=\"bi bi-circle\"></i>`;\r\n                }\r\n                isUndoPossible = true;\r\n                tile.setAttribute(\"disabled\", \"\");\r\n                lastTile = tile;\r\n                //mark tile\r\n                tile.value = currentPlayer;\r\n                tile.setAttribute(\"class\", currentPlayer);\r\n                //check if someone won\r\n                if (checkIfWin(tiles)) {\r\n                    main.innerHTML = `<div class=\"win-msg\">Congrats, you have won!</p>`;\r\n                    restart();\r\n                }\r\n                //check if draw\r\n                if (tilesArray.every((button) => button.disabled)) {\r\n                    main.innerHTML = `<div class=\"win-msg\">Draw!</div>`;\r\n                    restart();\r\n                }\r\n                //change move to next player\r\n                if (currentPlayer == \"X\") {\r\n                    currentPlayer = \"O\";\r\n                }\r\n                else {\r\n                    currentPlayer = \"X\";\r\n                }\r\n            });\r\n        });\r\n    });\r\n}\r\n//add event listeners and start the game again\r\nfunction restart() {\r\n    main.innerHTML += `<button id=\"play-again\" <i class=\"bi bi-fast-forward\"></i></button>`;\r\n    main.querySelector(\"#play-again\").addEventListener(\"click\", startGame);\r\n}\r\nfunction checkIfWin(tiles) {\r\n    const winningCombinations = [\r\n        [0, 1, 2],\r\n        [3, 4, 5],\r\n        [6, 7, 8],\r\n        [0, 3, 6],\r\n        [1, 4, 7],\r\n        [2, 5, 8],\r\n        [0, 4, 8],\r\n        [2, 4, 6],\r\n    ];\r\n    for (let i = 0; i < winningCombinations.length; i++) {\r\n        if (tiles[winningCombinations[i][0]].value &&\r\n            tiles[winningCombinations[i][0]].value ===\r\n                tiles[winningCombinations[i][1]].value &&\r\n            tiles[winningCombinations[i][1]].value ===\r\n                tiles[winningCombinations[i][2]].value) {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

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