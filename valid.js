function validateForm() {
  var snimi = document.getElementById("snimi");
  var enimi = document.getElementById("enimi");
  var losoite = document.getElementById("losoite");
  var postinro = document.getElementById("postinro");
  var postitp = document.getElementById("postitp");
  var puh = document.getElementById("puh");
  var email = document.getElementById("email");
  var org = document.getElementById("org");
  var ammatti = document.getElementById("ammatti");
  var bd = document.getElementById("bd");
  var hinta = document.getElementsByName("hinta");
  var hintaStyle = document.getElementById("hinta").style;
  var summary = document.getElementById("valSummary");
  var errors = "";

  snimi.style.outline = "none";
  enimi.style.ouline = "none";
  losoite.style.outline = "none";
  postinro.style.ouline = "none";
  postitp.style.outline = "none";
  puh.style.ouline = "none";
  email.style.outline = "none";
  org.style.ouline = "none";
  ammatti.style.outline = "none";
  bd.style.ouline = "none";
  hintaStyle.outline = "none";
  summary.style.ouline = "none";

  if(snimi.value == "") {
    errors += "<li>Sukunimi on pakollinen</li>";
    snimi.style.outline = "1px solid #ff0000";
  }

  if(enimi.value == "") {
    errors += "<li>Etunimi on pakollinen</li>";
    enimi.style.outline = "1px solid #ff0000";
  }

  if(losoite.value == "") {
    errors += "<li>Lähiosoite on pakollinen</li>";
    losoite.style.outline = "1px solid #ff0000";
  }

  if(isNaN(postinro.value)) {
    errors += "<li>Vain numeroita postinumero kenttään</li>";
    postinro.style.outline = "1px solid #ff0000";
  }


  if(postinro.value == "") {
    errors += "<li>Postinumero on pakollinen</li>";
    postinro.style.outline = "1px solid #ff0000";
  }

  if(postitp.value == "") {
    errors += "<li>Postitoimipaikka on pakollinen</li>";
    postitp.style.outline = "1px solid #ff0000";
  }

  if(isNaN(puh.value)) {
    errors += "<li>Vain numeroita puhelinnumero kenttään</li>";
    puh.style.outline = "1px solid #ff0000";
  }

  if(puh.value == "") {
    errors += "<li>Puhelinnumero on pakollinen</li>";
    puh.style.outline = "1px solid #ff0000";
  }

  if(email.value == "") {
    errors += "<li>Sähköpostiosoite on pakollinen</li>";
    email.style.outline = "1px solid #ff0000";
  }

  if(org.value == "") {
    errors += "<li>Työnantaja / Oppilaitos on pakollinen</li>";
    org.style.outline = "1px solid #ff0000";
  }

  if(ammatti.value == "") {
    errors += "<li>Ammatti on pakollinen</li>";
    ammatti.style.outline = "1px solid #ff0000";
  }

  if(bd.value == "") {
    errors += "<li>Syntymäpäivä on pakollinen</li>";
    bd.style.outline = "1px solid #ff0000";
  }

    var hintaCheck=-1;
  for (var i=0; i < hinta.length;i++) {

    if (hinta[i].checked) {
        hintaCheck=i;
    }
  }

  if(hintaCheck==-1) {
    errors += "<li>Hinta on pakollinen</i>";
    hintaStyle.outline = "1px solid #ff0000";
  }

  if(errors.length) {
    summary.innerHTML =
    "<font color=#ff0000><b>Korjaa seuraavat kohdat:</b><ul>" + errors + "</ul></font>";
    summary.focus()
    return false;
  }
}
