function idset(id, string) {
    document.getElementById(id).innerHTML = string;
  }
  
  var stoppuhr = (function() {
    var stop = 1;
    var mins = 0;
    var secs = 0;
  
    return {
      start: function() {
        stop = 0;
      },
      stop: function() {
        stop = 1;
      },
      clear: function() {
        stoppuhr.stop();
        mins = 0;
        secs = 0;
        stoppuhr.html();
      },
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
      getMins: function() {
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
  
  // Setze die Bedingung für das Stoppen der Uhr
  function checkRezept() {
    // ... (dein vorhandener Code)
  
    // Prüfen Rezept [1]
    if (rezeptDiv.innerHTML === "<p>" + RezeptArray[1] + "</p>") {
      // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
      var sichtbarBildRez1 = bilderRezept1.every((bild) => bild.style.visibility === "visible")
      if (sichtbarBildRez1) {
        console.log("Aufgabe Bestanden");
        stoppuhr.stop(); // Stoppe die Uhr 
      } 
    }
    // ... (dein weiterer Code)
  }
  
  // Eventlistener für den Fertig_Button hinzufügen
  document.getElementById("fertig_button").onclick = function () {
    checkRezept();
    resetBilder();
  };
  
  // Aktualisiere die Stopuhr alle 1000 Millisekunden (1 Sekunde)
  setInterval(stoppuhr.timer, 1000);
  
  
  // Starte die Stopuhr beim Laden der Seite
  document.addEventListener("DOMContentLoaded", function() {
    stoppuhr.start();
  });
  
  
  // Aktualisiere die Stopuhr alle 1000 Millisekunden (1 Sekunde)
  setInterval(stoppuhr.timer, 1000);
  

var RezeptArray = [
    '"Weiß bin ich und knochenhart, mische mich mit Rabenhaaren. Nun gibt es nicht mehr viel zu tun, mach mich zu mit Kerzenblut"',
    '"Schimmer, Glimmer und Veilchen Blätter. zuletzt ein Tuch von einem Ritter. "',
    '"Spitz und scharf bei Bedarf, Löckchen eines langen Barts. Es ist getan so soll es sein, bring den Stopfen von rotem Wein"',
    "Herzlichen Glückwunsch, du hast deine Trank-Brauerei Prüfung bestanden!",
  ];
  
  let Index = -1;
  // Holen des RezeptDiv-Elements
  var rezeptDiv = document.getElementById("RezeptDiv");
  
  function zeigeRezeptAn() {
    // Überprüfen, ob das Div-Element gefunden wurde
    if (rezeptDiv) {
      rezeptDiv.innerHTML = "<p>" + RezeptArray[Index] + "</p>";
    } else {
      console.error("Div-Element mit der ID 'RezeptDiv' wurde nicht gefunden.");
    }
  
    Index++;
  }
  
  // Aufruf von Rezepten
  zeigeRezeptAn();
  zeigeRezeptAn();

  // Image Switcher um zwischen Bildern zu wählen
    function ImageSwitcher(choices) {
        var i = 0;

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


  //Botton Funktion definiert
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
  
  var bilderRezept0 = [zahn, feder, wachs];
  var bilderRezept1 = [kristal, bluete, tuch];
  var bilderRezept2 = [kralle, haar, korken];
  
  // Hier setzt du die Sichtbarkeit aller Bilder zurück
  bilderRezept0.forEach((bild) => (bild.style.visibility = "hidden"));
  bilderRezept1.forEach((bild) => (bild.style.visibility = "hidden"));
  bilderRezept2.forEach((bild) => (bild.style.visibility = "hidden"));
  
  console.log(bilderRezept0);
  

  function checkRezept() {
    // Überprüfen, ob das aktuelle Rezept angezeigt wird
    console.log("checking Rezept ...")

    //Wenn das div das 0.. Array enthält, wird geprüft, ob die richtigen Bilder gezeigt werden.
    //Wenn ja, wird die nächste aufgabe angezeigt
    if (rezeptDiv.innerHTML === "<p>" + RezeptArray[0] + "</p>") {
      // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
      var sichtbarBildRez0 = bilderRezept0.every((bild) => bild.style.visibility === "visible")
      if (sichtbarBildRez0) {
        console.log("Aufgabe Bestanden");
        zeigeRezeptAn(); // Hier könntest du das nächste Rezept anzeigen
    } else {
        console.log ("falsche Auswahl")
      }
    }
  // Prüfen Rezept [1]
    if (rezeptDiv.innerHTML === "<p>" + RezeptArray[1] + "</p>") {
      // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
      var sichtbarBildRez1 = bilderRezept1.every((bild) => bild.style.visibility === "visible")
      if (sichtbarBildRez1) {
        console.log("Aufgabe Bestanden");
        zeigeRezeptAn();
      } 
    }

  // Prüfen Rezept [2]
  if (rezeptDiv.innerHTML === "<p>" + RezeptArray[2] + "</p>") {
    // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
    var sichtbarBildRez2 = bilderRezept2.every((bild) => bild.style.visibility === "visible")
    if (sichtbarBildRez2) {
        //stoppuhr.stop();
      console.log("Aufgabe Bestanden");
      hideElementsByClass('ingredient1');
      hideElementsByClass('ingredient2');
      hideElementsByClass('seal');
      hideElementsByClass('Auswahl');
      time();
    } 
    }
}

document.addEventListener("keydown", function(event) {
    // Überprüfe, ob die gedrückte Taste die "i"-Taste ist
    if (event.key === "i") {
        // Rufe die Funktion stoppuhr.stop() auf
        stoppuhr.stop();
        time();
        hideElementsByClass('ingredient1');
        hideElementsByClass('ingredient2');
        hideElementsByClass('seal');
        hideElementsByClass('Auswahl');
        hideElementsByClass('Rezept');
        hideElementsByClass('timer');
        zeigeRezeptAn();

        var congratsDiv = document.getElementById('congratsDiv');
        if (congratsDiv) {
            console.log("congratsDiv aufgerufen")
            congratsDiv.style.visibility = 'visible';
        }

    }
})

let preText = "Zeit:";
let usedTimeDiv = document.getElementById("usedTimeDiv");
let usedTime = stoppuhr.getMins() + " min " + stoppuhr.getSecs() + " sek";

function time() {
    if (stoppuhr.stop) {
        console.log("Zeit angehalten");
        let result = preText + usedTime;
        // Setze den result-Text in das HTML-Element
        usedTimeDiv.innerHTML = "<p>" + result + "</p>";
    }
}

  // Eventlistener für den Fertig_Button hinzufügen
  document.getElementById("fertig_button").onclick = function () {
    checkRezept();
  }




//Sobald alle Aufgaben bestanden:

function hideElementsByClass(className) {
    console.log("hideElementsByClass aufgerufen")
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
}
