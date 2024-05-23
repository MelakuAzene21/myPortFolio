const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
    }
    else {
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.style.display = "block";
    }
});


const morebutton = document.getElementById("moreButtonAbout");
const displayElement=document.getElementById("showHide");
morebutton.addEventListener("click",()=>{
displayElement.style.display="block";
displayElement.style.background = "black";
});


const morebuttonService = document.querySelector(".showservice");
const button = document.getElementById("moreButtonService");
const paragraph = document.querySelector(".small-para1");


button.addEventListener("click",()=>{
    morebuttonService.style.display="block";
    paragraph.style.color = "red";

});


const hidelist = document.getElementById("hide");
const moreButtonProject = document.getElementById("moreButtonProject");
moreButtonProject.addEventListener("click",()=>{
    hidelist.style.display="block";
});


const moreButtonFavorite = document.getElementById("moreButtonFavorite");
const additionalImages=document.getElementById("moreImage");


moreButtonFavorite.addEventListener("click",()=>{
additionalImages.style.display="block";
});

const hirebtn = document.getElementById("hirebtn");
hirebtn.addEventListener("click",()=>{
    alert("THANK YOU :Contact me in My Address");
})

//for Toogle Buttons
const toggleSwitch = document.getElementById("toggle");
const container = document.querySelector("body");
if (container.classList.contains("dark-mode")) {
    toggleSwitch.checked = true;
}
toggleSwitch.addEventListener("click", SwitchThemes);
function SwitchThemes(event) {
    if (event.target.checked) {
        container.classList.add("dark-mode");

    } else {
        container.classList.remove("dark-mode");
    }
}