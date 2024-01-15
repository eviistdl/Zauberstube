//Funktion für Stoppuhr, id und string zum zuordnen von min oder sek
function idset(id, string) {
    document.getElementById(id).innerHTML = string;
  }
  var stoppuhr = (function() {
    var stop = 1;
    var mins = 0;
    var secs = 0;
  
    return {
      start: function() {
        //stop Wert auf 0, um zu starten
        stop = 0;
      },
      stop: function() {
        //stop Wert zurück auf 1, um zu stoppen
        stop = 1;
      },
      clear: function() {
        // Zeit zurück auf 0
        stoppuhr.stop();
        mins = 0;
        secs = 0;
        stoppuhr.html();
      },
      //sekunden zählen hoch, bis sie 60 erreichen, dann zählen die minuten hoch
      timer: function() {
        if (stop === 0) {
          secs++;
          if (secs === 60) {
            mins++;
            secs = 0;
          }
          stoppuhr.html();
        }
      },
      set: function(minuten, sekunden) {
        stoppuhr.stop();
        mins = minuten;
        secs = sekunden;
        stoppuhr.html();
      },
      getMins: function() { //um Minuten und Sekunden Daten zu holen
        return mins;
      },
      getSecs: function() {
        return secs;
      },
      html: function() {
        idset("minuten", mins);
        idset("sekunden", secs);
      }
    }
  })();
  
  // Starte die Stopuhr beim Laden der Seite
  document.addEventListener("DOMContentLoaded", function() {
    stoppuhr.start();
  });

   // Aktualisiere die Stopuhr alle 1000 Millisekunden (1 Sekunde)
   setInterval(stoppuhr.timer, 1000);
  
  
// Wenn handle 13 berührt, führe checkRezept aus
  function handleTouch13() {
    console.log("handle 13 wurde berührt")
      checkRezept();
}

  
//Anzeige, wenn falsche Zutaten ausgewählt
function zeigeAlertWrong() {
  var alertWrongDiv = document.querySelector(".alertWrong");

  if (alertWrongDiv) {
    // Div mit Text befüllen
    alertWrongDiv.innerHTML = "<p>" + "Versuche es nochmal!" + "</p>";

    // Nach 2 Sekunden die Fehlermeldung ausblenden
    setTimeout(function() {
      alertWrongDiv.innerHTML = "";
    }, 2000);
  }
}
function zeigeAlertRight() {
  var alertRightDiv = document.querySelector(".alertRight");

  if (alertRightDiv) {
    alertRightDiv.innerHTML = "<p>" + "Richtig, Nächstes Rezept!" + "</p>";

    setTimeout(function() {
      alertRightDiv.innerHTML = "";
    }, 2000);
  }
}

