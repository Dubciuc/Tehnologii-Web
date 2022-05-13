const loginForm = document.getElementById("lgin_form");
const regForm = document.getElementById("reg_form");

var errorMsg = "";

if(loginForm){
    loginForm.addEventListener('submit', function(e){
        e.preventDefault();

        if(validate_login()){
            loginForm.submit();
        }
    });
}

if(regForm){
    regForm.addEventListener('submit', function(e){
        e.preventDefault();

        if(validate_register()){
            regForm.submit();
        }
    });
}

function uname_validate(data){

    return data.length < 3 || data.length > 20 ? false : true;
}

function pass_validate(data){

    const checkLower = new RegExp("^(?=.*[a-z])");
    const checkUpper = new RegExp("^(?=.*[A-Z])");
    const checkSize = new RegExp("^(?=.{8,})");
    const checkNumber = new RegExp("^(?=.*[0-9])");

    if(!checkSize.test(data)){
        errorMsg = "Must be longer than 8 chars!";
        return false;
    }
    if(!checkLower.test(data)){
        errorMsg = "Must contain at least 1 lowercase!";
        return false;
    }
    if(!checkUpper.test(data)){
        errorMsg = "Must contain at least 1 uppercase!";
        return false;
    }
    if(!checkNumber.test(data)){
        errorMsg = "Must contain at least 1 number!";
        return false;
    }

    return true;
}

function req_field(data){

    return data === '' ? false : true;
}

function validate_login(){

    var flag = true;

    const uname = loginForm.elements['Username'];
    const upass = loginForm.elements['Password'];

    if(!req_field(uname.value)){
        uname.placeholder = "* Required field!";
        flag = false;
    }
    if(!req_field(upass.value)){
        upass.placeholder = "* Required field!";
        flag = false;
    }

    return flag;
}

function validate_register(){

    var flag = true;

    const uname = regForm.elements['Username'];
    const upass = regForm.elements['Password'];
    const upassConf = regForm.elements['confPassword'];

    if(!req_field(uname.value)){
        uname.placeholder = "* Required field!";
        flag = false;
    }
    if(!req_field(upass.value)){
        upass.placeholder = "* Required field!";
        flag = false;
    }
    if(!req_field(upassConf.value)){
        upassConf.placeholder = "* Required field!";
        flag = false;
    }

    if(!uname_validate(uname.value)){
        uname_err.innerHTML = "Must be between 3 and 20 chars!";
        flag = false;
    }
    if(!pass_validate(upass.value)){
        pass1_err.innerHTML = errorMsg;
        flag = false;
    }
    if(upass.value != upassConf.value){
        pass2_err.innerHTML = "Passwords don't match!";
        flag = false;
    }

    return flag;
}