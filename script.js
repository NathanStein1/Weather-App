// var query = document.querySelector('.queryInput').value
// var apiURL = `http://api.openweathermap.org/data/2.5/forecast?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c`



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
    // if else statments narrowing down, maps, audio, photos etc
    e.preventDefault()

    // We need a fetch request to grab info from the libray of c
    // fo=json
    var formatParam = ""
    var query = document.querySelector('.queryInput').value
    // value of x
    var apiURL = `http://api.openweathermap.org/data/2.5/forecast?q=` + query + `&appid=302b19a6a4300fb8db031ad4aeaefe4c`


    getApi(apiURL);

    var weatherBox = document.querySelector('.weatherSection')


    weatherBox.value = data.weather


    // For loop to grab all the data



}

var submitBut = document.querySelector('.citysearchBtn')

submitBut.addEventListener('click', setformatParam)

