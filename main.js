(function () {
    var userNameField = document.getElementById("userName");
    var passwordField = document.getElementById("password");
    var submitBtn = document.getElementById("submit");

    submitBtn.disabled = true;

    var userNameDiv = document.getElementById("userNameField");
    var passwordDiv = document.getElementById("passwordField");

    var validateInput = function () {
        var userName = userNameField.value.trim();
        var password = passwordField.value.trim();
        var isValidInput = true;

        removeWarning(userNameDiv);
        removeWarning(passwordDiv);

        if (userName === "" || userName.length < 3 || userName.length > 30) {
            showWarning(userNameDiv);
            isValidInput = false;
        }

        if (password === "" || password.length < 3 || password.length > 30) {
            showWarning(passwordDiv);
            isValidInput = false;
        }
        return isValidInput
    };

    var runValidation = function () {
        if (validateInput() != true) {
            submitBtn.disabled = true;
        }
        else {
            createCookie();
            submitBtn.disabled = false;
        }
    };

    var showWarning = function (divName) {
        var span = document.createElement("span");
        span.setAttribute("id", "span_" + divName.id);
        var warningMsg;

        if (divName.id == "userNameField") {
            warningMsg = document.createTextNode("*Username should be at least 3 characters long!");
        }
        if (divName.id == "passwordField") {
            warningMsg = document.createTextNode("*Password should be at least 3 characters long!");
        }

        span.appendChild(warningMsg);
        divName.appendChild(span);
    };

    var removeWarning = function (divName) {
        var span = document.getElementById("span_" + divName.id);
        if (span != null) {
            divName.removeChild(span);
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
