<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "group-4";

header("Content-Type: application/json; charset=UTF-8");

$data = [];



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$getusername = filter_input(INPUT_POST, "uname");
$usernameObj = json_decode($getusername, false);


if(!empty($usernameObj)){
  $sql = "SELECT * FROM students
          WHERE username = '$usernameObj->username' ";

  $result = $conn->query($sql);

  if ($result == true) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      array_push($data, $row);
    }
    echo(json_encode($data));
  } 
  else {
    echo "no results";
  }
}



$conn->close();
?>
