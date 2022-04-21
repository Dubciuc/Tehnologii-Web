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
            <div class="pas_log">
                <form action="log_in.php" target="_blank" >
                    <label class="label">
                        <input type="text" placeholder="Email" name="Email" class="form">
                        <input type="password" placeholder="Password" name="Password" class="form">
                        <input type="text" placeholder="Country" name="Country" class="form">
                    </label>
                    <button type="submit" class="sign">Sign Up</button>
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
<script src="assets/js/reg.js"></script>
</body>
</html>