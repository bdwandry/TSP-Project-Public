<!-- Checks to see if there is a current session or not-->
<?php
	include('config.php');
	session_start();
	
	$user_check = $_SESSION['login-user'];
	
	<!-- Select username from database where username matches from login -->	
	$ses_sql = mysqli_query($db, "select username from admin where username = '$user_check' ");
	
	$row = mysqli_fetch_array($ses_sql, MYSQLI_ASSOC);
	
	$login_session = $row['username'];
	
	if(!isset($_SESSION['login_user'])){
		header("location:login.php");
		die();
	}
?>

	