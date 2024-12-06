const texte = document.getElementById('meteo');
const bateau = document.querySelector('.bateau');

fetch('https://marine-api.open-meteo.com/v1/marine?latitude=42.515&longitude=3.1421&current=wave_height,wave_period,wind_wave_height,wind_wave_period&timezone=auto&forecast_days=1').then(response => {
    response.json().then(function (data) {
        console.log(data);

        texte.innerHTML += "Hauteur des vagues actuelles : " + data.current.wave_height + " " + data.current_units.wave_height + "<br>";

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

        document.querySelector('.vagues').style.transformOrigin = 'bottom'
        document.querySelector('.vagues').animate(animation, timing)
        bateau.style.bottom = 0
        bateau.animate(boatAnimation, boatTiming)
    })
})