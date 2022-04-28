// var query = document.querySelector('.queryInput').value
// var apiURL = `http://api.openweathermap.org/data/2.5/forecast?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c`



// function getApi(apiURL) {
//     fetch(apiURL)
//         .then(function (response) {
//             console.log(response);
//             return response.json()
//         })
//         .then(function (data) {
// //             console.log(data);
// test(data)
// //         });


// // }

// function test(data){

// console.log(data)
// }
// getApi();

// function setformatParam(e) {

//     e.preventDefault()


//     var formatParam = ""
//     var query = document.querySelector('.queryInput').value

//     var apiURL = `http://api.openweathermap.org/data/2.5/forecast?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c`


//     getApi(apiURL);

//     var weatherBox = document.querySelector('.weatherSection')


//     weatherBox.textContent = "Need to call data.list[0].clouds.value"


// //   For loop 



// }

// var submitBut = document.querySelector('.citysearchBtn')

// submitBut.addEventListener('click', setformatParam)







// ------------------------------------------------------------------EXPERIMENTAL ASYNC------------------------------------------------------------------



var weatherBox = document.querySelector('.weatherSection')




const getData = async () => {
    var query = document.querySelector('.queryInput').value
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c&units=imperial`

        )
        const data = await res.json();
        console.log(data)
        var i = 0;
        for (i = 0; i < 5; i++) {
            var weatherChild = document.createElement('div')
            weatherChild.classList.add('weatherChild')
            weatherChild.textContent = data.list[i].weather[0].description

            var weatherChildTemp = document.createElement('div')
            weatherChildTemp.textContent = data.list[i].main.temp
            weatherChild.appendChild(weatherChildTemp)

            weatherBox.appendChild(weatherChild);
            console.log(data.list[i])

        }




    } catch (error) {
        console.log(error)
    }

}



var submitBut = document.querySelector('.citysearchBtn')

submitBut.addEventListener('click', getData)


// loop it generate divs i<5 , grab icons, temp, day