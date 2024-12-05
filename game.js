








// ================================================ Changement de section ======================================================

// Section
const divSirene = document.querySelector(".sirene")
const divSituation = document.querySelector(".situation")
const divConsequence = document.querySelector(".consequence")


var boutonsPartie = document.querySelectorAll(".part")
// Cache Sirène + Affiche situation
boutonsPartie.forEach(function (boutonPartie){
    boutonPartie.addEventListener("click", function () {
        console.log(boutonPartie.innerHTML);
        divSirene.style.display="none"
        divSituation.style.display="block"
    });
});



var boutonsChoix = document.querySelectorAll(".button-choice")
// Cache situation + Affiche conséquence
boutonsChoix.forEach(function (boutonChoix){
    boutonChoix.addEventListener("click", function () {
        console.log(boutonChoix.innerHTML);
        divSituation.style.display="none"
        divConsequence.style.display="block"
    });
});


var boutonSuivant = document.querySelector(".next-game button")
// Cache conséquence + Affiche Sirène
boutonSuivant.addEventListener("click", function () {
        console.log("bananana");
        divConsequence.style.display="none"
        divSirene.style.display="block"
    });

// ================================================ Système de choix ==========================================================

// ================================================== Système de point ========================================================












