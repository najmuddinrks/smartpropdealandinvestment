<?php
//echo "<pre>";print_r($_POST);
//die();
error_reporting(0);

$con=new PDO("mysql:hostname=localhost;dbname=real_estate_all_user_db","root","") or die("Error in connecting Database");
if(!empty($_POST))
{
	if($_POST['username']!='' && $_POST['password']!='' &&  $_POST['confirm_password']!='' &&  $_POST['mobile']!='' &&  $_POST['email']!='' &&  $_POST['message']!='')
	{
		$username=$_POST['username'];
		$password=$_POST['password'];
		$confirm_password=$_POST['confirm_password'];
		//$encry_pass=sha1($password);
		$mobile=$_POST['mobile'];
		$email=$_POST['email'];
		$message=$_POST['message'];
	$sql=$con->prepare("insert into all_user_db(username,password,confirm_password,mobile,email,message)values(?,?,?,?,?,?)");
	$sql->execute(array($username,$password,$confirm_password,$mobile,$email,$message));
	header('location:index.php');
	
	}
}



include('smtp/PHPMailerAutoload.php');
//$html="Dear Sir/Madam This is Mithilesh";
$html="<table><tr><td>Name</td><td>$username</td></tr>
		<tr><td>Password</td><td>$password</td></tr>
		<tr><td>Confirm Password</td><td>$confirm_password</td></tr>
		<tr><td>Mobile</td><td>$mobile</td></tr>
		<tr><td>Email</td><td>$email</td></tr>
		<tr><td>Message</td><td>$message</td></tr>
		</table>";
echo smtp_mailer('najmuddinmaredia5@gmail.com','sending mail',$html);

//smtp_mailer($username,'Update Password Link',$desc);

function smtp_mailer($to,$subject, $msg){
	$mail = new PHPMailer(); 
	$mail->SMTPDebug  = 3;
	$mail->IsSMTP(); 
	$mail->SMTPAuth = true; 
	$mail->SMTPSecure = 'tls'; 
	$mail->Host = "smtp.gmail.com";
	$mail->Port = 587; 
	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	$mail->Username = "rajbhar07mithilesh@gmail.com";
	$mail->Password = "adduracpyskoqjww";
	$mail->SetFrom("rajbhar07mithilesh@gmail.com");
	$mail->Subject = $subject;
	$mail->Body =$msg;
	$mail->AddAddress($to);
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>false,
		'verify_peer_name'=>false,
		'allow_self_signed'=>false
	));
	if(!$mail->Send()){
		echo $mail->ErrorInfo;
	}else{
		return 'Sent';
	}
}
?>
