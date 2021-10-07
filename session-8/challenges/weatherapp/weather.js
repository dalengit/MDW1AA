let apik = '58c72d99f6e140aca85142906210610';
let url = `http://api.weatherapi.com/v1/current.json?key=${apik}`;

// Selectors 
let weatherResult = document.querySelector(".weather-result");
let temperatureHeading = document.getElementById('temperature');
let locationName = document.getElementById('locationName');
let place = document.getElementById('placeId');
let submitBtn = document.querySelector(".submit-btn");
let weatherIcon = document.querySelector(".weather-icon");
let weatherDiv = document.querySelector(".icon-img");

// Remove grey square onload 
window.onload = function() {
    weatherDiv.style.display = "none";
};

// API function 
let getWeather = async (e) => {
    e.preventDefault();

    const requestUrl = `${url}&q=${place.value}&api=no`;

    // Testing connection
    try {
    let res = await fetch(requestUrl);
        let {
            location: { name },
            current : {
                temp_c, 
                condition: { icon },
            },
        } = await res.json();

        temperatureHeading.innerHTML = `${temp_c} &deg;C`;
        locationName.innerHTML = name;

        // Display weather-icon div and set img src
        weatherDiv.style.display = "block";
        weatherIcon.src = icon;

        place.value = "";

    } catch (err) {
        console.error("Don't work bro");
    }
};

submitBtn.addEventListener("click", getWeather);