let params = new URLSearchParams(location.search);
const score = params.get('score')
document.getElementById('score').innerHTML += score

if (score <= 0) {
    document.getElementById('fin').innerHTML += " 1/3 - Mer morte"
    document.getElementById('texte').innerHTML = "Tes choix ont peut-être l'air anodins, mais ils sont symptomatiques d'une société qui n'a pas l'intention de se remettre en question. En effet, même si l'action d'un individu seul n'a pas de grandes conséquences sur la santé des océans, cette mentalité partagée par les 8,2 milliards d'humains vivant sur Terre n'est pas durable. Peut-être que tu ne réalise pas la gravité de la situation environnementale actuelle ? Le programme d'activités LEARN, SHARE, ACT de Race for Water dans lequel ce site s'inscrit a pour but de sensibiliser à la cause de la protection des océans, et son importance pour l'humanité.";
} else if (score <= 2) {
    document.getElementById('fin').innerHTML += " 2/3 - Ouverture d'esprit"
    document.getElementById('texte').innerHTML = "Tu commences à comprendre les enjeux de la protection des océans dans le monde d'aujourd'hui, mais certaines mauvaises habitudes semblent ne pas vouloir te lâcher. L'océan est beaucoup plus important pour l'humanité que tu ne le crois. Continue à te renseigner ! Il n'est pas encore trop tard pour changer les choses. Race for Water oeuvre pour un avenir meilleur, avec des solutions et résultats concrets qui seront sûrs de te redonner espoir.";
} else if (score == 3) {
    document.getElementById('fin').innerHTML += " 3/3 - Race for Water"
    document.getElementById('texte').innerHTML = "Tu es un vrai expert de la protection des océans ! Nous n'avons rien de plus à t'apprendre. J'espère que tu continueras à lutter pour un monde plus respectueux de nos océans, aux côtés de Race for Water !";
}