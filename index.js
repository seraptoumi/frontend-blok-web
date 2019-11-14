/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
//met hulp van kaan

var vervangKnop = document.querySelectorAll("button"); // pakt alle knoppen uit html
var zoekIcon = document.querySelector(".fa-search");
var zoekBalk = document.querySelector("#zoek");
var downloads = document.querySelector("#downloads"); // pakt downloadteller rechtsboven bij profielicoon
downloads.style.display = "none"; // zet het downloadteller op hidden
var i;

function vinkje() {

    var vervangIcon = this.querySelector('i'); // pakt de icoon van het knop
    if (vervangIcon.classList[1] == "fa-arrow-down") { // deze 'if-statement' vervangt de icoon met het 'check' icoon
        vervangIcon.classList.replace("fa-arrow-down", "fa-check");
        this.classList.add('selected'); // class toevoegen voor animatie
        downloads.style.display = "unset"; // zet het downloadteller op visible
        downloads.innerHTML++; // Doet +1 op het downloadteller 
    } else {
        vervangIcon.classList.replace("fa-check", "fa-arrow-down");
        this.classList.remove('selected');
        downloads.innerHTML--; // Doet weer -1 op het downloadteller
    }

}

for (i = 0; i < vervangKnop.length; i++) {
    vervangKnop[i].addEventListener('click', vinkje); // zet hetzelfde functie nu op de knop inplaats van de icon
}


function balk() {
    if (zoekBalk.style.opacity === "0") {
        zoekBalk.style.opacity = "1";
    } else {
        zoekBalk.style.opacity = "0";
    }

}

zoekIcon.addEventListener("click", balk);
