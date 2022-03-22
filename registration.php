<?php

session_start();

header('location:login.php');

$con = mysqli_connect('localhost' , 'root');
if ($con){
	echo " Connection Successful";
}else{
	echo "No connection";
}

mysqli_select_db($con, 'login_session');

$name = $_POST['username'];
$pass = $_POST['password'];


$q = "select * from signin where username = '$name' && password = '$pass' ";


$result = mysqli_query($con, $q);
$num = mysqli_num_rows($result);

if($num == 1){
	echo "Duplicate data";
}else{
	$qy = "insert into signin(username , password) values('$name' , '$pass')" ;
	mysqli_query($con , $qy);
}
?>