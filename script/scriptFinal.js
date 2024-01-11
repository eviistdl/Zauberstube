let Index = -1 ;

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

var aufgabe1 = ['Zahn', 'Feder', 'Wachs'] 

//Botton Funktion definiert
var ingredient1 = document.querySelectorAll(".ingredient1");
var ing1_chooser = new ImageSwitcher(ingredient1);

var ingredient2 = document.querySelectorAll(".ingredient2");
var ing2_chooser = new ImageSwitcher(ingredient2);

var Seal = document.querySelectorAll(".Seal");
var Seal_chooser = new ImageSwitcher(Seal);

document.getElementById("ingredient1_button").onclick = function() { ing1_chooser.Next(); };
document.getElementById("ingredient2_button").onclick = function() { ing2_chooser.Next(); };
document.getElementById("Seal_button").onclick = function() { Seal_chooser.Next(); }

document.getElementById("fertig_button").onclick = function() {
    // Überprüfen der Aufgabenstellung und Gewinnbedingung
    var aufgabeBestanden = ing1_chooser.checkAufgabe() && ing2_chooser.checkAufgabe() && Seal_chooser.checkAufgabe ();
};