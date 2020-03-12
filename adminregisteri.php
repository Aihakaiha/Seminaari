<?php

$enimi = $_GET["etunimi"];
$snimi = $_GET["sukunimi"];
$losoite = $_GET["osoite"];
$postinro = $_GET["postinumero"];
$postitp = $_GET["postitoimipaikka"];
$puh = $_GET["puhelinnumero"];
$email = $_GET["sahkoposti"];
$org = $_GET["tyonantaja/oppilaitos"];
$ammatti = $_GET["ammattinimike"];
$bd = $_GET["syntymaaika"];
$hinta = $_GET["hintavaihtoehdot"];
$erv = $_GET["erikosruokavalio"];
$lisainfo = $_GET["lisatietoja"];

$palvelin = "localhost";
$kayttaja = "root";
$salasana = "";
tietokanta = "seminari";

$link = mysqli_connect($palvelin, $kayttaja, $salasana, $tietokanta);

if(mysqli_connect_error())
{
	die("Tietokantaan ei saatu yhteyttä");
}

$inquiry = "INSERT INTO seminarirekisteri (etunimi, sukunimi, osoite, postinumero, postitoimipaikka, puhelinnumero, sahkoposti, tyonantaja, ammattinimike, 
syntymaaika, hintavaihtoehdot, erikosruokavalio, lisatietoja) VALUES
('$enimi', '$snimi', '$losoite', '$postinro', '$postitp', '$puh', '$email', '$org', '$ammatti', '$bd', '$hinta', '$erv', '$lisainfo')";
if (mysqli_query($link, $inquiry))
{
	echo "Sinun tietosi on tallennettu"
}
else 
{
	echo "Virhe: " . $inquiry . "<br>" . mysqli_error($link);
}
mysqli_close($link);
?>