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


const slide1 = Array.from(document.querySelectorAll(".slide1"));
const slide2 = Array.from(document.querySelectorAll(".slide2"));

let activeSlide = 0;
let time = 2000;
slide1[0].classList.add("slide_active");
slide2[0].classList.add("slide_active");
function changeSlide(sld, actvsld) {

    if (actvsld < sld.length - 1 ) {
        sld[actvsld].classList.remove("slide_active");
        actvsld++;
        sld[actvsld].classList.add("slide_active");
    } else {
        sld[actvsld].classList.remove("slide_active");
        actvsld = 0;
        sld[actvsld].classList.add("slide_active");
    }
    setTimeout(function(){changeSlide(sld, actvsld)}, time);
}
changeSlide(slide1, activeSlide);
changeSlide(slide2, activeSlide);