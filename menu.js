/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "principal": () => (/* binding */ principal),
/* harmony export */   "createTitle": () => (/* binding */ createTitle),
/* harmony export */   "createNavBar": () => (/* binding */ createNavBar),
/* harmony export */   "createFillerText": () => (/* binding */ createFillerText),
/* harmony export */   "createText": () => (/* binding */ createText),
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
let principal = document.getElementById("content");

function createTitle(){
    let title = document.createElement('div');
    title.className = "title";
    title.id = "title";
    title.innerHTML = "The Dominican Palace";

    return title;
  }

  function createNavBar(){
    let navbar = document.createElement("div");
    navbar.className = "topnav";
    navbar.id = "navbar";
    navbar.innerHTML = "<a id='home'>Home</a>";
    navbar.innerHTML += "<a  id='menu'>Menu</a>";
    navbar.innerHTML += "<a  id='contact'>Contact</a>";

    return navbar;
  }

  function createFillerText(){
    let fillerText = document.createElement("div");
    fillerText.className = "fillertext";
    fillerText.id = "fillertext";
    fillerText.appendChild(createText());

    return fillerText;
}

function createText(){
    let text = document.createElement("p");
    text.innerHTML = "The Dominican Palace is a restaurant located in the heart of the city of San Juan,it is a place where you can enjoy a variety of dishes from the best chefs in the city,the restaurant is open from 11:00 AM to 11:00 PM.";
    
    return text;
}

function createHomePage(){
    principal.innerHTML = "";
    principal.appendChild(createFillerText());
    principal.appendChild(createFillerText());
}

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plateText": () => (/* binding */ plateText),
/* harmony export */   "createStructture": () => (/* binding */ createStructture),
/* harmony export */   "createPlate": () => (/* binding */ createPlate),
/* harmony export */   "createPlate1": () => (/* binding */ createPlate1),
/* harmony export */   "createPlateText": () => (/* binding */ createPlateText),
/* harmony export */   "assignImage": () => (/* binding */ assignImage),
/* harmony export */   "createName": () => (/* binding */ createName),
/* harmony export */   "creataDescription": () => (/* binding */ creataDescription),
/* harmony export */   "createFirstRecipe": () => (/* binding */ createFirstRecipe),
/* harmony export */   "createSecondRecipe": () => (/* binding */ createSecondRecipe),
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");




let plateText;

function createStructture(){
    document.body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createTitle)());
    document.body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createNavBar)());
}

createStructture();

 function createPlate(source, plateName, plateDescription){
    let plate = document.createElement("div");
    plate.className = "plate";
    _home__WEBPACK_IMPORTED_MODULE_0__.principal.appendChild(plate);
    
    plate.appendChild(createPlate1(source, plateName, plateDescription));
    return plate;
}

function createPlate1(source, plateName, plateDescription){
    let plate1 = document.createElement("div");
    plate1.className = "plate1";
    plate1.appendChild(assignImage(source));
    plate1.appendChild(createPlateText(plateName, plateDescription));

    return plate1;
}

function createPlateText(plateName, plateDescription){
    plateText = document.createElement("div");
    plateText.className = "plateText";
    plateText.appendChild(createName(plateName));
    plateText.appendChild(creataDescription(plateDescription));
    return plateText;
}

function assignImage(source){
    let image = document.createElement("img");
    image.src = source;

    return image;
}

function createName(plateName){
    let titulo = document.createElement("h3");
    titulo.innerHTML = plateName;

    return titulo;
}

function creataDescription(plateDescription){
    let descripcion = document.createElement("p");
    descripcion.innerHTML = plateDescription;

    return descripcion;
}
function createFirstRecipe(){
    createPlate("/src/imgs/Mangu.jpg", "Mangu", " El mangu es la especialidad del local, es un plato reconocido por su gran valor nutritivo y por la facil obtencion de sus ingredientes.");    
}

function createSecondRecipe(){
    createPlate("/src/imgs/arro.jpg", "La bandera", "La bandera es un termino utilizado para representar este plato que consiste en: Arroz blanco, Habichuelas y Carne (Generalmente de pollo)");
}

function createThirdRecipe(){
    createPlate("/src/imgs/sancocho.jpg", "Sancocho", " El sancocho es un plato de carne de res, que se sirve en una sopa de arroz blanco, lo que hace de esta una comida que otorga una gran satisfacción.");
}

function createFouthRecipe(){
    createPlate("/src/imgs/Yaroa.jpg", "Yaroa", "   La yaroa es un tipo de comida callejera que consiste en una capa de platanos verdes majados o de papas fritas cubiertos de una capa de carne y de queso y otros condimentos.");
}

function createFifthRecipe(){
    createPlate("/src/imgs/morirsonando.jpg", "Morir soñando", "El morir soñando es una bebdida que consiste en una mezcla de jugo de naranja fresco y leche evaporada.");
}

