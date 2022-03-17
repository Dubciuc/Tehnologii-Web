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
    par.innerHTML = 'Opel este o fabrica producătoare de vehicule din Germania cu sediul in Russelsheim, fondată în anul 1862 de către Adam Opel. ' +
        'Aceasta este o filială a Groupe PSA din 1 august 2017. ' +
        'În martie 2017, Groupe PSA a fost de acord să achiziționeze Opel de la General Motors. ' +
        'Achiziția a fost aprobată de autoritățile de reglementare ale Comisiei Europene în iulie 2017. ' +
        'Sediul Opel se află în Rüsselsheim am Main, Hesse, Germania.' +
        'Inițial compania producea mașini de cusut, iar din 1886 a început să producă biciclete . ' +
        'Adam Opel a murit in anul 1895, urmând ca afacerea să fie preluată de soția acestuia și de doi dintre fii săi. ' +
        'În anul 1898, au realizat un parteneriat cu Frederich Lutzmann, ce a dus la realizarea primului model Opel. ' +
        'Începând cu anul 1899 compania a început să producă automobile . ' +
        'În anul 1929 pachetul majoritar de acțiuni a fost cumpărat de compania americană General Motors. ' +
        'În prezent brand-ul Opel este deținut de Stellantis.'
    document.querySelector('.text_s1').style.fontSize='15px';
}


let i=0;
let images_s2=[];
let time_s2=1500;
images_s2[0]="assets/opel_images/astra_1.jpg";
images_s2[1]="assets/opel_images/astra_2.jpg";
images_s2[2]="assets/opel_images/astra_3.jpg";
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
    par.innerHTML = 'Opel Astra este un automobil compact produs de Opel din 1991.' +
        'Se mai numește Vauxhall Astra în Regatul Unit, Buick Excelle XT în China, Chevrolet Astra/Vectra în America Latină și Saturn Astra în Statele Unite și Canada, dar Saturn nu se mai vinde deoarece marca a fost desființată. Să nu uităm și de Holden Astra care s-a comercializat în Australia până în 2009 deoarece era scumpă, și a fost înlocuită de Holden Cruze. Iar Chevrolet Vectra (Astra H) a fost înlocuit de Chevrolet Cruze.\n' +
        '\n' + 'Astra este acum fabricată în China (Buick), Germania (Opel), Regatul Unit (Vauxhall), Brazilia și Polonia.\n' +
        '\n' + 'Chevrolet Cruze (fost Lacetti) este un frate de al lui Astra bazat pe platforma Delta 2.';
    document.querySelector('.text_s2').style.fontSize='15px';
}

function fu_s3(){
    let par = document.querySelector('.text_s3');
    par.innerHTML = 'Opel Corsa (ˈoːpəl ˈkoːrsa) este un supermini german produs de General Motors din 1982. ' +
        'Opel Corsa este produs și sub mărcile: Vauxhall (în Marea Britanie) și Chevrolet (în America de Sud și Asia).' +
        'Corsa este unul dintre cele mai bine vândute vehicule ale companiei (cel mai bine vândut după Astra). ' +
        'Se clasează în mod constant printre primele zece mașini cele mai vândute din Europa. ' +
        'Până la sfârșitul lunii august 2012, au fost vândute 11,8 milioane de unități - Corsa reprezintă 28% din vânzările Opel.' +
        'Prima generație Corsa a fost introdusă în 1982. ' +
        'La început a fost produs la uzina General Motors din Zaragoza și mai târziu în Germania. ' +
        'În Marea Britanie se numea Vauxhall Nova.\n' +
        'Mașina a fost furnizată cu motoare de 1.0 L 45 CP, 1.2 L 55 CP, 1.3 L 70 CP și 1.4 L 75 CP. din. ' +
        'Toate motoarele erau pe benzină\n' +
        'În 1990, Corsa a fost restilizată. ' +
        'Mașina a primit bare de protecție, faruri, grilă și interior noi. ' +
        'Mașina a concurat cu Ford Fiesta și Peugeot 205.\n' +
        'Au fost produse în total 3.105.430 de mașini.'
    document.querySelector('.text_s3').style.fontSize='15px';
}

let j=0;
let images_s3=[];
let time_s3=1500;
images_s3[0]="assets/opel_images/corsa_1.jpg";
images_s3[1]="assets/opel_images/corsa_2.jpg";
images_s3[2]="assets/opel_images/corsa_3.jpg";
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