let RezeptArray = [
    '"Weiß bin ich und knochenhart, mische micht mit Rabenhaaren. Nun gibts nicht mehr viel zu tun, mach mich zu mit Kerzenblut"',
    '"Schimmer, Glimmer und Veilchen Blätter. zuletzt ein Tuch von einem Ritter. "',
    '"Spitz und scharf bei Bedarf, Löckchen eines langen Barts. Es ist getan so soll es sein, bring den Stopfen von rotem Wein"'
]




/*Image Switcher zur Auswahl der Zutaten*/
let ingredient1 = document.querySelectorAll(".ingredient1")
let ingredient2 = document.querySelectorAll(".ingredient2")
   
    /*Funktion mit Parametern choices und i, der Ausgangspunkt von i = 0*/
    function ImageSwitcher(choices, i) {
        i = 0;
        
        /*Unterfunktion, die ein Bild ausblendet und das nächste einblendet*/
        this.Next = function() {
            hide_current_image();
            show_next_image();
        }
        
        /*Definieren der oben verwendeten variablen hide... und show...
        Ein Bild hat den Wert 0, wenn es sichtbar und 1 wenn es unsichtbar ist.*/
        var hide_current_image = function() {
            if(choices){
                choices[i].style.visibility = "hidden";
                i += 1;
            }
        }
        var show_next_image = function() {
            if(choices){
                if(i == (choices.length)) {
                    i = 0;
                }
                choices[i].style.visibility = "visible";
            }
        }
    }
      
        var ing1Element = document.getElementsByClassName("ingredient1");
        var ing1_chooser = new ImageSwitcher(ingredient1);
        document.getElementById("ingredient1_button").onclick = function() { ing1_chooser.Next(); };


        var ing2Element = document.getElementsByClassName("ingredient2");
        var ing2_chooser = new ImageSwitcher(ingredient2);
        document.getElementById("ingredient2_button").onclick = function() { ing2_chooser.Next(); };


