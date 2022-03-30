function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function fun(button) {
    let par1, par2;
    let i;
    x = button.id;
    switch (x) {
        case "1":
            i = 0;
            break;
        case "2":
            i = 1;
            break;
        case "3":
            i = 2;
            break;
    }
    par1 = document.querySelectorAll('.text_s')[i];
    par2 = document.querySelectorAll('.text_show')[i];
    par1.classList.toggle("open");
    par1.classList.toggle("close");
    par2.classList.toggle("close");
    par2.classList.toggle("open");
}


const slide = Array.from(document.querySelectorAll(".slide"));

let slideNum = slide.length;
let activeSlide = 0;
let time = 2000;
slide[activeSlide].classList.add("slide_active");
function changeSlide() {
    if (activeSlide < slideNum - 1) {
        slide[activeSlide].classList.remove("slide_active");
        activeSlide++;
        slide[activeSlide].classList.add("slide_active");
    } else {
        slide[activeSlide].classList.remove("slide_active");
        activeSlide = 0;
        slide[activeSlide].classList.add("slide_active");
    }
    setTimeout("changeSlide()", time);
}
changeSlide();