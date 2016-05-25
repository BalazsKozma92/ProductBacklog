<?php

	$servername = "localhost";
	$uname = "root";
	$pw = "";
	$dbname = "registration";

	$con = new mysqli($servername, $uname, $pw, $dbname);
	
	if ($con->connect_error) {
		die("Connection failed: " . $con->connect_error);
	}
	
?>