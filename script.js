
// ------------------------------------------------------------------ACTUAL CODE------------------------------------------------------------------



var weatherBox = document.querySelector('.weatherSection')
var cityTitle = document.querySelector('.cityTitle')
var clouds = document.querySelector('.clouds')
var boxcontain = document.querySelector('.databoxContainer')

var searchHistoryBtn;
var searchHistory = document.querySelector('.container2')
var createBtn = document.createElement('button')

// Fetch promise function + appends data from API to Right side of screen

const getGeo = async () => {
    boxcontain.innerHTML = "";


    var query = document.querySelector('.queryInput').value

    try {
        const res = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c`

        )

        const citydata = await res.json();
        console.log(citydata)

        var lat= citydata[0].lat
        console.log(lat)
        var long=citydata[0].lon
        console.log(long)

        var printlat= document.querySelector('.lat')
        var printlong= document.querySelector('.long')
        

            cityTitle.textContent = query
            printlat.textContent=lat
            printlong.textContent=long
        

        

        
    }
    catch (error) {
        console.log(error)
    }

}



const getData = async () => {
    boxcontain.innerHTML = "";
    
    
    var query = document.querySelector('.queryInput').value
    
    // console.log(lat)
    
    try {
        var lat = document.querySelector(".lat")
        var lon=document.querySelector('.long')

        let latText = lat.textContent
        let lonText = lon.textContent
        

        console.log(latText)
        
        const res = await fetch(
            // `https://api.openweathermap.org/data/2.5/forecast?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c&units=imperial`,
            `https://api.openweathermap.org/data/2.5/onecall?lat=`+ latText +`&lon=`+ lonText +`&exclude=minutely,hourly&appid=302b19a6a4300fb8db031ad4aeaefe4c&units=imperial`

        )

        const data = await res.json();
        console.log(data)

       

    


            for (y = 0; y < 1; y++) {

                var createBtn = document.createElement('button')
                
                createBtn.textContent = query
                searchHistory.appendChild(createBtn)

                // Throw the createBtn.textContent into 
            }


            createBtn.addEventListener('click', getData)

            // if (createBtn.clicked == true) {
            //     query = createBtn.textContent
            // }







            for (i = 0; i < 5; i++) {


                var databox = document.createElement('div')
                var iconid = data.daily[i].weather[0].icon
                var iconURL = `http://openweathermap.org/img/w/` + iconid + `.png`
                var temp = document.createElement('div')
                
                var image = document.createElement('img')
                // var date = document.createElement('div')
                var wind = document.createElement('div')
                // var humidity = document.createElement('div')
                // var uv = document.createElement('div')

                // let nextDay= i + 8
                // console.log(nextDay)

                image.src = iconURL
                
                temp.textContent = data.daily[i].temp.day
                // date.textContent = data.list[i].dt_txt
                wind.textContent = "Wind Speed: " + data.daily[i].wind_speed
                // humidity.textContent = "Humidity: " + data.list[i].main.humidity
                // uv.textContent = "UV Index: " +

                    boxcontain.appendChild(databox)
                
                databox.appendChild(temp)
                databox.appendChild(image)
                // databox.appendChild(date)
                databox.appendChild(wind)
                // databox.appendChild(humidity)
                // databox.style.paddingRight = "10px"



            }




        } catch (error) {
            console.log(error)
        }

    }


var timeLeft= 2
var submitBut = document.querySelector('.citysearchBtn')

submitBut.addEventListener('click', getGeo)


    submitBut.addEventListener('click', getData)





    // var timeInterval;

    // function time() {
    
    //     timeInterval = setInterval(function () {
    //         timeLeft--;
    //         if (timeLeft = 0) {
    //             clearInterval(timeInterval);
    //             getData();
    //         }
    
    //     }, 1000);
    
    // }


// 1. The search function which takes a search term as an argument.
//  This ones does the actual search and update of the UI.


// 2. A function that gets the value of the search
//  input and passes that to the search function.


// 3. Add a function to the search history buttons that gets
// the value of the button that was clicked and passes that to the search function.