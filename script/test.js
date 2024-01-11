//chat gpt:

function auswahlÜbergeben() {
    // Sammle die sichtbaren Bilder aus den Bildgruppen
    var auswahl = [];

    ingredient1.forEach(bild => {
        if (bild.style.visibility === "visible") {
            auswahl.push(bild);
        }
    });

    ingredient2.forEach(bild => {
        if (bild.style.visibility === "visible") {
            auswahl.push(bild);
        }
    });

    Seal.forEach(bild => {
        if (bild.style.visibility === "visible") {
            auswahl.push(bild);
        }
    });

    return auswahl;
}

function checkRezept() {
    //auswahl [];
    if (rezeptDiv.innerHTML === "<p>" + RezeptArray[0] + "</p>") {
        if (aktuelleBilder == zahn, feder, wachs){
            console.log ("Jippie")
        }
        else {
            console.log ("falsch :c")
        }
}}
var aktuelleBilder = auswahlÜbergeben();

// Eventlistener für den Fertig_Button hinzufügen
document.getElementById("fertig_button").onclick = function() {
    // Hier werden die momentan sichtbaren Bilder an die checkRezept-Funktion übergeben
    auswahlÜbergeben;
    console.log("Aktuelle Bildauswahl:", aktuelleBilder);

    // Hier rufst du die checkRezept-Funktion auf und übergibst die aktuelle Bildauswahl
    checkRezept(aktuelleBilder);
}




function checkRezept() {
    // Überprüfen, ob das aktuelle Rezept angezeigt wird
    if ((rezeptDiv.innerHTML === "<p>" + RezeptArray[1] + "</p>")&& bilderVisible0) {
        // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
        var bilderVisible0 = bilderRezept0.every(bild => bild.style.visibility === "visible");

        if (bilderVisible0) {
            console.log("Aufgabe Bestanden");
            zeigeRezeptAn(); // Hier könntest du das nächste Rezept anzeigen
        } else {
            console.log("Falsch: Nicht alle Bilder sind sichtbar.");
        }
    } else {
        console.log("Falsch: Es geht um ein anderes rezept");
    }
}

function checkRezept() {
    // Überprüfen, ob das aktuelle Rezept angezeigt wird
    if (rezeptDiv.innerHTML === "<p>" + rezept1 + "</p>") {
        // Überprüfen, ob die 3 richtigen Bilder sichtbar sind
        var sindBilderSichtbar = bilderRezept0.every(bild => bild.style.visibility === "visible");

        if (sindBilderSichtbar) {
            console.log("Aufgabe Bestanden");
            zeigeRezeptAn(); // Hier könntest du das nächste Rezept anzeigen
        } else {
            console.log("Falsch: Nicht alle Bilder sind sichtbar.");
        }
    } else {
        console.log("Falsch: Anderes Rezept wird angezeigt.");
    }
}

function checkRezept() {

    //Wenn der Array eines Rezeptes nagezeigt wird UND die 3 richtigen Bilder visible sind, wird das nächste Rezept angezeigt
    if (Index === 0 && zahn.style.visibility == "visible" && feder.style.visibility == "visible" && wachs.style.visibility == "visible"){
    console.log ("Aufgabe Bestanden");
    zeigeRezeptAn();
      } 

    //if (Index === 1 && (Kristal && Bluete && Tuch) == style == "visible") {
      //  console.log ("Aufgabe Bestanden");
        //zeigeRezeptAn();
        //}

        else {
        console.log ("falsch")
        }
}


function checkRezept() {
    // Den Bildern wird eine Variable zugeordnet
    

    //Wenn der Array eines Rezeptes nagezeigt wird UND die 3 richtigen Bilder visible sind, wird das nächste Rezept angezeigt
    if (zahn && feder && wachs == style.visibility == "visible"){
    console.log ("Aufgabe Bestanden");
    zeigeRezeptAn();
      } 

    //if (Index === 1 && (Kristal && Bluete && Tuch) == style == "visible") {
      //  console.log ("Aufgabe Bestanden");
        //zeigeRezeptAn();
        //}

        else {
        console.log ("falsch")
        }
}


//von chat gpt zum checkaufgabe
 this.checkAufgabe = function() {
        for (var j = 0; j < aufgabe1.length; j++) {
            //j ist der Inhalt der Aufgabe, definiert durch die ID, die dem Bild zugeordnet wurde
            var currentId = aufgabe1[j];

            if (!Array.from(choices).some(choice => choice.id === currentId && choice.style.visibility === "visible")){
                // Falls ein Bild in der Aufgabenstellung nicht sichtbar ist
                console.log("Falsch! Versuche es erneut.");
                return false; // Aufgabe nicht erfolgreich
            }
        }

        console.log("Herzlichen Glückwunsch! Du hast die Aufgabe erfolgreich gelöst.");
        return true; // Aufgabe erfolgreich abgeschlossen
    }





// Holen der Bildgruppen
var ZutatenGruppen = document.querySelectorAll('.ingredient1', '.ingredient2', '.Seal');

// Erstellen eines ImageSwitcher für die Bildgruppen
var ZutatenGruppenSwitcher = new ImageSwitcher(ZutatenGruppen);

// Eventlistener für den Fertig_Button hinzufügen
document.getElementById("fertig_button").onclick = function() {
    // Überprüfen der Aufgabenstellung und Gewinnbedingung
    var aufgabeBestanden = ZutatenGruppenSwitcher.checkAufgabe();

    if (aufgabeBestanden) {
        // Hier können Sie weitere Aktionen für den Gesamtsieg hinzufügen
        console.log("Gesamtaufgabe erfolgreich abgeschlossen!");
        
        // Hier können Sie eine neue Aufgabe setzen oder andere Aktionen ausführen
    }
}; 


// Eventlistener für den Fertig_Button hinzufügen
document.getElementById("fertig_button").onclick = function() {
    // Überprüfen der Aufgabenstellung und Gewinnbedingung
    var aufgabeBestanden = checkRezept();

    if (aufgabeBestanden) {
        // Hier können Sie weitere Aktionen für den Gesamtsieg hinzufügen
        console.log("Gesamtaufgabe erfolgreich abgeschlossen!");
        
        // Hier können Sie eine neue Aufgabe setzen oder andere Aktionen ausführen
    }
};




