<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'From: Veronica Bruce'; 
    $to = 'veronicabruce@gmail.com'; 
    $subject = 'You have a new message from vcbruce.com';
    $human = $_POST['human'];
            
    $body = "$name ($email) sent you the following message:\n $message";
               
if ($_POST['submit'] && ($human == '4' || $human == 'four' || $human == 'Four' || $human == 'FOUR' ) ){                 
        if (mail ($to, $subject, $body, $from)) { 
        header('Location: index.html#contact');
        } else { 
            echo '<p>Oh no! Looks like a mysterious technology glitch. Please <a href="vcbruce.com#contact">go back</a> and try again!</p>'; 
        } 
    } else if ($_POST['submit'] && ($human != '4' || $human != 'four' || $human != 'Four' || $human != 'FOUR' )) {
        echo '<p>Oh no! Looks like you are either a spam bot or the unfortunate victim of a mysterious technology glitch. Please <a href="vcbruce.com#contact">go back</a> and try again!</p>'; 
    }
?>