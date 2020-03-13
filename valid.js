function validateForm() {
  var enimi = document.getElementById("enimi");
  var snimi = document.getElementById("snimi");
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

  if(snimi.value == "") {
    errors += "<li>Sukunimi on pakollinen</li>";
    snimi.style.outline = "1px solid #ff0000";
  } else {
    snimi.style.outline = "none";
  }

  if(enimi.value == "") {
    errors += "<li>Etunimi on pakollinen</li>";
    enimi.style.outline = "1px solid #ff0000";
  } else {
    enimi.style.outline = "none";
  }

  if(losoite.value == "") {
    errors += "<li>Lähiosoite on pakollinen</li>";
    losoite.style.outline = "1px solid #ff0000";
  } else {
    losoite.style.outline = "none";
  }

  if(postinro.value == "") {
    errors += "<li>Postinumero on pakollinen</li>";
    postinro.style.outline = "1px solid #ff0000";
  } else {
    postinro.style.outline = "none";
  }

  if(postitp.value == "") {
    errors += "<li>Postitoimipaikka on pakollinen</li>";
    postitp.style.outline = "1px solid #ff0000";
  } else {
    postitp.style.outline = "none";
  }

  if(puh.value == "") {
    errors += "<li>Puhelinnumero on pakollinen</li>";
    puh.style.outline = "1px solid #ff0000";
  } else {
    puh.style.outline = "none";
  }

  if(email.value == "") {
    errors += "<li>Sähköpostiosoite on pakollinen</li>";
    email.style.outline = "1px solid #ff0000";
  } else {
    email.style.outline = "none";
  }

  if(org.value == "") {
    errors += "<li>Työnantaja / Oppilaitos on pakollinen</li>";
    org.style.outline = "1px solid #ff0000";
  } else {
    org.style.outline = "none";
  }

  if(ammatti.value == "") {
    errors += "<li>Ammatti on pakollinen</li>";
    ammatti.style.outline = "1px solid #ff0000";
  } else {
    ammatti.style.outline = "none";
  }

  if(bd.value == "") {
    errors += "<li>Syntymäpäivä on pakollinen</li>";
    bd.style.outline = "1px solid #ff0000";
  } else {
    bd.style.outline = "none";
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
  } else {
    hintaStyle.outline = "none";
  }

  if(errors.length) {
    summary.innerHTML =
    "<font color=#ff0000><b>Korjaa seuraavat kohdat:</b><ul>" + errors + "</ul></font>";
    summary.focus()
    return false;
  }
}
