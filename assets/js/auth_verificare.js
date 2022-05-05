var button_login = document.getElementById("btn_lgin");
var button_logout = document.getElementById('btn_lgot');

if(localStorage.getItem('statusLog') == 'true'){
    button_login.style.display = "none";
}else{
    button_logout.style.display = "none";
}

function logout(){
    localStorage.setItem('statusLog', 'false');
    location.reload();
}