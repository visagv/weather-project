
// // const apiKey = "756f03e89459433aa90134810240809";

// // const searchBox =document.querySelector('.inputBox');
// // const searchBtm =document.querySelector('.searchBtn');
// // const conditionImag =document.querySelector('.conditionImag');
// // const temparature =document.querySelector('.temparature');
// // const condition =document.querySelector('.condition');
// // const humidity =document.querySelector('.humidity');
// // const windSpeed =document.querySelector('.windSpeed');
// // const error =document.querySelector('.error');

// // searchBtm.addEventListener('click',()=>{
// //    let query = searchBox.value;
// //    if(!query){
// //     error.style.display = 'block';
// //    }else{
// //     let key="756f03e89459433aa90134810240809";
// //     http://api.weatherapi.com/v1/current.json?key=756f03e89459433aa90134810240809&q=London&aqi=no

    
// //     fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`).then((response)=>{
// //         if(!response.ok){
// //             throw new Error(`Network response was not ok: ${response.statusText}`);
// //         }

// //         return response.json()
// //     }).then(data =>{
// //         let weatherReport = data.current;
// //         console.log(weatherReport);
// //         conditionImag.src = `http:${weatherReport.condition.icon}`
// //         temparature.innerHTML = `${weatherReport.temp_c}°C`
// //         condition.innerHTML = weatherReport.condition.text;
// //         humidity.innerHTML = `Humidity : ${weatherReport.humidity}%`
// //         windSpeed.innerHTML = `Wind Speed : ${weatherReport.wind_kph} km/h`

// //     }).catch(err =>{
// //         error.style.display = 'block';
// //         error.innerHTML = 'location not matched';
// //     })
// //    }

// // })






// const apiKey = "756f03e89459433aa90134810240809";

// const searchBox = document.querySelector('.inputBox');
// const searchBtn = document.querySelector('.searchBtn');
// const conditionImag = document.querySelector('.conditionImag');
// const temperature = document.querySelector('.temparature');
// const condition = document.querySelector('.condition');
// const humidity = document.querySelector('.humidity');
// const windSpeed = document.querySelector('.windSpeed');

// searchBtn.addEventListener('click', () => {
//     let query = searchBox.value.trim();
    
//     if (!query) {
//         // If the search box is empty, do nothing
//         return;
//     } else {
//         fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`Network response was not ok: ${response.statusText}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 let weatherReport = data.current;
                
//                 // Update the weather information on the screen
//                 conditionImag.src = `http:${weatherReport.condition.icon}`;
//                 temperature.innerHTML = `${Math.round(weatherReport.temp_c)}°C`;
//                 condition.innerHTML = weatherReport.condition.text;
//                 humidity.innerHTML = `Humidity: ${weatherReport.humidity}%`;
//                 windSpeed.innerHTML = `Wind Speed: ${weatherReport.wind_kph} km/h`;
//             })
//             .catch(err => {
//                 // Clear any previous weather data
//                 conditionImag.src = '';
//                 temperature.innerHTML = '';
//                 condition.innerHTML = '';
//                 humidity.innerHTML = '';
//                 windSpeed.innerHTML = '';
                
//                 // Log the error in the console (no error message is displayed on the screen)
//                 console.log('Location not found or other error:', err.message);
//             });
//     }
// });

const apiKey = "756f03e89459433aa90134810240809";

const searchBox = document.querySelector('.inputBox');
const searchBtn = document.querySelector('.searchBtn');
const conditionImag = document.querySelector('.conditionImag');
const temperature = document.querySelector('.temparature');
const condition = document.querySelector('.condition');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');
const error = document.querySelector('.error'); // Assuming you have an element with class "error" in your HTML

searchBtn.addEventListener('click', () => {
    let query = searchBox.value.trim();
    
    // Hide the error message initially
    error.style.display = 'none';
    
    if (!query) {
        return;
    } else {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                let weatherReport = data.current;

                // Update the weather information on the screen
                conditionImag.src = `http:${weatherReport.condition.icon}`;
                temperature.innerHTML = `${weatherReport.temp_c}°C`;
                condition.innerHTML = weatherReport.condition.text;
                humidity.innerHTML = `Humidity: ${weatherReport.humidity}%`;
                windSpeed.innerHTML = `Wind Speed: ${weatherReport.wind_kph} km/h`;
                
                // Clear any previous error message
                error.innerHTML = '';
                error.style.display = 'none';
            })
            .catch(err => {
                // Clear any previous weather data
                conditionImag.src = '';
                temperature.innerHTML = '';
                condition.innerHTML = '';
                humidity.innerHTML = '';
                windSpeed.innerHTML = '';

                // Display the error message on the screen
                error.innerHTML = `Location not found or other error: ${err.message}`;
                error.style.display = 'block';
            });
    }
});
