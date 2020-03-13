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
  var summary = document.getElementById("valSummary");
  var errors = "";

  if(snimi.value == "") {
    errors += "<li>Sukunimi puuttuu</li>";
    snimi.style.outline = "1px solid #ff0000";
  } else {
    snimi.style.outline = "none";
  }

  if(enimi.value == "") {
    errors += "<li>Etunimi puuttuu</li>";
    enimi.style.outline = "1px solid #ff0000";
  } else {
    enimi.style.outline = "none";
  }

  if(losoite.value == "") {
    errors += "<li>Lähiosoite puuttuu</li>";
    losoite.style.outline = "1px solid #ff0000";
  } else {
    losoite.style.outline = "none";
  }

  if(postinro.value == "") {
    errors += "<li>Postinumero puuttuu</li>";
    postinro.style.outline = "1px solid #ff0000";
  } else {
    postinro.style.outline = "none";
  }

  if(postitp.value == "") {
    errors += "<li>Postitoimipaikka puuttuu</li>";
    postitp.style.outline = "1px solid #ff0000";
  } else {
    postitp.style.outline = "none";
  }

  if(puh.value == "") {
    errors += "<li>Puhelinnumero puuttuu</li>";
    puh.style.outline = "1px solid #ff0000";
  } else {
    puh.style.outline = "none";
  }

  if(email.value == "") {
    errors += "<li>Sähköpostiosoite puuttuu</li>";
    email.style.outline = "1px solid #ff0000";
  } else {
    email.style.outline = "none";
  }

  if(bd.value == "") {
    errors += "<li>Syntymäpäivä on pakollinen</li>";
    bd.style.outline = "1px solid #ff0000";
  } else {
    bd.style.outline = "none";
  }

    var hintaCheck=-1;
  for (var i=0; i < hinta.length;i++)
  {
    if (hinta[i].checked)
    {
        hintaCheck=i;
    }
  }

  if(hintaCheck==-1)
  {
    errors += "<li>Valitse hinta</i>";
  }

  if(errors.length) {
    summary.innerHTML =
    "<font color=#ff0000><b>Korjaa seuraavat kohdat:</b><ul>" + errors + "</ul></font>";
    summary.focus()
    return false;
  }
}
