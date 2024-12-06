const texte = document.getElementById('meteo');
const bateau = document.querySelector('.api .bateau');

//appel de l'API météo Marine Weather API
fetch('https://marine-api.open-meteo.com/v1/marine?latitude=18.4011057&longitude=-70.0154182&current=wave_height,wave_direction,wave_period&timezone=auto&forecast_days=1').then(response => {
    response.json().then(function (data) {
        console.log(data);

        texte.innerHTML += "Hauteur des vagues : " + data.current.wave_height + " " + data.current_units.wave_height +"<br>Direction des vagues : "+data.current.wave_direction+data.current_units.wave_direction+"<br>"+data.current.time+"<br>à Santa Domingo, République Dominicaine";

        const animation = [
            { transform: "scaleY("+data.current.wave_height+")" },
            { transform: "scaleY(0.1)" },
            { transform: "scaleY("+data.current.wave_height+")" }
        ]
        const timing = {
            duration: data.current.interval,
            iterations: Infinity,
        }

        const boatAnimation = [
            { transform: "translateY(0%)" },
            { transform: "translateY("+data.current.wave_height*100+"%)" },
            { transform: "translateY(0%)" }
        ]
        const boatTiming = {
            duration: data.current.interval,
            iterations: Infinity,
        }

        document.querySelector('.api .vagues').style.transformOrigin = 'bottom'
        document.querySelector('.api .vagues').animate(animation, timing)
        bateau.style.bottom = 100-data.current.wave_height*75+"%"
        bateau.animate(boatAnimation, boatTiming)
    })
})