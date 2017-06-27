<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
	include 'config.php';
		global $conn;
	  $sql = "SELECT id,name, author FROM knjiga";
	  if($stmt = $conn->prepare($sql)) 
	  {
	    $stmt->execute();
	    if(!$stmt->execute()) 
	    { 
	            echo $stmt->error;
	    }
	    else {
	        $parameters = array();
	        $result = $stmt->get_result();
	        while ($row = $result->fetch_assoc()) {
	          array_push($parameters,$row);
	        }
	        $stmt->close(); 
	        
	    }
	  }
	
	echo json_encode($parameters)
?>