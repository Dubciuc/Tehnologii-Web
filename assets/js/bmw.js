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

function fu_s1(){
    let par = document.querySelector('.text_s1');
    par.innerHTML = 'MW AG (acronimul pentru Despre acest sunet Bayerische Motoren Werke AG (ajutor·info), în română Uzina Bavareză de Motoare SA) este o companie multinațională germană care produce în prezent automobile și motociclete de lux și a produs, de asemenea, motoare de avioane până în 1945.\n' +
        '\n' +'Compania a fost înființată în 1916 și își are sediul în München, Bavaria. ' +
        'BMW produce autovehicule în Germania, Brazilia, China, India, Africa de Sud, Marea Britanie și Statele Unite. ' +
        'În 2015, BMW a fost al 12-lea cel mai mare producător mondial de autovehicule, cu 2.279.503 de vehicule produse. ' +
        'Membrii familiei Quandt sunt acționari pe termen lung ai companiei, restul de acțiuni fiind deținute de publicul de tip float.\n' +
        '\n' +'Automobilele sunt comercializate sub mărcile BMW (cu sub-mărci BMW M pentru modele performante și BMW i pentru mașinile electrice cu priză electrică), Mini și Rolls-Royce. ' +
        'Motocicletele sunt comercializate sub marca BMW Motorrad.'
    document.querySelector('.text_s1').style.fontSize='15px';
}


let i=0;
let images_s2=[];
let time_s2=1500;
images_s2[0]="assets/bmw_images/m8_1.jpg";
images_s2[1]="assets/bmw_images/m8_2.jpg";
images_s2[2]="assets/bmw_images/m8_3.jpg";
function slideShow_s2() {
    document.slideshow_s2.src=images_s2[i];
    if (i<images_s2.length-1) {
        i++;
    } else {
        i=0;
    }
    setTimeout("slideShow_s2()", time_s2);
}


function fu_s2(){
    let par = document.querySelector('.text_s2');
    par.innerHTML = 'BMW M8 este versiunea de înaltă performanță a BMW Seria 8 (G15) comercializată sub marca BMW M.\n' +
        '\n' + 'Introdus în iunie 2019, M8 a fost produs inițial în stilurile de caroserie decapotabilă cu 2 uși (cod model F91) și coupe cu 2 uși (cod model F92).' +
        'Un sedan cu 4 uși (cod model F93, comercializat ca „Gran Coupe”) a fost adăugat la gama în octombrie 2019. ' +
        'M8 este alimentat de motorul V8 dublu turbo BMW S63 împărtășit cu BMW M5 (F90) .';
    document.querySelector('.text_s2').style.fontSize='15px';
}

function fu_s3(){
    let par = document.querySelector('.text_s3');
    par.innerHTML = 'BMW M4 este o versiune de înaltă performanță a coupe-urilor și decapotabilelor BMW Seria 4 dezvoltată de divizia de sport cu motor a BMW, BMW M , și comercializată din 2014.\n' +
        '\n' + 'Ca parte a renumerotării care împarte modelele coupé și decapotabile Seria 3 în Seria 4 (pentru a le diferenția și mai mult de Seria 3), M4 a înlocuit modelele BMW M3 coupé și decapotabile. ' +
        'Actualizările față de BMW Seria 4 standard includ un motor îmbunătățit, suspensie, sistem de evacuare, frâne și măsuri de reducere a greutății, inclusiv utilizarea sporită a fibrei de carbon , cum ar fi pe plafonul mașinii.' +
        'A doua iterație a BMW M4 (nume de cod G82) se bazează în mare parte pe Seria 4 standard (generația G22) , care a fost previzualizată de BMW Concept 4. ' +
        'Este o versiune de înaltă performanță a Seria 4 standard G22. ' +
        'Prototipurile BMW M4 au fost văzute testate pe Nurburgring, alături de BMW M3 G80 . ' +
        'Primele unități au fost asamblate în noiembrie 2020, livrările globale începând cu începutul anului 2021.'
    document.querySelector('.text_s3').style.fontSize='15px';
}

let j=0;
let images_s3=[];
let time_s3=1500;
images_s3[0]="assets/bmw_images/m4_1.jpg";
images_s3[1]="assets/bmw_images/m4_2.jpg";
images_s3[2]="assets/bmw_images/m4_3.jpg";
function slideShow_s3() {
    document.slideshow_s3.src=images_s3[j];
    if (j<images_s3.length-1) {
        j++;
    } else {
        j=0;
    }
    setTimeout("slideShow_s3()", time_s3);
}

window.onload=function () {
    slideShow_s3();
    slideShow_s2();
}