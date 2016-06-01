(function () {
    var userNameField = document.getElementById("userName");
    var passwordField = document.getElementById("password");
    var submitBtn = document.getElementById("submit");
    submitBtn.disabled = true;
    var alertMsg = "";

    var validateInput = function () {
        var userName = userNameField.value.trim();
        var password = passwordField.value.trim();
        var isValidInput = true;

        if (userName === "" || userName.length < 3 || userName.length > 30) {
            alertMsg += "\nWrong Username! It should be at least 3 char!";
            userNameField.value = "";
            isValidInput = false;
        }

        if (password === "" || password.length < 3 || password.length > 30) {
            alertMsg += "\nWrong Password! It should be at least 3 char!";
            passwordField.value = "";
            isValidInput = false;
        }
        return isValidInput
    };

    var runValidation = function () {
        if (validateInput() != true) {
            submitBtn.disabled = true;
            alert(alertMsg);
            alertMsg = "";
        }
        else {
            createCookie();
            submitBtn.disabled = false;
        }
    };

    var createCookie = function () {
        if(checkIfCookieExist() != true) {
            document.cookie = "userName=" + userNameField.value.trim() + ", "
                + "password=" + passwordField.value.trim() + ";";
            console.log(document.cookie);
        }
    };

    var checkIfCookieExist = function () {
        var cookies = document.cookie;
        var isCookieExist = false;
        var splitCookies = cookies.split(";");

        for (var i = 0; i < splitCookies.length; i++) {
            var currentCookie = splitCookies[i];
            var currentUser = currentCookie.substring(currentCookie.indexOf("=") + 1, currentCookie.indexOf(","));

            if (currentUser === userNameField.value) {
                isCookieExist = true;
            }
        }
        return isCookieExist;
    };

    userNameField.addEventListener("change", runValidation);
    passwordField.addEventListener("change", runValidation);
    submitBtn.addEventListener("mouseover", runValidation);
}());

/*$(function(){
 workBelt();
 });
 ​
 function workBelt(){
 $('.menuUnit').click(function(){
 $('.work-belt').css('left','-100%');
 });

 $('.work-return').click(function(){
 $('.work-belt').css('left','0%');
 });
 }*/
