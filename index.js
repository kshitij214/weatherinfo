
let search=document.getElementById('form1');
let button=document.getElementById('btn');


function getData(city){

let query_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&`;
// let options="mode=json&";
let api_Key="APPID=2f7529c85002a2337c445b15af3076c0";

let file= query_url+api_Key;
console.log(file);
fetch(file)
.then((response)=>response.json())
.then((data)=>{
    let main= data.weather[0].main;
    let description= data.weather[0].description;
    let temp= Math.round(data.main.temp-273);
    let pressure=data.main.pressure;
    let humidity= data.main.humidity;
    let visibility= (data.visibility)/10000;
    let windspeed= data.wind.speed;
    let name=city;
    let feel=Math.round(data.main.feels_like-273);

    console.log(data,description);

    document.getElementById("wrapper-description").innerHTML=description;
    document.getElementById("wrapper-temp").innerHTML=temp+"°C";
    document.getElementById("wrapper-pressure").innerHTML=pressure;
    document.getElementById("wrapper-humidity").innerHTML=humidity;
    document.getElementById("wrapper-name").innerHTML=name;
    document.getElementById("wrapper-feel").innerHTML=feel+"°C";
    document.getElementById("wrapper-visibility").innerHTML=visibility;
    document.getElementById("wrapper-windspeed").innerHTML=windspeed;
    document.getElementById("bodyback").style.backgroundImage="url('https://cdn.dribbble.com/users/778661/screenshots/2714153/weatherc.png')";
    document.getElementById("bodyback").style.backgroundSize = "cover";
    document.getElementById("bodyback").style.backgroundRepeat = "no-repeat";


    switch(main) 
    {

        case "Snow":
            document.getElementById("wrapper-bg").style.backgroundImage="url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
            document.getElementById("wrapper-bg").style.backgroundSize = "cover";
            document.getElementById("wrapper-bg").style.backgroundRepeat = "no-repeat";
            break;
        case "Clouds":
            document.getElementById("wrapper-bg").style.backgroundImage="url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
            document.getElementById("wrapper-bg").style.backgroundSize = "cover";
            document.getElementById("wrapper-bg").style.backgroundRepeat = "no-repeat";
            break;
        case "Fog":
            document.getElementById("wrapper-bg").style.backgroundImage="url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
            document.getElementById("wrapper-bg").style.backgroundSize = "cover";
            document.getElementById("wrapper-bg").style.backgroundRepeat = "no-repeat";
            break;
        case "Haze":
            document.getElementById("wrapper-bg").style.backgroundImage="url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
            document.getElementById("wrapper-bg").style.backgroundSize = "cover";
            document.getElementById("wrapper-bg").style.backgroundRepeat = "no-repeat";
            break;
        case "Mist":
            document.getElementById("wrapper-bg").style.backgroundImage="url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
            document.getElementById("wrapper-bg").style.backgroundSize = "cover";
            document.getElementById("wrapper-bg").style.backgroundRepeat = "no-repeat";
            break;
        case "Smoke":
            document.getElementById("wrapper-bg").style.backgroundImage="url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
            document.getElementById("wrapper-bg").style.backgroundSize = "cover";
            document.getElementById("wrapper-bg").style.backgroundRepeat = "no-repeat";
            break;
        case "Rain":
            document.getElementById("wrapper-bg").style.backgroundImage="url('https://bestanimations.com/media/rain/278072198rain-falling-sky-gif.gif')";
            document.getElementById("wrapper-bg").style.backgroundSize = "cover";
            document.getElementById("wrapper-bg").style.backgroundRepeat = "no-repeat";
            break;
        case "Drizzle":
            document.getElementById("wrapper-bg").style.backgroundImage="url('https://bestanimations.com/media/rain/278072198rain-falling-sky-gif.gif')";
            document.getElementById("wrapper-bg").style.backgroundSize = "cover";
            document.getElementById("wrapper-bg").style.backgroundRepeat = "no-repeat";
            break;
        case "Thunderstorm":
            document.getElementById("wrapper-bg").style.backgroundImage="url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
            document.getElementById("wrapper-bg").style.backgroundSize = "cover";
            document.getElementById("wrapper-bg").style.backgroundRepeat = "no-repeat";
            break;
        case "Clear":
            document.getElementById("wrapper-bg").style.backgroundImage="url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
            document.getElementById("wrapper-bg").style.backgroundSize = "cover";
            document.getElementById("wrapper-bg").style.backgroundRepeat = "no-repeat";
            break;
        default:
            document.getElementById("wrapper-bg").style.backgroundImage="url('https://images.theconversation.com/files/232705/original/file-20180820-30593-1nxanpj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop')";
            document.getElementById("wrapper-bg").style.backgroundSize = "cover";
            document.getElementById("wrapper-bg").style.backgroundRepeat = "no-repeat";
            console.log(main);
            break;
    }

});

}

getData("chennai")

button.onclick=()=>{
    console.log(search.value);
    getData(search.value)
}
