<?php
if(isset($_POST['email'])) {
 
    // EDIT THE FOLLOWING LINES TO SUIT YOUR NEEDS
    $email_to = "arwafaizee142@gmail.com";
    $email_subject = "Contact form submission: ".$_POST['subject'];
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
    !isset($_POST['email']) ||
    !isset($_POST['subjects'])||
        !isset($_POST['message'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
    $name = $_POST['name']; // required
    $email_from = $_POST['email'];
    $email_from = $_POST['subjects']; // required
    $message = $_POST['message']; // required
 
    $error_message = "";
 
    if(!filter_var($email_from, FILTER_VALIDATE_EMAIL)) {
        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    }
 
    $email_message = "Form details below.\n\n";
 
    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }
 
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Subject: ".clean_string($subjects)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers); 
?>
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
}
?>
