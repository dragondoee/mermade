
"use strict"

fetch('game-data.json').then(function (response) {
    response.json().then(function (data) {





        // ================================================ Changement de section ======================================================

        var index = 0
        var score = 0
        var totalScore = 0

        // Section
        const divSirene = document.querySelector(".sirene")
        const divSituation = document.querySelector(".situation")
        const divConsequence = document.querySelector(".consequence")

        // Boutons
        var boutonsPartie = document.querySelectorAll(".sirene button")
        var boutonsChoix = document.querySelectorAll(".button-choice")
        var boutonSuivant = document.querySelector(".next-game button")

        // Partie
        var partie = data
        var choix = data


        // Cache Sirène + Affiche situation
        boutonsPartie.forEach(function (boutonPartie) {
            boutonPartie.addEventListener("click", function () {
                // Si le bouton est actif
                if (boutonPartie.classList.contains("active")) {
                    divSirene.style.display = "none"
                    divSituation.style.display = "block"

                    data.forEach(function (part) {
                        if (boutonPartie.classList.contains(part.part)) {
                            partie = part
                            console.log(part.part)
                            // Afficher la situation et les différents choix
                            document.querySelector(".situation img").src = ""
                            document.querySelector(".situation .txt-game p").innerHTML = part.situation
                            part.choices.forEach(function (choice) {
                                boutonsChoix[index].innerHTML = choice.choice
                                index++
                            })
                            index = 0

                        }
                    })
                }

            });

        });




        // Cache situation + Affiche conséquence
        boutonsChoix.forEach(function (boutonChoix) {
            boutonChoix.addEventListener("click", function () {
                choix = boutonChoix.classList[1][6]-1
                divSituation.style.display = "none"
                divConsequence.style.display = "block"
                // Afficher la conséquence ( texte + image + gain de points)
                score = partie.choices[choix].value
                totalScore += score
                document.querySelector(".consequence img").src = ""
                document.querySelector(".consequence .txt-game p").innerHTML = partie.choices[choix].consequence                
            });
        });



        // Cache conséquence + Affiche Sirène
        boutonSuivant.addEventListener("click", function () {
            divConsequence.style.display = "none"
            divSirene.style.display = "block"
            // Mettre à jour le status de la partie ( bien ou mal )

            // Désactiver le bouton de la partie
            boutonsPartie.forEach(function (boutonPartie) {
                if (boutonPartie.classList.contains(partie.part)) {
                    boutonPartie.classList.remove("active")
                    // Changer son style selon son status
                    // boutonPartie.classList.add()
                }
            })


        });

        // ================================================ Système de choix ==========================================================

        // ================================================== Système de point ========================================================












    });
});