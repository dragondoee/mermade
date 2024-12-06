








// ================================================ Changement de section ======================================================

// Section
const divSirene = document.querySelector(".sirene")
const divSituation = document.querySelector(".situation")
const divConsequence = document.querySelector(".consequence")


var boutonsPartie = document.querySelectorAll(".sirene button")
// Cache Sirène + Affiche situation
boutonsPartie.forEach(function (boutonPartie) {
    boutonPartie.addEventListener("click", function () {
        console.log(boutonPartie.classList.contains("active"))
        // Si le bouton est actif
        if (boutonPartie.classList.contains("active")) {
            console.log(boutonPartie.innerHTML);
            divSirene.style.display = "none"
            divSituation.style.display = "block"
        }
        // Afficher la situation et les différents choix
    });


});



var boutonsChoix = document.querySelectorAll(".button-choice")
// Cache situation + Affiche conséquence
boutonsChoix.forEach(function (boutonChoix) {
    boutonChoix.addEventListener("click", function () {
        console.log(boutonChoix.innerHTML);
        divSituation.style.display = "none"
        divConsequence.style.display = "block"
        // Afficher la conséquence ( texte + image + gain de points)
    });
});


var boutonSuivant = document.querySelector(".next-game button")
// Cache conséquence + Affiche Sirène
boutonSuivant.addEventListener("click", function () {
    console.log("bananana");
    divConsequence.style.display = "none"
    divSirene.style.display = "block"
    // Mettre à jour le status de la partie ( bien ou mal )
    
    // Désactiver le bouton de la partie
    // if (boutonPartie.classList.contains("partie actuelle")) {
    //     boutonPartie.classList.remove("active")
        // Changer son style selon son status
    // }

});

// ================================================ Système de choix ==========================================================

// ================================================== Système de point ========================================================












