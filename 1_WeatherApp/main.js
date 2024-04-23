const apiKey = "7a07670b1bdda05f2c31683af5eb8308";
  
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// https://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=7a07670b1bdda05f2c31683af5eb8308

async function checkWeather(city){
    const response = await fetch(apiurl + city +`&appid=${apiKey}`);
    var data =  await response.json();

    if(data == 'undefined' || data.message == 'city not found' ){
        alert("Invalid City Name");
    }
    else{console.log(data);

    

        document.querySelector("#image").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    
        document.querySelector("#temp-no").innerHTML=Math.round(data.main.temp);
        document.querySelector("#feels").innerHTML=data.weather[0].description;
    
        document.querySelector("#humidity").innerHTML=data.main.humidity+"%";
        document.querySelector("#wind").innerHTML=data.wind.speed+"km/h";
        
    
    
        
    }
        
}
const  searchbox = document.querySelector(".search-bar input");
const  searchbtn = document.querySelector(".search-btn ");
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})