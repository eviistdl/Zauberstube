var RezeptArray = [
    '"Weiß bin ich und knochenhart, mische micht mit Rabenhaaren. Nun gibts nicht mehr viel zu tun, mach mich zu mit Kerzenblut"',
    '"Schimmer, Glimmer und Veilchen Blätter. zuletzt ein Tuch von einem Ritter. "',
    '"Spitz und scharf bei Bedarf, Löckchen eines langen Barts. Es ist getan so soll es sein, bring den Stopfen von rotem Wein"'
]

//Image Switcher um zwischen zutaten zu wählen
function ImageSwitcher(choices, aufgabe) {
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
}

var aufgabe1 = ['ing1.1', 'ing2.3']; // Klassen entsprechend Ihrer Bilder

var ingredient1 = document.querySelectorAll(".ingredient1");
var ing1_chooser = new ImageSwitcher(ingredient1, aufgabe1);

var ingredient2 = document.querySelectorAll(".ingredient2");
var ing2_chooser = new ImageSwitcher(ingredient2, aufgabe1);

document.getElementById("ingredient1_button").onclick = function() { ing1_chooser.Next(); };
document.getElementById("ingredient2_button").onclick = function() { ing2_chooser.Next(); };

document.getElementById("fertig_button").onclick = function() {
    // Überprüfen der Aufgabenstellung und Gewinnbedingung
    var aufgabeBestanden = ing1_chooser.checkAufgabe() && ing2_chooser.checkAufgabe();
};
