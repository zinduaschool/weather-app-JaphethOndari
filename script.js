const searchCity = document.querySelector(".input")
const searchBtn = document.querySelector(".search__icon")
const mainImg = document.getElementById("mainw")

const apiKey = "63286d7210dd5b17fa7559859877fef6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWether (city){
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()

    console.log(data)
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.tdata').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.wdata').innerHTML = data.wind.speed + "KM/H";
    document.querySelector('.hdata').innerHTML = data.main.humidity + "%";

    const cond = data.weather[0].main;
    
    if(cond=="clouds"){
        mainImg.src ="clouds.png";
    }
    else if(cond =="drizzle"){
        mainImg.src="dizzle.png";
    }
    else if(cond =="clear"){
        mainImg.src="clear.png";
    }
    else if(cond =="mist"){
        mainImg.src="mist.png";
    }
    else if(cond =="rain"){
        mainImg.src="rain.png";
    }

  
}
searchBtn.addEventListener("click", ()=>{
    checkWether(searchCity.value);
})




