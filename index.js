/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
//met hulp van caan

var vervangen = document.querySelectorAll(".vers");
var zoekIcon = document.querySelector(".fa-search");
var zoekBalk = document.querySelector("#zoek");
var i;

function vinkje() {


    if (this.classList[1] == "fa-arrow-down") {
        this.classList.replace("fa-arrow-down", "fa-check");
    } else {
        this.classList.replace("fa-check", "fa-arrow-down");
    }
}

for (i = 0; i < vervangen.length; i++) {
    vervangen[i].addEventListener('click', vinkje);
}


function balk() {
    if (zoekBalk.style.opacity === "0") {
        zoekBalk.style.opacity = "1";
    } else {
        zoekBalk.style.opacity = "0";
    }

}

zoekIcon.addEventListener("click", balk);
