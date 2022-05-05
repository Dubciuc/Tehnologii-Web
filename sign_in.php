<?php session_start();
$_SESSION['errors'] = true;

if (count($_POST)){

    $utList = file_get_contents("assets/baza_date/utilizator.json");
    $utArray = json_decode($utList);

    $username = isset($_POST['Username']) ? $_POST['Username'] : '';
    $userpassword = isset($_POST['Password']) ? $_POST['Password'] : '';

    foreach($utArray as $value){

        if($value->nume == $username && $value->password == $userpassword){
            $_SESSION['errors'] = false;
            echo "<script>alert('Logat cu succes $username');
            document.location='index.php';
            localStorage.setItem('username','$username');
            localStorage.setItem('statusLog','true');
            </script>";
            break;
        }
    }
    if($_SESSION['errors'] == true){
        header("Location: log_in.php");
    }
}
?>