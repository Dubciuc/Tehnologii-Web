<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="assets/css/log_in.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <title>Log in</title>
</head>
<body>
<div class="container">
    <div class="container_log">
        <div class="text_main">
            Please Login To Continue
        </div>
        <div class="container_forms">
            <div class="text_form_main">
                Sign In
            </div>
            <div class="pas_log">
                <ul id="form-messages">
                </ul>
                <form action="sign_in.php" method="post" id="forms">
                    <label for="username"></label>
                    <input type="text" placeholder="Email" name="Username" spellcheck="false" id="username" class="form" data-reg="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$">
                    <label for="password"></label>
                    <input type="password" placeholder="Password" id="password" name="Password" class="form"  data-reg="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$">
                    <button type="submit" class="sign" id="btn">Sign In</button>
                </form>
            </div>
            <div class="log_2">OR</div>
            <div class="googleFacebook">
                <button type="button" class="google">Google</button>
                <button type="button" class="facebook">Facebook</button>
            </div>
            <div class="butt_reg">
                Not registered?
                <a href="reg.php" class="link">Sign Up</a>
            </div>
        </div>
    </div>
</div>
<script src="assets/js/log_in.js"></script>
<script src = "assets/js/check_log.js"></script>
</body>
</html>