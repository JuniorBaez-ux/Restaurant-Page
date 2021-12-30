import _, { fill } from 'lodash';
import './style.css';
import { createHomePage} from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";
import {createStructture} from "./menu.js";

let principal = document.getElementById("content");
let options = document.getElementById("navbar");

//createStructture();

console.log("Tamo funcionando klk");

// function component() {
//     //const element = document.createElement('div');
 
//     // Lodash, now imported by this script
//     //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
 
//     return element;
//   }
 
//   document.body.appendChild(component());

//Adding the logic to swtich between pages

options.addEventListener("click", (event) => {
    let target = event.target;
    if(target.id === "home"){
        createHomePage();
    }
    else if(target.id === "menu"){
        createMenu();
    }
    else if(target.id === "contact"){
        
        createContact();
    }
});


//Finished
// createHomePage();

//Finished
//createMenu();

//Finished
//createContact();