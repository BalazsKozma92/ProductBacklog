<?php

	$con = mysql_connect();
	
	$user = 'root';
	$pass = '';
	$db = 'registration';
	
	$db = new mysqli('localhost', $user, $pass, $db) or die("Unable to connect.");

?>