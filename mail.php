<?php
    if ( $_POST){

    require 'phpmailer/PHPMailerAutoload.php';

    $mail = new PHPMailer; 
    $mail->isSMTP();

    $mail->Host = 'smtp.mail.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'islomzokirov777@mail.ru';
    $mail->Password = 'rRp(yeoEOP21';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = '465';

    $mail->CharSet = 'utf-8';
    $mail->From = 'islomzokirov777@mail.ru';
    $mail->addAddress("{$_POST['mail']}", 'Name');

    $mail->isHTML(true);  

    $mail->Subject = "Ответ обмен валюты";
    $mail->Body = "Сумма, руб: {$_POST['target']} <br> Валюта для конвертации: {$_POST['currencies']} <br> Сумма в валюте: {$_POST['response']} <br> Ваш email: {$_POST['mail']} ";
    $mail->AltBody ="Имя: {$_POST['name']} <br> Телефон: {$_POST['tel']} <br> Комментарий: {$_POST['comment']}";


    if ($mail->send() ){
        $answer = '1';
        }
        else {
          $answer = '0';  
        }
    die ($answer);
    }
?>