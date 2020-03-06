<?php

$enimi = $_GET["etunimi"]
$snimi = $_GET["sukunimi"]
$losoite = $_GET["lahiosoite"]
$postinro = $_GET["postinumero"]
$postitp = $_GET["postitoimipaikka"]
$maa = $_GET["maa"]
$puh = $_GET["puhelinnumero"]
$sahkop = $_GET["sahkoposti"]


$palvelin = "localhost"
$kayttaja = "root"
$salasana = "root"
$tietokanta = "seminaariform"
$portti = 3306

$link = mysqli_connect($palvelin, $kayttaja, $salasana, $tietokanta, $portti)