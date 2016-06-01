(function () {
    var userInput = document.getElementById("userName");
    var pass = document.getElementById("password");

    var doPass = function () {
        pass.value = userInput.value;
    };

    userInput.addEventListener("change", doPass);
}());

