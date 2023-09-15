
// ------------------------------------------------------------------ACTUAL CODE------------------------------------------------------------------



var weatherBox = document.querySelector('.weatherSection')
var cityTitle = document.querySelector('.cityTitle')
var clouds = document.querySelector('.clouds')
var boxcontain = document.querySelector('.databoxContainer')
var currentContain = document.querySelector('.currentContainer')
var searchHistoryBtn;
var searchHistory = document.querySelector('.container2')
var createBtn = document.createElement('button')
var currentTitle = document.querySelector(`.currentTitle`)

// Need to get latitude and longitude, so getGeo grabs that info to feed to the OneApi
const getGeo = async (query) => {
    boxcontain.innerHTML = "";




    try {
        const res = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c`

        )

        const citydata = await res.json();
        console.log(citydata)

        var lat = citydata[0].lat
        console.log(lat)
        var long = citydata[0].lon
        console.log(long)

        var printlat = document.querySelector('.lat')
        var printlong = document.querySelector('.long')


        cityTitle.textContent = query
        printlat.textContent = lat
        printlong.textContent = long
        currentTitle.textContent = "Current:"


        getData(printlat, printlong, query);


    }
    catch (error) {
        console.log(error)
    }

}


// This function uses the One Call Api using the lat and lon from the other Api
const getData = async (lat, lon, query) => {
    boxcontain.innerHTML = "";
    currentContain.innerHTML = "";

    var query = document.querySelector('.queryInput').value



    try {


        let latText = lat.textContent
        let lonText = lon.textContent


        console.log(latText)

        const res = await fetch(

            `https://api.openweathermap.org/data/2.5/onecall?lat=` + latText + `&lon=` + lonText + `&exclude=minutely,hourly&appid=302b19a6a4300fb8db031ad4aeaefe4c&units=imperial`

        )

        const data = await res.json();
        console.log(data)








        var createBtn = document.createElement('button')
        // Store query to local storage

        createBtn.textContent = query
        searchHistory.appendChild(createBtn)
        var btnArray = JSON.parse(localStorage.getItem('save')) || [];
        btnArray.push(query)
        localStorage.setItem('save', JSON.stringify(btnArray))
        

        createBtn.addEventListener('click', (e) => {
            const query = e.target.textContent;
            getGeo(query)
        })

        // This loop creates the Current conditions



        for (x = 0; x < 1; x++) {


            var databox1 = document.createElement('div')
            var iconid1 = data.current.weather[0].icon
            var iconURL1 = `https://openweathermap.org/img/w/` + iconid1 + `.png`
            var temp1 = document.createElement('div')

            var image1 = document.createElement('img')
            var date1 = document.createElement('div')
            var wind1 = document.createElement('div')
            var humidity1 = document.createElement('div')
            var uv1 = document.createElement('div')

            var unixTime1 = data.current.dt
            var milli1 = unixTime1 * 1000
            var dateobject1 = new Date(milli1)
            var dateformat1 = dateobject1.toDateString()
            console.log(dateformat1)

            date1.textContent = dateformat1

            image1.src = iconURL1

            temp1.textContent = data.current.temp
            wind1.textContent = "Wind Speed: " + data.current.wind_speed
            humidity1.textContent = "Humidity: " + data.current.humidity
            uv1.textContent = "UV Index: " + data.current.uvi

            currentContain.appendChild(databox1)


            databox1.appendChild(image1)
            databox1.appendChild(date1)
            databox1.appendChild(temp1)
            databox1.appendChild(wind1)
            databox1.appendChild(humidity1)
            databox1.appendChild(uv1)
            databox1.style.paddingRight = "10px"
            image1.style.display="flex"
            image1.style.justifyContent="center"

            if (data.current.uvi < 3) {
                uv1.style.color = "#00d000"
            }
            else if (data.current.uvi < 6 && data.current.uvi > 3) {
                uv1.style.color = "Yellow"

            }
            else if (data.current.uvi > 6) {
                uv1.style.color = "Red"
            }
        }

// This loops to the main 5 day
        for (i = 0; i < 5; i++) {


            var databox = document.createElement('div')
            var iconid = data.daily[i + 1].weather[0].icon
            var iconURL = `https://openweathermap.org/img/w/` + iconid + `.png`
            var temp = document.createElement('div')

            var image = document.createElement('img')
            var date = document.createElement('div')
            var wind = document.createElement('div')
            var humidity = document.createElement('div')
            var uv = document.createElement('div')

            var unixTime = data.daily[i + 1].dt
            var milli = unixTime * 1000
            var dateobject = new Date(milli)
            var dateformat = dateobject.toDateString()
            console.log(dateformat)

            date.textContent = dateformat

            image.src = iconURL

            temp.textContent ="Temp: " + data.daily[i + 1].temp.day

            wind.textContent = "Wind Speed: " + data.daily[i + 1].wind_speed
            humidity.textContent = "Humidity: " + data.daily[i + 1].humidity
            uv.textContent = "UV Index: " + data.daily[i + 1].uvi

            boxcontain.appendChild(databox)


            databox.appendChild(image)
            databox.appendChild(date)
            databox.appendChild(temp)
            databox.appendChild(wind)
            databox.appendChild(humidity)
            databox.appendChild(uv)
            databox.style.paddingRight = "10px"
            databox.style.marginRight ="10px"
            databox.style.backgroundColor= "rgb(86, 86, 247)"

            if (data.daily[i + 1].uvi < 3) {
                uv.style.color = "#00d000"
            }
            else if (data.daily[i + 1].uvi < 6 && data.daily[i + 1].uvi >= 3) {
                uv.style.color = "Yellow"

            }
            else if (data.daily[i + 1].uvi >= 6) {
                uv.style.color = "Red"
            }



        }




    } catch (error) {
        console.log(error)
    }

}



var submitBut = document.querySelector('.citysearchBtn')

submitBut.addEventListener('click', (e) => {
    const query = document.querySelector('.queryInput').value
    getGeo(query)


    // FIX FOR DUPLICATE CALLS
    
    // var cleanCut = document.querySelector('.queryInput')
    // cleanCut.value = "";
    // console.log(cleanCut.value, cleanCut.textContent)

})

