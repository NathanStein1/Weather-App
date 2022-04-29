
// ------------------------------------------------------------------ACTUAL CODE------------------------------------------------------------------



var weatherBox = document.querySelector('.weatherSection')
var cityTitle = document.querySelector('.cityTitle')
var clouds = document.querySelector('.clouds')
var boxcontain = document.querySelector('.databoxContainer')

var searchHistoryBtn;
var searchHistory = document.querySelector('.container2')
var createBtn = document.createElement('button')

// Fetch promise function + appends data from API to Right side of screen





const getData = async () => {
    boxcontain.innerHTML = "";
   

    var query = document.querySelector('.queryInput').value
    
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c&units=imperial`

        )

        const data = await res.json();
        console.log(data)


        for (y = 0; y <1; y++){

            var createBtn = document.createElement('button')
            cityTitle.textContent = query
            createBtn.textContent = query
            searchHistory.appendChild(createBtn)
            
            // Throw the createBtn.textContent into 
        }
        

        createBtn.addEventListener('click', getData)

        if (createBtn.clicked == true){
            query = createBtn.textContent
        }
        

  
      


        
        for (i = 0; i < 5; i++) {

            
            var databox = document.createElement('div')
            var iconid = data.list[i].weather[0].icon
            var iconURL = `http://openweathermap.org/img/w/` + iconid + `.png`
            var temp = document.createElement('div')
            var clouds = document.createElement('div')
            var image = document.createElement('img')
            


            image.src = iconURL
            clouds.textContent = data.list[i].weather[0].description
            temp.textContent = data.list[i].main.temp

            boxcontain.appendChild(databox)
            databox.appendChild(clouds)
            databox.appendChild(temp)
            databox.appendChild(image)
            databox.style.paddingRight = "10px"

      
            
            
        }




    } catch (error) {
        console.log(error)
    }

}

// const getDataBtn = async () => {
//     boxcontain.innerHTML = "";
//     var queryBtn = createBtn.textContent
   

//     var query = queryBtn
    
//     try {
//         const res = await fetch(
//             `https://api.openweathermap.org/data/2.5/forecast?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c&units=imperial`

//         )

//         const data = await res.json();
//         console.log(data)


//         for (y = 0; y <1; y++){

//             var createBtn = document.createElement('button')
//             cityTitle.textContent = query
//             createBtn.textContent = query
//             searchHistory.appendChild(createBtn)
            
//             // Throw the createBtn.textContent into 
//         }
        

//         createBtn.addEventListener('click', getDataBtn)



        
//         for (i = 0; i < 5; i++) {

//             // cityTitle.textContent = query
//             var databox = document.createElement('div')
//             var iconid = data.list[i].weather[0].icon
//             var iconURL = `http://openweathermap.org/img/w/` + iconid + `.png`
//             var temp = document.createElement('div')
//             var clouds = document.createElement('div')
//             var image = document.createElement('img')
            


//             image.src = iconURL
//             clouds.textContent = data.list[i].weather[0].description
//             temp.textContent = data.list[i].main.temp

//             boxcontain.appendChild(databox)
//             databox.appendChild(clouds)
//             databox.appendChild(temp)
//             databox.appendChild(image)
//             databox.style.paddingRight = "10px"

      
            
            
//         }




//     } catch (error) {
//         console.log(error)
//     }

// }




var submitBut = document.querySelector('.citysearchBtn')

submitBut.addEventListener('click', getData)




            // if (saveHistoryBtn('click', function{write savehistroybtn function here})),
            //  than query == button.textcontent,
            //  run getData function again
