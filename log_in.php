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
                <form action="index.php" target="_blank" >
                    <label class="label">
                        <input type="text" placeholder="Username or email" name="Username" class="form">
                        <input type="password" placeholder="Password" name="Password" class="form">
                    </label>
                    <button type="submit" class="sign">Sign In</button>
                </form>
            </div>
            <div class="log_2">OR</div>
            <div class="googleFacebook">
                <button type="button" class="google">Google</button>
                <button type="button" class="facebook">Facebook</button>
            </div>
            <div class="butt_reg">
                Not registered?
                <a href="reg.html" class="link">Sign Up</a>
            </div>
        </div>
    </div>
</div>
<script src="assets/js/log_in.js"></script>
</body>
</html>