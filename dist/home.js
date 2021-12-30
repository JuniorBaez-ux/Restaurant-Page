/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk87O0FBRUE7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgbGV0IHByaW5jaXBhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKCl7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlLmlkID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVGhlIERvbWluaWNhbiBQYWxhY2VcIjtcblxuICAgIHJldHVybiB0aXRsZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYXZCYXIoKXtcbiAgICBsZXQgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYXZiYXIuY2xhc3NOYW1lID0gXCJ0b3BuYXZcIjtcbiAgICBuYXZiYXIuaWQgPSBcIm5hdmJhclwiO1xuICAgIG5hdmJhci5pbm5lckhUTUwgPSBcIjxhIGlkPSdob21lJz5Ib21lPC9hPlwiO1xuICAgIG5hdmJhci5pbm5lckhUTUwgKz0gXCI8YSAgaWQ9J21lbnUnPk1lbnU8L2E+XCI7XG4gICAgbmF2YmFyLmlubmVySFRNTCArPSBcIjxhICBpZD0nY29udGFjdCc+Q29udGFjdDwvYT5cIjtcblxuICAgIHJldHVybiBuYXZiYXI7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsbGVyVGV4dCgpe1xuICAgIGxldCBmaWxsZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaWxsZXJUZXh0LmNsYXNzTmFtZSA9IFwiZmlsbGVydGV4dFwiO1xuICAgIGZpbGxlclRleHQuaWQgPSBcImZpbGxlcnRleHRcIjtcbiAgICBmaWxsZXJUZXh0LmFwcGVuZENoaWxkKGNyZWF0ZVRleHQoKSk7XG5cbiAgICByZXR1cm4gZmlsbGVyVGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHQoKXtcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHQuaW5uZXJIVE1MID0gXCJUaGUgRG9taW5pY2FuIFBhbGFjZSBpcyBhIHJlc3RhdXJhbnQgbG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgdGhlIGNpdHkgb2YgU2FuIEp1YW4saXQgaXMgYSBwbGFjZSB3aGVyZSB5b3UgY2FuIGVuam95IGEgdmFyaWV0eSBvZiBkaXNoZXMgZnJvbSB0aGUgYmVzdCBjaGVmcyBpbiB0aGUgY2l0eSx0aGUgcmVzdGF1cmFudCBpcyBvcGVuIGZyb20gMTE6MDAgQU0gdG8gMTE6MDAgUE0uXCI7XG4gICAgXG4gICAgcmV0dXJuIHRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpe1xuICAgIHByaW5jaXBhbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChjcmVhdGVGaWxsZXJUZXh0KCkpO1xuICAgIHByaW5jaXBhbC5hcHBlbmRDaGlsZChjcmVhdGVGaWxsZXJUZXh0KCkpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==