function createMenu(){
    _home__WEBPACK_IMPORTED_MODULE_0__.principal.innerHTML = "";
    createFirstRecipe();
    createSecondRecipe();
    createThirdRecipe();
    createFouthRecipe();
    createFifthRecipe();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDMUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0M7QUFDSDs7QUFFNUI7O0FBRUE7QUFDUCw4QkFBOEIsa0RBQVc7QUFDekMsOEJBQThCLG1EQUFZO0FBQzFDOztBQUVBOztBQUVBLENBQVE7QUFDUjtBQUNBO0FBQ0EsSUFBSSx3REFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLElBQUksc0RBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBwcmluY2lwYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUaXRsZSgpe1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwidGl0bGVcIjtcbiAgICB0aXRsZS5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlRoZSBEb21pbmljYW4gUGFsYWNlXCI7XG5cbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCl7XG4gICAgbGV0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2YmFyLmNsYXNzTmFtZSA9IFwidG9wbmF2XCI7XG4gICAgbmF2YmFyLmlkID0gXCJuYXZiYXJcIjtcbiAgICBuYXZiYXIuaW5uZXJIVE1MID0gXCI8YSBpZD0naG9tZSc+SG9tZTwvYT5cIjtcbiAgICBuYXZiYXIuaW5uZXJIVE1MICs9IFwiPGEgIGlkPSdtZW51Jz5NZW51PC9hPlwiO1xuICAgIG5hdmJhci5pbm5lckhUTUwgKz0gXCI8YSAgaWQ9J2NvbnRhY3QnPkNvbnRhY3Q8L2E+XCI7XG5cbiAgICByZXR1cm4gbmF2YmFyO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbGxlclRleHQoKXtcbiAgICBsZXQgZmlsbGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlsbGVyVGV4dC5jbGFzc05hbWUgPSBcImZpbGxlcnRleHRcIjtcbiAgICBmaWxsZXJUZXh0LmlkID0gXCJmaWxsZXJ0ZXh0XCI7XG4gICAgZmlsbGVyVGV4dC5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCkpO1xuXG4gICAgcmV0dXJuIGZpbGxlclRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUZXh0KCl7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0LmlubmVySFRNTCA9IFwiVGhlIERvbWluaWNhbiBQYWxhY2UgaXMgYSByZXN0YXVyYW50IGxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIHRoZSBjaXR5IG9mIFNhbiBKdWFuLGl0IGlzIGEgcGxhY2Ugd2hlcmUgeW91IGNhbiBlbmpveSBhIHZhcmlldHkgb2YgZGlzaGVzIGZyb20gdGhlIGJlc3QgY2hlZnMgaW4gdGhlIGNpdHksdGhlIHJlc3RhdXJhbnQgaXMgb3BlbiBmcm9tIDExOjAwIEFNIHRvIDExOjAwIFBNLlwiO1xuICAgIFxuICAgIHJldHVybiB0ZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKXtcbiAgICBwcmluY2lwYWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3JlYXRlRmlsbGVyVGV4dCgpKTtcbiAgICBwcmluY2lwYWwuYXBwZW5kQ2hpbGQoY3JlYXRlRmlsbGVyVGV4dCgpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZVRpdGxlIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgY3JlYXRlTmF2QmFyIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgcHJpbmNpcGFsIH0gZnJvbSBcIi4vaG9tZVwiO1xuXG5leHBvcnQgbGV0IHBsYXRlVGV4dDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHR1cmUoKXtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xufVxuXG5jcmVhdGVTdHJ1Y3R0dXJlKCk7XG5cbiBleHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxhdGUoc291cmNlLCBwbGF0ZU5hbWUsIHBsYXRlRGVzY3JpcHRpb24pe1xuICAgIGxldCBwbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxhdGUuY2xhc3NOYW1lID0gXCJwbGF0ZVwiO1xuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChwbGF0ZSk7XG4gICAgXG4gICAgcGxhdGUuYXBwZW5kQ2hpbGQoY3JlYXRlUGxhdGUxKHNvdXJjZSwgcGxhdGVOYW1lLCBwbGF0ZURlc2NyaXB0aW9uKSk7XG4gICAgcmV0dXJuIHBsYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxhdGUxKHNvdXJjZSwgcGxhdGVOYW1lLCBwbGF0ZURlc2NyaXB0aW9uKXtcbiAgICBsZXQgcGxhdGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF0ZTEuY2xhc3NOYW1lID0gXCJwbGF0ZTFcIjtcbiAgICBwbGF0ZTEuYXBwZW5kQ2hpbGQoYXNzaWduSW1hZ2Uoc291cmNlKSk7XG4gICAgcGxhdGUxLmFwcGVuZENoaWxkKGNyZWF0ZVBsYXRlVGV4dChwbGF0ZU5hbWUsIHBsYXRlRGVzY3JpcHRpb24pKTtcblxuICAgIHJldHVybiBwbGF0ZTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbGF0ZVRleHQocGxhdGVOYW1lLCBwbGF0ZURlc2NyaXB0aW9uKXtcbiAgICBwbGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXRlVGV4dC5jbGFzc05hbWUgPSBcInBsYXRlVGV4dFwiO1xuICAgIHBsYXRlVGV4dC5hcHBlbmRDaGlsZChjcmVhdGVOYW1lKHBsYXRlTmFtZSkpO1xuICAgIHBsYXRlVGV4dC5hcHBlbmRDaGlsZChjcmVhdGFEZXNjcmlwdGlvbihwbGF0ZURlc2NyaXB0aW9uKSk7XG4gICAgcmV0dXJuIHBsYXRlVGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkltYWdlKHNvdXJjZSl7XG4gICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zcmMgPSBzb3VyY2U7XG5cbiAgICByZXR1cm4gaW1hZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYW1lKHBsYXRlTmFtZSl7XG4gICAgbGV0IHRpdHVsbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICB0aXR1bG8uaW5uZXJIVE1MID0gcGxhdGVOYW1lO1xuXG4gICAgcmV0dXJuIHRpdHVsbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0YURlc2NyaXB0aW9uKHBsYXRlRGVzY3JpcHRpb24pe1xuICAgIGxldCBkZXNjcmlwY2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXBjaW9uLmlubmVySFRNTCA9IHBsYXRlRGVzY3JpcHRpb247XG5cbiAgICByZXR1cm4gZGVzY3JpcGNpb247XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlyc3RSZWNpcGUoKXtcbiAgICBjcmVhdGVQbGF0ZShcIi9zcmMvaW1ncy9NYW5ndS5qcGdcIiwgXCJNYW5ndVwiLCBcIiBFbCBtYW5ndSBlcyBsYSBlc3BlY2lhbGlkYWQgZGVsIGxvY2FsLCBlcyB1biBwbGF0byByZWNvbm9jaWRvIHBvciBzdSBncmFuIHZhbG9yIG51dHJpdGl2byB5IHBvciBsYSBmYWNpbCBvYnRlbmNpb24gZGUgc3VzIGluZ3JlZGllbnRlcy5cIik7ICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2Vjb25kUmVjaXBlKCl7XG4gICAgY3JlYXRlUGxhdGUoXCIvc3JjL2ltZ3MvYXJyby5qcGdcIiwgXCJMYSBiYW5kZXJhXCIsIFwiTGEgYmFuZGVyYSBlcyB1biB0ZXJtaW5vIHV0aWxpemFkbyBwYXJhIHJlcHJlc2VudGFyIGVzdGUgcGxhdG8gcXVlIGNvbnNpc3RlIGVuOiBBcnJveiBibGFuY28sIEhhYmljaHVlbGFzIHkgQ2FybmUgKEdlbmVyYWxtZW50ZSBkZSBwb2xsbylcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoaXJkUmVjaXBlKCl7XG4gICAgY3JlYXRlUGxhdGUoXCIvc3JjL2ltZ3Mvc2FuY29jaG8uanBnXCIsIFwiU2FuY29jaG9cIiwgXCIgRWwgc2FuY29jaG8gZXMgdW4gcGxhdG8gZGUgY2FybmUgZGUgcmVzLCBxdWUgc2Ugc2lydmUgZW4gdW5hIHNvcGEgZGUgYXJyb3ogYmxhbmNvLCBsbyBxdWUgaGFjZSBkZSBlc3RhIHVuYSBjb21pZGEgcXVlIG90b3JnYSB1bmEgZ3JhbiBzYXRpc2ZhY2Npw7NuLlwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm91dGhSZWNpcGUoKXtcbiAgICBjcmVhdGVQbGF0ZShcIi9zcmMvaW1ncy9ZYXJvYS5qcGdcIiwgXCJZYXJvYVwiLCBcIiAgIExhIHlhcm9hIGVzIHVuIHRpcG8gZGUgY29taWRhIGNhbGxlamVyYSBxdWUgY29uc2lzdGUgZW4gdW5hIGNhcGEgZGUgcGxhdGFub3MgdmVyZGVzIG1hamFkb3MgbyBkZSBwYXBhcyBmcml0YXMgY3ViaWVydG9zIGRlIHVuYSBjYXBhIGRlIGNhcm5lIHkgZGUgcXVlc28geSBvdHJvcyBjb25kaW1lbnRvcy5cIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpZnRoUmVjaXBlKCl7XG4gICAgY3JlYXRlUGxhdGUoXCIvc3JjL2ltZ3MvbW9yaXJzb25hbmRvLmpwZ1wiLCBcIk1vcmlyIHNvw7FhbmRvXCIsIFwiRWwgbW9yaXIgc2/DsWFuZG8gZXMgdW5hIGJlYmRpZGEgcXVlIGNvbnNpc3RlIGVuIHVuYSBtZXpjbGEgZGUganVnbyBkZSBuYXJhbmphIGZyZXNjbyB5IGxlY2hlIGV2YXBvcmFkYS5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51KCl7XG4gICAgcHJpbmNpcGFsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY3JlYXRlRmlyc3RSZWNpcGUoKTtcbiAgICBjcmVhdGVTZWNvbmRSZWNpcGUoKTtcbiAgICBjcmVhdGVUaGlyZFJlY2lwZSgpO1xuICAgIGNyZWF0ZUZvdXRoUmVjaXBlKCk7XG4gICAgY3JlYXRlRmlmdGhSZWNpcGUoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=