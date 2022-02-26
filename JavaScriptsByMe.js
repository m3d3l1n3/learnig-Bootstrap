// Functia asigura miscarea instanta la inceputul paginii (butonul verde)
function ScrolTop() {
    var place = { top: 0, left: 0, behavior: 'instant' };
    window.scrollTo(place);
}

// asigura schimbarea in mod periodic a culorii, in fct de schema aleasa + alegerea schemei
let colors = [["HotPink", "SeaGreen", "RebeccaPurple", "Aquamarine", "FireBrick"], ["BlanchedAlmond", "Lavender", "LemonChiffon", "LavenderBlush"], ["Chocolate", "LightCoral", "Peru"]];
let text_color = ["white", "black", "grey"];
let tom = -1;
let jerry = 0;
let timer;
function ChangingColors() {
    tom++;
    if (timer) clearInterval(timer);
    timer = setInterval(ChangingBackground, 1000);
    if (colors.length <= tom) tom = 0;
}

// schimba intrele ele culorile dintr-o schema 
function ChangingBackground() {
    document.body.style.backgroundColor = colors[tom][jerry];
    document.body.style.color = text_color[tom]; // schimba culoarea textul in fct de schema (pt vizibilitate)
    let tables = document.getElementsByClassName("table");
    // schimba culoarea textul in fct de schema (la tabele)
    for (let element of tables) {
        element.style.color = text_color[tom];
    }
    console.log("tom- ", tom);
    console.log("jerry- ", jerry);
    jerry++;
    if (colors[tom].length <= jerry) jerry = 0;
}

// functie ce se autoapeleaza - de aceea sunt parantezele;
(function Initialization(){
    let elem = document.getElementsByClassName("parts");
    for(let element of elem){
        element.style.opacity = 0;
    }
})();

// functia creeaza efectul vizual prin cresterea opacitatii obiectelor
let opacity = 0;
function AnimationPart(){
    opacity+=0.01;
    let part = document.getElementsByClassName("parts");
    for(let element of part){
        element.style.opacity = opacity;
    }
    // part.style.opacity = part.style.opacity == 0?100:0; if intr-o sg linie
    
}
window.addEventListener('scroll', AnimationPart);
