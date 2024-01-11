/* TO DO
- checkRezept Funktion: if (Index == 0 && richtige Bilder angezeigt), dann index ++ 
  und das für jede Rezept
  else: try again
- Gestaltung
- Generatives Element
- ESP Fertig Button
*/

function resetBilder() {
    bilderRezept0.forEach(bild => {
        bild.style.visibility = "hidden";
    });
    bilderRezept1.forEach(bild => {
        bild.style.visibility = "hidden";
    });
    bilderRezept2.forEach(bild => {
        bild.style.visibility = "hidden";
    });
}

// Aufruf der Funktion beim Laden der Seite
window.onload = resetBilder;

var RezeptArray = [
    '"Weiß bin ich und knochenhart, mische mich mit Rabenhaaren. Nun gibt es nicht mehr viel zu tun, mach mich zu mit Kerzenblut"',
    '"Schimmer, Glimmer und Veilchen Blätter. zuletzt ein Tuch von einem Ritter. "',
    '"Spitz und scharf bei Bedarf, Löckchen eines langen Barts. Es ist getan so soll es sein, bring den Stopfen von rotem Wein"'
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
    if (rezeptDiv.innerHTML === "<p>" + RezeptArray[0] + "</p>") {
      // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
      var sichtbarBildRez0 = bilderRezept0.every((bild) => bild.style.visibility === "visible")
       
  
      if (sichtbarBildRez0) {
        console.log("Aufgabe Bestanden");
        zeigeRezeptAn(); // Hier könntest du das nächste Rezept anzeigen
      } 
      else {
        console.log ("falsche Auswahl")
      }
    }
  
    if (rezeptDiv.innerHTML === "<p>" + RezeptArray[1] + "</p>") {
      // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
      var sichtbarBildRez1 = bilderRezept1.every((bild) => bild.style.visibility === "visible"
      );
  
      if (sichtbarBildRez1) {
        console.log("Letzte Aufgabe Bestanden");
        zeigeRezeptAn(); // Hier könntest du das nächste Rezept anzeigen
      } 
    }
  }
  
  // Wenn das div das 2. Array enthält, wird geprüft, ob die richtigen Bilder gezeigt werden
  if (rezeptDiv.innerHTML === "<p>" + RezeptArray[2] + "</p>") {
    // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
    var sichtbarBildRez2 = bilderRezept2.every(
      (bild) => bild.style.visibility === "visible"
    );
  
    if (sichtbarBildRez2) {
      console.log("Aufgabe Bestanden");
      alert("Glückwunsch! Deine Zaubertrankausbildung ist abgeschlossen!");
    } 
  }
  
  // Eventlistener für den Fertig_Button hinzufügen
  document.getElementById("fertig_button").onclick = function () {
    // Überprüfen der Aufgabenstellung und Gewinnbedingung
    resetBilder();
    checkRezept();
  };
  