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







// ------------------------------------------------------------------ACTUAL CODE------------------------------------------------------------------



var weatherBox = document.querySelector('.weatherSection')
var cityTitle = document.querySelector('.cityTitle')
var clouds = document.querySelector('.clouds')
var boxcontain = document.querySelector('.databoxContainer')

const getData = async () => {
    boxcontain.innerHTML = "";
    
    var query = document.querySelector('.queryInput').value
    // cityTitle.textContent = query
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c&units=imperial`

        )
        const data = await res.json();
        console.log(data)
        var i = 0;
        for (i = 0; i < 5; i++) {
            cityTitle.textContent = query


            var databox = document.createElement('div')
            var iconid = data.list[i].weather[0].icon
            var iconURL = `http://openweathermap.org/img/w/`+ iconid+ `.png`
            var temp = document.createElement('div')
            var clouds = document.createElement('div')
            
            var image = document.createElement('img')
            image.src=iconURL
           
            clouds.textContent = data.list[i].weather[0].description
            temp.textContent = data.list[i].main.temp
            
            boxcontain.appendChild(databox)
            databox.appendChild(clouds)
            databox.appendChild(temp)
            databox.appendChild(image)
            databox.style.paddingRight="10px"



        //     var weatherChildTemp = document.createElement('div')
        //     weatherChildTemp.textContent = data.list[i].main.temp
        //     weatherChild.appendChild(weatherChildTemp)

        //     weatherBox.appendChild(weatherChild);
        //     console.log(data.list[i])
            
            


        }




    } catch (error) {
        console.log(error)
    }

}



var submitBut = document.querySelector('.citysearchBtn')

submitBut.addEventListener('click', getData)


// loop it generate divs i<5 , grab icons, temp, day