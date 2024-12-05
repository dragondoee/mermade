fetch('https://marine-api.open-meteo.com/v1/marine?latitude=42.515&longitude=3.1421&hourly=wave_height,wave_period,wind_wave_height,wind_wave_period&forecast_days=1').then(response => {
    response.json().then(function (data) {
        console.log(data);
        console.log(data.hourly.wave_height,data.hourly.wave_period);

        
    })
}) 