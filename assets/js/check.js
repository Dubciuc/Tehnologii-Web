var path = window.location.pathname;
var page = path.split("/").pop();

const form = document.forms["forms"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["btn"];

formArr.forEach((el) => {
  if (el.hasAttribute("data-reg")) {
    el.setAttribute("is-valid", "0");
    validFormArr.push(el);
  }
});

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({ target }) {
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg = new RegExp(inputReg);
  if (reg.test(inputValue)) {
    el.setAttribute("is-valid", "1");
    el.style.border = "2px solid rgb(0, 196, 0)";
  } else {
    el.setAttribute("is-valid", "0");
    el.style.border = "2px solid rgb(255, 0, 0)";
  }
}

function buttonHandler(e) {

  const allValid = [];

  validFormArr.forEach((el) => {
    allValid.push(el.getAttribute("is-valid"));
  });
  const isAllValid = allValid.reduce((acc, current) => {
    return acc && current;
  });

  if (!Boolean(Number(isAllValid))) {
    e.preventDefault();
  }else{
    e.preventDefault();

    if(page == "log_in.php"){
      var usname = form.elements['Username'].value;
      var uspass = form.elements['Password'].value;
  
      $.ajax({
        type: "POST",
        url: "../sign_in.php",
        data: {
          "Username": usname,
          "Password": uspass
        },
        dataType: "html",
        success: function(d){
          if(d == true){
            document.getElementById("err").innerHTML = "Login sau Parola gresita!"
          }else{
            document.location = "../index.php";
            localStorage.setItem('username', usname);
            localStorage.setItem('statusLog','true');
          }
        }
      });
    }else{
      var usname = form.elements['Username'].value;
      var uspass = form.elements['Password'].value;
      var uspass2 = form.elements['confPassword'].value;
  
      if(uspass != uspass2){
        document.getElementById("err").innerHTML = "Parolele nu coincid!"
        return;
      }

      $.ajax({
        type: "POST",
        url: "../sign_out.php",
        data: {
          "Username": usname,
          "Password": uspass
        },
        dataType: "html",
        success: function(d){
          if(d == true){
            document.getElementById("err").innerHTML = "Inregistrare esuata!"
          }else{
            alert('Inregistrat cu succex.');
            document.location = '../log_in.php';
          }
        }
      });
    }
z

  }
}