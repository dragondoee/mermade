fetch('https://marine-api.open-meteo.com/v1/marine?latitude=42.515&longitude=3.1421&hourly=wave_height,wave_period,wind_wave_height,wind_wave_period&past_days=1&forecast_days=16').then(response => {
    response.json().then(function (data) {
        console.log(data);
    })
}) 