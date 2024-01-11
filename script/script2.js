// Funktion: checkAufgabe: if ingredient1 = "source name"=visible aus aufgabe1, ingredient2 = "source name"=visible aus aufgabe 1

/*
if (aufgabe1) {
    console.log ("aufgabe 1: Zahn, Feder, Wachs" )
}*/





// Index = welches Rezept angezeit wird
let Index = -1;

// Funktion zum Anzeigen des Rezepttextes in RezeptDiv
function zeigeRezeptAn() {
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
        rezeptDiv.innerHTML = "<p>" + RezeptArray[Index] + "</p>";
    }
    Index++;
}

// Aufruf von Rezepten
zeigeRezeptAn();
zeigeRezeptAn()

function checkAufgabe() {
    // Überprüfe, ob der Index gültig ist und die Aufgabenstellung für Index 0 erfüllt ist
    if (Index === 0 && checkBilder1()) {
        console.log("Aufgabe erfüllt");
        // Hier kannst du weitere Aktionen für den Erfolg hinzufügen
        resetBilder(); // Setze die Bilder zurück
        zeigeRezeptAn(); // Zeige das nächste Rezept an
    } else {
        console.log("Aufgabe nicht erfüllt");
        // Hier könntest du Code für den Fall hinzufügen, dass die Aufgabe nicht erfüllt wurde
    }
}

function checkBilder1() {
    // Überprüfe, ob die Bilder mit den IDs "Zahn", "Feder" und "Wachs" sichtbar sind
    var zahn = document.getElementById("Zahn");
    var feder = document.getElementById("Feder");
    var wachs = document.getElementById("Wachs");

    return zahn.style.visibility === "visible" &&
           feder.style.visibility === "visible" &&
           wachs.style.visibility === "visible";
}



// Eventlistener für den Fertig_Button hinzufügen
document.getElementById("fertig_button").onclick = function() {
    // Überprüfen der Aufgabenstellung und Gewinnbedingung
    var aufgabeBestanden = checkAufgabe();

    if (aufgabeBestanden) {
        // Hier können Sie weitere Aktionen für den Gesamtsieg hinzufügen
        console.log("Gesamtaufgabe erfolgreich abgeschlossen!");
        
        // Hier können Sie eine neue Aufgabe setzen oder andere Aktionen ausführen
    }
};







/*
// Funktion zum überprüfen der Aufgabe
function checkAufgabe() {
    // Annahme: Du hast ein Array mit Rezepten

    // Aufgabenstellungen
    var aufgabe1 = ['Zahn', 'Feder', 'Wachs'];
    var aufgabe2 = ['Kristal', 'Bluete', 'Tuch'];
    var rightAnswer = 
    // Überprüfen, ob das Div-Element gefunden wurde
    if (RezeptArray[0]) {
        
    }

    Index++;
}*/


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
}


/*
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
}; */


/*var aufgabe1 = ['Zahn'+'Feder'+'Wachs']; // Klassen entsprechend Ihrer Bilder*/

var ingredient1 = document.querySelectorAll(".ingredient1");
var ing1_chooser = new ImageSwitcher(ingredient1, aufgabe1);

var ingredient2 = document.querySelectorAll(".ingredient2");
var ing2_chooser = new ImageSwitcher(ingredient2, aufgabe1);

var Seal = document.querySelectorAll(".Seal");
var Seal_chooser = new ImageSwitcher(Seal, aufgabe1);

document.getElementById("ingredient1_button").onclick = function() { ing1_chooser.Next(); };
document.getElementById("ingredient2_button").onclick = function() { ing2_chooser.Next(); };
document.getElementById("Seal_button").onclick = function() { Seal_chooser.Next(); }

/*document.getElementById("fertig_button").onclick = function() {
    // Überprüfen der Aufgabenstellung und Gewinnbedingung
    var aufgabeBestanden = ing1_chooser.checkAufgabe() && ing2_chooser.checkAufgabe() && Seal_chooser.checkAufgabe ();
};*/


