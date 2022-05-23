<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="assets/css/reg.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <title>Reg</title>
</head>
<body>
<div class="container">
    <div class="container_log">
        <div class="text_main">
            Please Register To Continue
        </div>
        <div class="container_forms">
            <div class="text_form_main">
                Sign Up
            </div>
            <p style='color: red; text-align: center;'>
            <?php session_start();
                if(isset($_SESSION['errors']) && $_SESSION['errors']){
                echo $_SESSION['query_result'];
                $_SESSION['errors'] = false;
                }
            ?>
            </p>
            <div class="pas_log">
                <form action="sign_up.php" method="post" id="forms">
                    <label for="email"></label>
                        <input type="text" placeholder="Email" name="Username" class="form" id="email" data-reg="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$" >
                        <input type="password" placeholder="Password" name="Password" class="form" id="pass" data-reg="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$">
                        <input type="password" placeholder="Confirm password" name="confPassword" class="form" id="confPass" data-reg="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$">
                    </label>
                    <button type="submit" class="sign" id="btn">Sign Up</button>
                </form>
            </div>
            <div class="log_2">OR</div>
            <div class="googleFacebook">
                <button type="button" class="google">Google</button>
                <button type="button" class="facebook">Facebook</button>
            </div>
        </div>
    </div>
</div>
<script src="assets/js/check.js"></script>
</body>
</html>