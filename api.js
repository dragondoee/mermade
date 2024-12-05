const texte = document.getElementById('data');
const svg = document.querySelector('svg');
svg.innerHTML = "<rect width='50' height='100' />"
document.querySelector('rect').style.transformOrigin='bottom';

fetch('https://marine-api.open-meteo.com/v1/marine?latitude=42.515&longitude=3.1421&current=wave_height,wave_period,wind_wave_height,wind_wave_period&timezone=auto&forecast_days=1').then(response => {
    response.json().then(function (data) {
        console.log(data);

        texte.innerHTML += "Hauteur des vagues : "+data.current.wave_height+" "+data.current_units.wave_height+"<br>";
        texte.innerHTML += "Le "+data.current.time+" à "+data.latitude+" "+data.longitude
        const animation = [
            { transform: "scaleY("+data.current.wave_height+")" },
            { transform: "scaleY(1)"},
            { transform: "scaleY("+data.current.wave_height+")" }
        ]
        const timing = {
            duration: data.current.interval,
            iterations: Infinity,
        }
        document.querySelector('rect').animate(animation,timing)
    })
})

