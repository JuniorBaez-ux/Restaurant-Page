export let principal = document.getElementById("content");

export function createTitle(){
    let title = document.createElement('div');
    title.className = "title";
    title.id = "title";
    title.innerHTML = "The Dominican Palace";

    return title;
  }

  export function createNavBar(){
    let navbar = document.createElement("div");
    navbar.className = "topnav";
    navbar.id = "navbar";
    navbar.innerHTML = "<a id='home'>Home</a>";
    navbar.innerHTML += "<a  id='menu'>Menu</a>";
    navbar.innerHTML += "<a  id='contact'>Contact</a>";

    return navbar;
  }

  export function createFillerText(){
    let fillerText = document.createElement("div");
    fillerText.className = "fillertext";
    fillerText.id = "fillertext";
    fillerText.appendChild(createText());

    return fillerText;
}

export function createText(){
    let text = document.createElement("p");
    text.innerHTML = "The Dominican Palace is a restaurant located in the heart of the city of San Juan,it is a place where you can enjoy a variety of dishes from the best chefs in the city,the restaurant is open from 11:00 AM to 11:00 PM.";
    
    return text;
}

export function createHomePage(){
    principal.innerHTML = "";
    principal.appendChild(createFillerText());
    principal.appendChild(createFillerText());
}