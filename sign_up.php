<?php session_start();
$_SESSION['errors'] = true;

if (count($_POST)){

    $utList = file_get_contents('assets/baza_date/utilizator.json');
    $utArray = json_decode($utList);

    $username = isset($_POST['Username']) ? $_POST['Username'] : '';
    $userpassword = isset($_POST['Password']) ? $_POST['Password'] : '';
    $confPassword = isset($_POST['confPassword']) ? $_POST['confPassword'] : '';

    foreach($utArray as $value){
        if($value->nume == $username){
            $_SESSION['errors'] = true;
            $_SESSION['query_result'] = 'Utilizator existent!';
            header("Location: reg.php");
            return;
        }
    }

    if($userpassword != $confPassword){
        $_SESSION['errors'] = true;
        $_SESSION['query_result'] = 'Nu corespunde parola!';
        header("Location: reg.php");
        return;
    }

    $utArray[] = ['nume' => $username, 'password' => $userpassword];
    $utList = json_encode($utArray);
    file_put_contents('assets/baza_date/utilizator.json', $utList);
    $_SESSION['errors'] = false;
    echo "<script>alert('Signed up successfully, log in now');
    document.location='log_in.php';</script>";
}
?>