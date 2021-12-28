import _, { fill } from 'lodash';
import './style.css';
import { createHomePage, createTitle } from "./home.js";
import { createNavBar } from "./home.js";
import { createFillerText } from "./home.js";
import { createText } from "./home.js";

let principal = document.getElementById("content");

console.log("Tamo funcionando klk");

// function component() {
//     //const element = document.createElement('div');
 
//     // Lodash, now imported by this script
//     //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
 
//     return element;
//   }
 
//   document.body.appendChild(component());

createHomePage();