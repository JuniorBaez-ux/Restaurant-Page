import { createTitle } from "./home";
import { createNavBar } from "./home";
import { principal } from "./home";
import {createPlate, plateText} from "./menu";
import Chef from "/src/imgs/chef.jpg";
import Manager from "/src/imgs/manager.jpg";
import './style2.css';


let chef = assignPhoto("/src/imgs/chef.jpg");

function createEmail(Email){
    let email = document.createElement("p");
    email.innerHTML = Email;   
    plateText.appendChild(email);
    
    return email;
}

export function assignPhoto(source){
    let image2 = document.createElement("img");
    image2.style.width = "300px";
    image2.style.height = "400px";
    image2.src = source;

    return image2.src;
}

function createChef(){
    assignPhoto("/src/imgs/chef.jpg");
    createPlate(Chef, "Chef", "Numero de Telefono: 829-829-8298");
    createEmail(" Correoreal2@gmail.com");
}

function createManager(){
    createPlate(Manager, "Manager", "Numero de Telefono: 829-829-8295");
    createEmail("Correoreal@gmail.com");
}

export function createContact(){
    principal.innerHTML = "";
    createChef();
    createManager();
}