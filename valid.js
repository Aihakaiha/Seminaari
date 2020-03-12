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
  var bm = document.getElementById("bm");
  var by = document.getElementById("by");
  var hinta = document.getElementById("hinta");
  var errors = "";

  if(enimi.value == "") {
    errors += "<li>Etunimi puuttuu</li>";
    enimi.style.border = "1px solid #ff0000";
  }

  if(snimi.value == "") {
    errors += "<li>Sukunimi puuttuu</li>";
    snimi.style.border = "1px solid #ff0000";
  }

  if(losoite.value == "") {
    errors += "<li>Lähiosoite puuttuu</li>";
    losoite.style.border = "1px solid #ff0000";
  }

  if(postinro.value == "") {
    errors += "<li>Postinumero puuttuu</li>";
    postinro.style.border = "1px solid #ff0000";
  }

  if(postitp.value == "") {
    errors += "<li>Postitoimipaikka puuttuu</li>";
    postitp.style.border = "1px solid #ff0000";
  }

  if(puh.value == "") {
    errors += "<li>Puhelinnumero puuttuu</li>";
    puh.style.border = "1px solid #ff0000";
  }

  if(email.value == "") {
    errors += "<li>Sähköpostiosoite puuttuu</li>";
    email.style.border = "1px solid #ff0000";
  }

  if(errors.length) {
    document.getElementById("valSummary").innerHTML =
    "<font color=#ff0000><b>Korjaa seuraavat kohdat:</b><ul>" + errors + "</ul></font>";
    return false;
  }
}
