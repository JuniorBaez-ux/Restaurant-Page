import { createTitle } from "./home";
import { createNavBar } from "./home";
import { principal } from "./home";
import Mangu from "/src/imgs/Mangu.jpg";
import Arroz from "/src/imgs/arro.jpg";
import Sancocho from "/src/imgs/sancocho.jpg";
import Yaroa from "/src/imgs/Yaroa.jpg";
import Morirsonando from "/src/imgs/morirsonando.jpg";

export let plateText;

export function createStructture(){
    document.body.appendChild(createTitle());
    document.body.appendChild(createNavBar());
}

createStructture();

 export function createPlate(source, plateName, plateDescription){
    let plate = document.createElement("div");
    plate.className = "plate";
    principal.appendChild(plate);
    
    plate.appendChild(createPlate1(source, plateName, plateDescription));
    return plate;
}

export function createPlate1(source, plateName, plateDescription){
    let plate1 = document.createElement("div");
    plate1.className = "plate1";
    plate1.appendChild(assignImage(source));
    plate1.appendChild(createPlateText(plateName, plateDescription));

    return plate1;
}

export function createPlateText(plateName, plateDescription){
    plateText = document.createElement("div");
    plateText.className = "plateText";
    plateText.appendChild(createName(plateName));
    plateText.appendChild(creataDescription(plateDescription));
    return plateText;
}

export function assignImage(source){
    let image = document.createElement("img");
    image.src = source;

    return image;
}

export function createName(plateName){
    let titulo = document.createElement("h3");
    titulo.innerHTML = plateName;

    return titulo;
}

export function creataDescription(plateDescription){
    let descripcion = document.createElement("p");
    descripcion.innerHTML = plateDescription;

    return descripcion;
}
export function createFirstRecipe(){
    createPlate(Mangu, "Mangu", " El mangu es la especialidad del local, es un plato reconocido por su gran valor nutritivo y por la facil obtencion de sus ingredientes.");    
}

export function createSecondRecipe(){
    createPlate(Arroz, "La bandera", "La bandera es un termino utilizado para representar este plato que consiste en: Arroz blanco, Habichuelas y Carne (Generalmente de pollo)");
}

function createThirdRecipe(){
    createPlate(Sancocho, "Sancocho", " El sancocho es un plato de carne de res, que se sirve en una sopa de arroz blanco, lo que hace de esta una comida que otorga una gran satisfacci??n.");
}

function createFouthRecipe(){
    createPlate(Yaroa, "Yaroa", "   La yaroa es un tipo de comida callejera que consiste en una capa de platanos verdes majados o de papas fritas cubiertos de una capa de carne y de queso y otros condimentos.");
}

function createFifthRecipe(){
    createPlate(Morirsonando, "Morir so??ando", "El morir so??ando es una bebdida que consiste en una mezcla de jugo de naranja fresco y leche evaporada.");
}

export function createMenu(){
    principal.innerHTML = "";
    createFirstRecipe();
    createSecondRecipe();
    createThirdRecipe();
    createFouthRecipe();
    createFifthRecipe();
}