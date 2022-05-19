const form = {
  username: document.getElementById('username'),
  password: document.getElementById('password'),
  submit: document.getElementById('btn'),
  messages: document.getElementById('form-messages')
};

form.submit.addEventListener('click', () => {
  const request = new XMLHttpRequest();

  request.onload = () => {
    console.log(request.responseText);
  };

  const requestData = 'username=${form.username.value}&password=${form.password.value}';
  console.log(requestData);
  
  request.open('post', 'sign_in.php');
  request.setRequestHeader('Content-type', 'application/x-www-fom-urlencoded');
  request.send(requestData);
})