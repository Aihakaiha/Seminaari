<?php

$enimi = $_GET["enimi"];
$snimi = $_GET["snimi"];
$losoite = $_GET["losoite"];
$postinro = $_GET["postinro"];
$postitp = $_GET["postitp"];
$puh = $_GET["puh"];
$email = $_GET["email"];
$org = $_GET["org"];
$ammatti = $_GET["ammatti"];
$bd = $_GET["bd"];
$hinta = $_GET["hinta"];
$erv = $_GET["erv"];
$lisainfo = $_GET["lisainfo"];

$palvelin = "localhost";
$kayttaja = "root";
$salasana = "";
$tietokanta = "seminaari";

$link = mysqli_connect($palvelin, $kayttaja, $salasana, $tietokanta);

if(mysqli_connect_error())
{
	die("Tietokantaan ei saatu yhteyttä");
}

$inquiry = "INSERT INTO adminregisteri (etunimi, sukunimi, osoite, postinumero, postitoimipaikka, puhelinnumero, sahkoposti, tyonantaja, ammattinimike, 
syntymaaika, hintavaihtoehdot, erikosruokavalio, lisatietoja) VALUES
('$enimi', '$snimi', '$losoite', '$postinro', '$postitp', '$puh', '$email', '$org', '$ammatti', '$bd', '$hinta', '$erv', '$lisainfo')";
if (mysqli_query($link, $inquiry))
{
	echo "Sinun tietosi on tallennettu";
}
else 
{
	echo "Virhe: " . $inquiry . "<br>" . mysqli_error($link);
}
mysqli_close($link);
?>