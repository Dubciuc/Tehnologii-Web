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
    par.innerHTML = 'Volkswagen (un cuvânt german care se citește [ pron. folks-va-găn ] și se prescurtează în vorbirea curentă cu „VW” (citit ,,fau ve") este o companie constructoare de autoturisme și SUV-uri din Wolfsburg, Germania.' +
        ' Cuvântul Volkswagen înseamnă „vehicul popular” sau „al poporului”, fiind preconizat de regimul nazist ca automobil pe care să și-l poată cumpăra oricare cetățean german.\ ' +
        'Compania VW are deviza „Aus Liebe zum Automobil” („Din dragoste pentru automobil”).' +
        ' Compania și în același timp marca VW aparțin azi concernului Volkswagen Group (Volkswagen AG), ca mărime al patrulea grup de producători de automobile din lume, după GM, Toyota și Ford.\n' +
        '\n' +'În anul 2010 livrările Volkswagen au urcat cu 13,7 % la 7,14 milioane de automobile și SUV-uri, nivel record în istoria grupului.' +
        ' Compania este al treilea mare producător mondial după Toyota (cu 8,41 milioane de unități) și General Motors (cu 8,39 milioane de unități vândute)[6].';
    document.querySelector('.text_s1').style.fontSize='15px';
}


let i=0;
let images_s2=[];
let time_s2=1500;
images_s2[0]="assets/vw_images/passat_1.jpg";
images_s2[1]="assets/vw_images/passat_2.jpg";
images_s2[2]="assets/vw_images/passat_3.png";
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
    par.innerHTML = ' Volkswagen Passat este o serie de mașini mari de familie fabricate și comercializate de producătorul german de automobile Volkswagen din 1973 și acum în a opta generație.' +
        ' A fost comercializat diferit ca Dasher, Santana, Quantum, Magotan, Corsar și Carat. ' +
        'Generațiile succesive ale modelului Passat poartă denumirile interne Volkswagen B1, B2 etc.\n' +
        '\n' + 'În 2008, Volkswagen a lansat Passat CC, o variantă „coupé cu patru uși” a modelului Passat.\n' +
        '\n' + 'În ianuarie 2011, Volkswagen a anunțat că va lansa un alt model Passat, desemnat intern Volkswagen New Midsize Sedan sau NMS, care va fi fabricat la uzina de asamblare Volkswagen Chattanooga.' +
        'SAIC-Volkswagen produce, de asemenea, Passat NMS în fabrica sa din Nanjing. ' +
        'Passat NMS este vândut pe piețele nord-americane, sud-coreene, chineze și din Orientul Mijlociu.';
    document.querySelector('.text_s2').style.fontSize='15px';
}

function fu_s3(){
    let par = document.querySelector('.text_s3');
    par.innerHTML = 'Volkswagen Golf este o mașină compactă produsă de Volkswagen. ' +
        'A fost gandit ca un înlocuitor pentru popularul Volkswagen Beetle. ' +
        'Este cel mai bine vândut model Volkswagen și a treia mașină ca vânzare din lume, până în 2005 fiind produse mai mult de 24 de milioane de exemplare.\n' +
        '\n' + 'Primul Golf (cunoscut în fabricile sub numele de cod Typ 17) a ieșit de pe linia de producție în 1974. ' +
        'În unele părți ale lumii acesta a fost lansat mai târziu (între 1975-1984) fiind cunoscut sub numele de Volkswagen Rabbit în Statele Unite și Canada și ca Volkswagen Caraibe în America Latină. ' +
        'Avea un motor răcit cu apă, tracțiune pe față ce a fost introdusă de Citroën Traction Avant în 1934 și un spate tăiat care a fost pentru prima dată folosit la Renault 4 în 1961. ' +
        'Golf-ul a fost desemnat de revista Wheels mașina anului 1975. ' +
        'Numele este o prescurtare de la Golf-Strom, denumirea germană a curentului Gulf Stream, fiind numit astfel pentru a-i accentua caracterul internațional.\n'
    document.querySelector('.text_s3').style.fontSize='15px';
}

let j=0;
let images_s3=[];
let time_s3=1500;
images_s3[0]="assets/vw_images/golf_1.jpg";
images_s3[1]="assets/vw_images/golf_2.jpg";
images_s3[2]="assets/vw_images/golf_3.jpg";
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