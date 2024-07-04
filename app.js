let card = document.querySelector(".stylo");
let card2 = document.getElementById("styloSec");
let mainPage = document.querySelector(".main");
let blog = document.querySelector(".stylos");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");

function shops(){
    mainPage.style.display="none";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="none";
    about.style.display="none";

    document.getElementById("shops").style.color="rgb(4, 138, 138)";
    document.getElementById("home").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("about").style.color="black";
}

function blogs(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="block";
    about.style.display="none";

  document.getElementById("blog").style.color="rgb(4, 138, 138)";
  document.getElementById("home").style.color="black";
  document.getElementById("shops").style.color="black";
  document.getElementById("about").style.color="black";
}

function homes() {
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
    about.style.display="none";
    contact.style.display="none";

    document.getElementById("home").style.color="rgb(4, 138, 138)";
    document.getElementById("shops").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("about").style.color="black";
}

function abouts() {
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="block";

    document.getElementById("about").style.color="rgb(4, 138, 138)";
    document.getElementById("shops").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("home").style.color="black";
}

function contacts() {
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none";
    about.style.display="none";
    contact.style.display="block";

    document.getElementById("contact").style.color="rgb(4, 138, 138)";
    document.getElementById("shops").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("home").style.color="black";
}

function show(img) {
   let newImg = document.getElementById("newImg");
   newImg.src=img.src;

   document.querySelector(".cart").style.display="flex";

   mainPage.style.display="none";
   card.style.display="none";
   card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="none";

}

function goBack() {
    document.querySelector(".cart").style.display = "none";
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
    about.style.display="none";
    contact.style.display="none";
}