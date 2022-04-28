var query = document.querySelector('.queryInput').value
var apiURL = `http://api.openweathermap.org/data/2.5/forecast?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c`



function getApi(apiURL) {
    fetch(apiURL)
        .then(function (response) {
            console.log(response);
            return response.json()
        })
        .then(function (data) {
            console.log(data);
        });
        

}
getApi();

function setformatParam(e) {
    
    e.preventDefault()


    var formatParam = ""
    var query = document.querySelector('.queryInput').value
    
    var apiURL = `http://api.openweathermap.org/data/2.5/forecast?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c`


    getApi(apiURL);

    var weatherBox = document.querySelector('.weatherSection')


    weatherBox.textContent = "Need to call data.list[0].clouds.value"


//   For loop 



}

var submitBut = document.querySelector('.citysearchBtn')

submitBut.addEventListener('click', setformatParam)







// ------------------------------------------------------------------EXPERIMENTAL ASYNC------------------------------------------------------------------



// var weatherBox = document.querySelector('.weatherSection')
// var query = document.querySelector('.queryInput').value



// const getData = async () => {
//     const res = await fetch(
//         `http://api.openweathermap.org/data/2.5/forecast?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json; odata=verbose",
//           },
//         }
//       )
//     const data = await res.json();
//     const result = data.list[0].clouds.value;
//     console.log(result)
//     return result;
// }

// getData().then((res) => {
//     weatherBox.textContent = res;
// })

// getData();