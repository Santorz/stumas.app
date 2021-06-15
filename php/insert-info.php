<?php

header("Content-Type: application/json; charset=UTF-8");


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "group-4";
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$data = '';


$getuserObj = filter_input(INPUT_POST, "newUserDetails");
$userObj = json_decode($getuserObj, false);


// Create connection



if(!empty($userObj)){

  $sql = "INSERT INTO students (username, gender, matric_number)
  VALUES ('$userObj->username', '$userObj->gender', '$userObj->matric_number')";

  if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
  } 
  else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }


}else{
  
}



$conn->close();
?>
