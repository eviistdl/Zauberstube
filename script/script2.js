// Aufgabenstellung
var aufgabe1 = ['Zahn', 'Feder', 'Wachs'];
var aufgabe2 = ['Kristal', 'Bluete', 'Tuch'];

if (aufgabe1) {
    console.log ("aufgabe 1: Zahn, Feder, Wachs" )
}


// Funktion zum Anzeigen des Rezepttextes in RezeptDiv
function zeigeRezeptAn(aufgabeIndex) {
    // Annahme: Du hast ein Array mit Rezepten
    var RezeptArray = [
        '"Weiß bin ich und knochenhart, mische mich mit Rabenhaaren. Nun gibts nicht mehr viel zu tun, mach mich zu mit Kerzenblut"',
        '"Schimmer, Glimmer und Veilchen Blätter. zuletzt ein Tuch von einem Ritter. "',
        '"Spitz und scharf bei Bedarf, Löckchen eines langen Barts. Es ist getan so soll es sein, bring den Stopfen von rotem Wein"'
    ];

    // Holen des RezeptDiv-Elements
    var rezeptDiv = document.getElementById("RezeptDiv");

    // Überprüfen, ob das Div-Element gefunden wurde
    if (rezeptDiv) {
        // Überprüfen, ob die aktive Aufgabe die erste Aufgabe ist
        if (Index === 1) {
            // Setzen des innerHTML-Inhalts des Divs auf den Rezepttext
            rezeptDiv.innerHTML = "<p>" + RezeptArray[0] + "</p>";
        } else {
            // Falls die aktive Aufgabe nicht die erste ist, leere das Div
            rezeptDiv.innerHTML = "";
        }
    } else {
        console.error("Div-Element mit der ID 'RezeptDiv' wurde nicht gefunden.");
    }
}

// Annahme: Du hast deine Spiellogik und ImageSwitcher bereits implementiert

// Beispielaufruf für die Anzeige des Rezepttextes bei Aufgabe 1
zeigeRezeptAn(1);

    
// Image Switcher um zwischen Bildern zu wählen
function ImageSwitcher(choices) {
    var i = 0;

    this.Next = function() {
        hide_current_image();
        show_next_image();
    }

    var hide_current_image = function() {
        choices[i].style.visibility = "hidden";
        i += 1;
        if (i === choices.length) {
            i = 0;
        }
    }

    var show_next_image = function() {
        choices[i].style.visibility = "visible";
    }

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

//Auswahl Buttons
var ingredient1 = document.querySelectorAll(".ingredient1");
var ing1_chooser = new ImageSwitcher(ingredient1, aufgabe1);

var ingredient2 = document.querySelectorAll(".ingredient2");
var ing2_chooser = new ImageSwitcher(ingredient2, aufgabe1);

var Seal = document.querySelectorAll(".Seal");
var Seal_chooser = new ImageSwitcher(Seal, aufgabe1);

document.getElementById("ingredient1_button").onclick = function() { ing1_chooser.Next(); };
document.getElementById("ingredient2_button").onclick = function() { ing2_chooser.Next(); };
document.getElementById("Seal_button").onclick = function() { Seal_chooser.Next(); }



//Image Switcher um zwischen zutaten zu wählen
/*function ImageSwitcher(choices, aufgabe) {
    var i = 0;

    this.Next = function() {
        hide_current_image();
        show_next_image();
    }
// img wird versteckt, dadurch dass i nun 1 ist, wird das nächste Bild aufgegriffen
// Wenn alle Bilder durchlaufen sind, fängt die Bild Rotation wieder von vorne an
    var hide_current_image = function() {
        choices[i].style.visibility = "hidden";
        i += 1;
        if (i === choices.length) {
            i = 0;
        }
    }

//das nächste Bild wird sichtbar
    var show_next_image = function() {
        choices[i].style.visibility = "visible";
    }

    this.checkAufgabe = function() {
        if (i < aufgabe.length &&
            choices[i].classList.contains(aufgabe[i])) {
            // Die aktuelle Auswahl stimmt mit der Aufgabenstellung überein
            console.log("Richtig! Du hast das Bild in der richtigen Reihenfolge ausgewählt.");

            // Überprüfen, ob alle Aufgaben abgeschlossen sind
            if (i === choices.length - 1) {
                console.log("Herzlichen Glückwunsch! Du hast die Aufgabe erfolgreich gelöst.");
                // Hier können Sie weitere Aktionen für den Gewinn hinzufügen
                return true; // Aufgabe erfolgreich abgeschlossen
            }

            // Es gibt noch mehr Aufgaben, also fahre fort
            return false;
        } else {
            console.log("Falsch! Versuche es erneut.");
            return false; // Aufgabe nicht erfolgreich
        }
    }
}*/

/*var aufgabe1 = ['Zahn'+'Feder'+'Wachs']; // Klassen entsprechend Ihrer Bilder

var ingredient1 = document.querySelectorAll(".ingredient1");
var ing1_chooser = new ImageSwitcher(ingredient1, aufgabe1);

var ingredient2 = document.querySelectorAll(".ingredient2");
var ing2_chooser = new ImageSwitcher(ingredient2, aufgabe1);

var Seal = document.querySelectorAll(".Seal");
var Seal_chooser = new ImageSwitcher(Seal, aufgabe1);

document.getElementById("ingredient1_button").onclick = function() { ing1_chooser.Next(); };
document.getElementById("ingredient2_button").onclick = function() { ing2_chooser.Next(); };
document.getElementById("Seal_button").onclick = function() { Seal_chooser.Next(); }

document.getElementById("fertig_button").onclick = function() {
    // Überprüfen der Aufgabenstellung und Gewinnbedingung
    var aufgabeBestanden = ing1_chooser.checkAufgabe() && ing2_chooser.checkAufgabe() && Seal_chooser.checkAufgabe ();
};
*/

