const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((element)=>{
    observer.observe(element);
});


const roles = [
    "Future AI Engineer",
    "Web Developer",
    "Machine Learning Enthusiast"
];

const typing = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentRole = roles[roleIndex];

    if(!deleting){

        typing.textContent = currentRole.substring(0,charIndex);

        charIndex++;

        if(charIndex > currentRole.length){

            deleting = true;
            setTimeout(typeEffect,1500);
            return;

        }

    }else{

        typing.textContent = currentRole.substring(0,charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){
                roleIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

        menuToggle.textContent =
            navMenu.classList.contains("active")
            ? "✕"
            : "☰";

    });

}

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        menuToggle.textContent="☰";

    });

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){
        topBtn.style.display="block";
    }else{
        topBtn.style.display="none";
    }

});

topBtn.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};
const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

   hero.style.opacity = Math.max(0, 1 - window.scrollY / 700);

});

window.addEventListener("load",()=>{
    document.getElementById("loader").classList.add("hide");

});

const cursor=document.createElement("div");
cursor.className="cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
});

const light=document.getElementById("cursor-light");

document.addEventListener("mousemove",(e)=>{

    light.style.left=e.clientX+"px";
    light.style.top=e.clientY+"px";

});

const counters=document.querySelectorAll(".stats h3");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.innerText.replace("+","");

let value=+counter.dataset.value||0;

if(value<target){

value++;

counter.dataset.value=value;

counter.innerText=value+"+";

requestAnimationFrame(update);

}

}

update();

});