// ==========================
// SONCHA PRODUCTION v9
// SCRIPT.JS
// ==========================


// ТЕМА 🌙☀️

const themeButton = document.querySelector("#theme-toggle");


if(themeButton){

    themeButton.addEventListener("click", ()=>{

        document.body.classList.toggle("light-theme");


        if(document.body.classList.contains("light-theme")){

            themeButton.textContent = "☀️";

        } else {

            themeButton.textContent = "🌙";

        }

    });

}




// ПЛАВНЫЙ СКРОЛЛ МЕНЮ

const menuLinks =
document.querySelectorAll("nav a");


menuLinks.forEach(link=>{


    link.addEventListener("click", function(e){


        const section =
        document.querySelector(
        this.getAttribute("href")
        );


        if(section){

            e.preventDefault();

            section.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});




// ГОД В FOOTER

const year =
document.querySelector("#year");


if(year){

    year.textContent =
    new Date().getFullYear();

}




// ПОЯВЛЕНИЕ БЛОКОВ

const fadeElements =
document.querySelectorAll(".fade");


function showBlocks(){


fadeElements.forEach(item=>{


let position =
item.getBoundingClientRect().top;


if(position < window.innerHeight - 100){

item.classList.add("show");

}


});


}



window.addEventListener(
"scroll",
showBlocks
);


showBlocks();
// ==========================
// ACTIVE MENU ON SCROLL
// ==========================


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll("nav a");



window.addEventListener("scroll", ()=>{


let current = "";


sections.forEach(section=>{


const top =
section.offsetTop - 150;


const height =
section.offsetHeight;


if(
window.scrollY >= top &&
window.scrollY < top + height
){

current = section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.classList.remove("active");


if(
link.getAttribute("href") === "#" + current
){

link.classList.add("active");

}


});


});
// ==========================
// SP LOADER
// ==========================


window.addEventListener("load",()=>{


const loader =
document.querySelector(".loader");


if(loader){


setTimeout(()=>{


loader.classList.add("hide");


},2000);


}


});
// MOBILE MENU


const menuButton =
document.querySelector("#menu-toggle");


const navMenu =
document.querySelector(".nav-links");



if(menuButton){


menuButton.addEventListener("click",()=>{


navMenu.classList.toggle("active");


});


}


