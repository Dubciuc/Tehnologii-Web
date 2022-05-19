<?php 
session_start();

if (count($_POST)){

    $ok = true;

    $utList = file_get_contents('assets/baza_date/utilizator.json');
    $utArray = json_decode($utList);

    $username = isset($_POST['Username']) ? $_POST['Username'] : '';
    $userpassword = isset($_POST['Password']) ? $_POST['Password'] : '';
    $confPassword = isset($_POST['confPassword']) ? $_POST['confPassword'] : '';
    
    foreach($utArray as $value){

        if($value->nume == $username){
            echo $ok;
            return;
        }
    }
    
    $utArray[] = ['nume' => $username, 'password' => $userpassword];
    $utList = json_encode($utArray);
    file_put_contents('assets/baza_date/utilizator.json', $utList);
}
?>