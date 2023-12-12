<?php

$nome = addcslashes($_POST['nome']);
$email = addcslashes($_POST['email']);
$msg = addcslashes($_POST['msg']);

$para = 'luizifgti@gmail.com';
$assunto = "Visitou o Site";

$mensagem = "Nome:" .  $nome . "\n" . "Email:" . $email . "Mensagem:" . $msg;

$cabecario = "From: luizifgti@gmail.com"."\n"."Reply-to" . $email . "\n" . "X=mailer: PHP" .phpversion();

if(mail($para;$assunto,$mensagem,$cabecario)){
    echo ("Mensagem enviada com sucesso!");
}else{
    echo ("Erro ao enviar mensagem!");
}

?>