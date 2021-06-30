<?php 
	if(isset($_POST['submit']) && (!empty($_POST['email'])) && (!empty($_POST['name']))  && (!empty($_POST['company'])) && (!empty($_POST['phone']))
 && (!empty($_POST['company'])) && (!empty($_POST['phone'])))
	{
		$result = array(
			'name' => $_POST["name"],
			'phone' => $_POST["phone"]
		);
		echo json_encode($result);

}

?>