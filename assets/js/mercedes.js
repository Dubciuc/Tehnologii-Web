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
    par.innerHTML = 'Mercedes-Benz (adeseori prescurtat ca Mercedes ori doar Benz) este o marcă germană consacrată de automobile, autobuze, camioane și autoutilitare care este proprietatea companiei pe acțiuni DaimlerChrysler AG (cunoscută înaintea fuziunii sale cu Chrysler ca Daimler-Benz). ' +
        'În 2011, Mercedes-Benz era al doilea mare producător de vehicule de lux la nivel mondial.' +
        'Compania Daimler-Benz AG a fost înființată în 28 iunie 1926 când două companii, Benz & Cie. și Daimler Motoren Gesellschaft (DMG), au fuzionat.' +
        'Fondată în 1871, Benz & Cie., a fost una dintre cele mai importante dintre companiile fondate de Karl Benz, fiind și unul dintre cei mai vechi producători de autovehicule. ' +
        'DMG a fost o altă companie axată pe construcția de autovehicule, fondată de Gottlieb Daimler și Wilhelm Maybach în 1890. ' +
        'În 1900, Daimler a murit, iar Maybach a părăsit compania fondată de cei doi în 1890. ' +
        'Pe vremea aceea, cele două companii deveniseră deja rivale.'
    document.querySelector('.text_s1').style.fontSize='15px';
}


let i=0;
let images_s2=[];
let time_s2=1500;
images_s2[0]="assets/mercedes_images/ml_1.jpg";
images_s2[1]="assets/mercedes_images/ml_2.jpg";
images_s2[2]="assets/mercedes_images/ml_3.jpg";
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
    par.innerHTML = 'Mercedes-Benz M-class (redenumită clasa GLE în 2015 , din germană Geländewagen Lang E-Klasse - „SUV alungit de clasă E”) este o serie de crossovere premium de dimensiuni medii produse din 1997 de producătorul german Mercedes -Benz. ' +
        'Mașina a fost dezvoltată special pentru piața nord-americană și este primul produs al diviziei Mercedes-Benz din SUA. ' +
        'Internațional în SUA. În ierarhia claselor de produse Mercedes-Benz, gama de modele M/GLE este poziționată între clasele GLC și GLS.\n' +
        '\n' + 'Datorită faptului că simbolul „M” a fost deja patentat de BMW pentru modelele de înaltă performanță produse de filiala BMW M GmbH, companiile au convenit de comun acord că Mercedes-Benz își rezervă dreptul de a face referire la linia de crossover ca M. -Clasă, dar în desemnarea modelului se vor folosi caracterele „ML”[';
    document.querySelector('.text_s2').style.fontSize='15px';
}

function fu_s3(){
    let par = document.querySelector('.text_s3');
    par.innerHTML = 'Mercedes - AMG GT 4-Door Coupé este o mașină executivă introdusă în 2018 de Mercedes-AMG , comercializată ca o variantă cu cinci uși a mașinii sport cu două uși AMG GT .\n' +
        '\n' + 'În ciuda numelui și stilului, mașina nu se bazează pe mașina sport, ci mai degrabă pe Clasa E și Clasa CLS.' +
        'Designul GT cu 4 uși Coupé a fost influențat în principal de conceptul Mercedes-Benz AMG GT introdus cu câțiva ani înainte de producția de serie. ' +
        'AMG GT Coupé cu 4 uși folosește un aspect al motorului față cu tracțiune spate sau 4MATIC+ cu tracțiune integrală complet variabilă (polarizat pe spate) și este disponibil fie cu un motor 3.0 L M256 turbo / sase în linie supraalimentat . sau un motor V8 M177 dublu turbo de 4,0 L .' +
        'Motorul cu șase în linie are un turbocompresor convențional , precum și un sistem mild hybrid pe care Mercedes-Benz îl numește „ EQ Boost ”, care utilizează uncompresor acționat electric și un motor electric de 48 volți care, atunci când sunt combinate, produc 21 CP (16 kW) și 184 lb⋅ft (249 N⋅m) de cuplu în plus față de motorul pe benzină atunci când nu alimentează sistemul electric. '
    document.querySelector('.text_s3').style.fontSize='15px';
}

let j=0;
let images_s3=[];
let time_s3=1500;
images_s3[0]="assets/mercedes_images/amg_1.jpg";
images_s3[1]="assets/mercedes_images/amg_2.jpg";
images_s3[2]="assets/mercedes_images/amg_3.jpg";
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