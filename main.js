function goBack() {
    history.back();
}

function doFirst(){
	var box = document.getElementById("box")
	box.addEventListener("click", goThere, false);
}

window.addEventListener("load", doFirst, false);


function goThere(){
	window.location.href = "mainpage.html";
}