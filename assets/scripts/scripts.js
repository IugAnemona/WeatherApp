

const key = 'c00312569905dbd2b055e77b0421fed7'

async function findCity(city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json() )

    showWeather(dados)
}

function showWeather(dados) {
    const city = document.querySelector('.city')
    const temp = document.querySelector('.temp')
    const weather = document.querySelector('.weather')
    const umidade = document.querySelector('.umidade')
    const icon = document.querySelector('.img-preview')
    icon.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    city.innerHTML = `Tempo em ` + dados.name
    temp.innerHTML = Math.floor(dados.main.temp) + '°C'
    weather.innerHTML = dados.weather[0].description
    umidade.innerHTML = 'Umidade: ' + dados.main.humidity + '%'
    console.log(dados)
}

function click() {
    const input = document.querySelector('.input-city')
    const btn = document.querySelector('.button')
    btn.addEventListener('click', () => {
        findCity(input.value)
    })

    input.addEventListener('keypress', (key) => {
        if(key.charCode === 13) {
            findCity(input.value)
        }
    })
}

click();


