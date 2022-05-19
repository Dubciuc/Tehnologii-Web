<?php 
session_start();

if (count($_POST)){

    $ok = true;
    $messages = array();

    $utList = file_get_contents("assets/baza_date/utilizator.json");
    $utArray = json_decode($utList);

    $username = isset($_POST['uname']) ? $_POST['uname'] : '';
    $userpassword = isset($_POST['password']) ? $_POST['password'] : '';

    if (!isset($username) || empty($username)) {
        $ok = false;
        $messages[] = 'Email incorect';
    }

    if(!isset($userpassword) || empty($userpassword)) {
        $ok = false;
        $messages[] = 'Parola incorecta';
    }

    if ($ok) {
    foreach($utArray as $value) {
        if($value->nume == $username && $value->password == $userpassword){
            $ok = true;
            $messages[] = 'Logat cu succes';
            return;
        } else {
            $ok = false;
            $messages[] = 'Email sau parola incorecta';
        }
    }
    
    echo $ok;
}
?>