
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
            currentTitle.textContent= "Current:"
        

        

        
    }
    catch (error) {
        console.log(error)
    }

}



const getData = async () => {
    boxcontain.innerHTML = "";
    currentContain.innerHTML="";
    
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


            for (x=0; x < 1; x++) {
                

                var databox1 = document.createElement('div')
                var iconid1 = data.current.weather[0].icon
                var iconURL1 = `http://openweathermap.org/img/w/` + iconid1 + `.png`
                var temp1 = document.createElement('div')
                
                var image1 = document.createElement('img')
                var date1 = document.createElement('div')
                var wind1 = document.createElement('div')
                var humidity1 = document.createElement('div')
                var uv1 = document.createElement('div')

                var unixTime1 = data.current.dt
                var milli1= unixTime1 * 1000
                var dateobject1 = new Date(milli1)
                var dateformat1 = dateobject1.toLocaleString()
                console.log(dateformat1)

                date1.textContent= dateformat1

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
            }

            









            for (i = 0; i < 5; i++) {


                var databox = document.createElement('div')
                var iconid = data.daily[i+1].weather[0].icon
                var iconURL = `http://openweathermap.org/img/w/` + iconid + `.png`
                var temp = document.createElement('div')
                
                var image = document.createElement('img')
                var date = document.createElement('div')
                var wind = document.createElement('div')
                var humidity = document.createElement('div')
                var uv = document.createElement('div')

                var unixTime = data.daily[i+1].dt
                var milli= unixTime * 1000
                var dateobject = new Date(milli)
                var dateformat = dateobject.toLocaleString()
                console.log(dateformat)

                date.textContent= dateformat

                image.src = iconURL
                
                temp.textContent = data.daily[i+1].temp.day
                
                wind.textContent = "Wind Speed: " + data.daily[i+1].wind_speed
                humidity.textContent = "Humidity: " + data.daily[i+1].humidity
                uv.textContent = "UV Index: " + data.daily[i+1].uvi

                boxcontain.appendChild(databox)
                
                
                databox.appendChild(image)
                databox.appendChild(date)
                databox.appendChild(temp)
                databox.appendChild(wind)
                databox.appendChild(humidity)
                databox.appendChild(uv)
                databox.style.paddingRight = "10px"



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