//Rezepte Texte
var RezeptArray = [
    '"Weiß bin ich und knochenhart, mische mich mit Rabenhaaren. Nun gibt es nicht mehr viel zu tun, mach mich zu mit Kerzenblut"',
    '"Schimmer, Glimmer und Veilchen Blätter. zuletzt ein Tuch von einem Ritter. "',
    '"Spitz und scharf bei Bedarf, Löckchen eines langen Barts. Es ist getan so soll es sein, bring den Stopfen von rotem Wein"',
    "",
  ];
  
  // Index = Rezept Nummer
  let Index = -1;
  // Holen des RezeptDiv-Elements
  var rezeptDiv = document.getElementById("RezeptDiv");
  
  function zeigeRezeptAn() {
    if (rezeptDiv) {
      rezeptDiv.innerHTML = "<p>" + RezeptArray[Index] + "</p>";
    }
    //Springen zum nächsten Array
    Index++;
  }
  
  // Aufruf von Rezepten
  zeigeRezeptAn();
  zeigeRezeptAn();

  // Image Switcher um zwischen Bildern zu wählen
    function ImageSwitcher(choices) {
        var i = 0; // i = nummer des momentanen Bildes im string

       this.Next = function () {
          hide_current_image();
          show_next_image();
        };
      
        var hide_current_image = function () {
          choices[i].style.visibility = "hidden";
          i += 1;
          if (i === choices.length) {
            i = 0;
          }
        }
        var show_next_image = function () {
            choices[i].style.visibility = "visible";
          }   
    }


  //Button Funktion definiert
  var ingredient1 = document.querySelectorAll(".ingredient1");
  var ing1_chooser = new ImageSwitcher(ingredient1);
  
  var ingredient2 = document.querySelectorAll(".ingredient2");
  var ing2_chooser = new ImageSwitcher(ingredient2);
  
  var Seal = document.querySelectorAll(".Seal");
  var Seal_chooser = new ImageSwitcher(Seal);
  
  document.getElementById("ingredient1_button").onclick = function () {
    ing1_chooser.Next();
  };
  document.getElementById("ingredient2_button").onclick = function () {
    ing2_chooser.Next();
  };
  document.getElementById("Seal_button").onclick = function () {
    Seal_chooser.Next();
  };
  


  //Variablen für alle Bilder Rezept 1
  var zahn = document.getElementById("Zahn");
  var feder = document.getElementById("Feder");
  var wachs = document.getElementById("Wachs");
  //Variablen für alle Bilder Rezept 2
  var kristal = document.getElementById("Kristal");
  var bluete = document.getElementById("Bluete");
  var tuch = document.getElementById("Tuch");
  //Variablen für alle Bilder Rezept 3
  var kralle = document.getElementById("Kralle");
  var haar = document.getElementById("Haar");
  var korken = document.getElementById("Korken");
  
  //Welche Bilder gehören zu welchem Rezept
  var bilderRezept0 = [zahn, feder, wachs];
  var bilderRezept1 = [kristal, bluete, tuch];
  var bilderRezept2 = [kralle, haar, korken];
  
  bilderRezept0.forEach((bild) => (bild.style.visibility = "hidden"));
  bilderRezept1.forEach((bild) => (bild.style.visibility = "hidden"));
  bilderRezept2.forEach((bild) => (bild.style.visibility = "hidden"));



  function checkRezept() {
    console.log("checking Rezept ...")

    //Wenn das div das 0.. Array enthält, wird geprüft, ob die richtigen Bilder gezeigt werden.
    
    if (rezeptDiv.innerHTML === "<p>" + RezeptArray[0] + "</p>") {
      // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
      var sichtbarBildRez0 = bilderRezept0.every((bild) => bild.style.visibility === "visible")
      if (sichtbarBildRez0) {//Wenn ja, wird die nächste aufgabe angezeigt
        zeigeAlertRight();
        zeigeRezeptAn();
    } else {
      zeigeAlertWrong();
      }
    }
  // Prüfen Rezept [1]
    if (rezeptDiv.innerHTML === "<p>" + RezeptArray[1] + "</p>") {
      // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
      var sichtbarBildRez1 = bilderRezept1.every((bild) => bild.style.visibility === "visible")
      if (sichtbarBildRez1) {
        zeigeAlertRight();
        zeigeRezeptAn();
      } 
      else {
          zeigeAlertWrong();
        }
    }

  // Prüfen Rezept [2]
  if (rezeptDiv.innerHTML === "<p>" + RezeptArray[2] + "</p>") {
    // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
    var sichtbarBildRez2 = bilderRezept2.every((bild) => bild.style.visibility === "visible")
    if (sichtbarBildRez2) {
        stoppuhr.stop();
        hideElementsByClass('Auswahl');
        hideElementsByClass('timer');
        zeigeRezeptAn();
        time();
        
        var congratsDiv = document.getElementById('congratsDiv');
        if (congratsDiv) {
            congratsDiv.style.visibility = 'visible';

            // Random Ingredients sollen angezeigt werden
            var ingredient1 = document.querySelectorAll(".ingredient1");
            randomImageSwitcher(ingredient1, 700);

            var ingredient2 = document.querySelectorAll(".ingredient2");
            randomImageSwitcher(ingredient2, 800);

            var seal = document.querySelectorAll(".Seal");
            randomImageSwitcher(seal, 600);
        }
    } 
    else {
      zeigeAlertWrong();
      }
    }
}



//Sobald alle Aufgaben bestanden:

  let preText = "Zeit:"; 
  let usedTimeDiv = document.getElementById("usedTimeDiv"); //holen des Divs
  let usedTime = stoppuhr.getMins() + " min " + stoppuhr.getSecs() + " sek"; //anzeigen der benötigten Zeit

  function time() {
    if (stoppuhr.stop) { //Uhr wird gestoppt und die Zeit im usedTimeDiv mit zusätzlichem Text angezeigt
        usedTime = stoppuhr.getMins() + " min " + stoppuhr.getSecs() + " sek";
        let result = preText + usedTime;
        usedTimeDiv.innerHTML = "<p>" + result + "</p>";
    }
  }

  //nehmen des Elements zum verstecken
  function hideElementsByClass(className) {
      var elements = document.getElementsByClassName(className);
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
      }
  }

  //Wie ImageSwitcher. Anzeige nicht in der Reihenfolge, sondern zufällig
  function randomImageSwitcher(choices, interval) {
    var i = 0;

    function showRandomImage() {
      hide_current_image();
      i = Math.floor(Math.random() * choices.length);
      choices[i].style.visibility = "visible";
    }

    function hide_current_image() {
      choices[i].style.visibility = "hidden";
    }

    // Initialisiere die Anzeige eines zufälligen Bildes
    showRandomImage();

    // Setze den Interval für die Anzeige zufälliger Bilder
    setInterval(showRandomImage, interval);
  }


