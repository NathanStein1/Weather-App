var query = document.querySelector('.queryInput').value
var apiURL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={302b19a6a4300fb8db031ad4aeaefe4c}`



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
    var query = document.querySelector('#search-input').value
    // value of x
    var apiURL = `https://www.loc.gov/${formatParam}/?fo=json&q=${query}`;
    
    
    getApi(apiURL);
    
    
    // For loop to grab all the data
    
    var menu = document.querySelector('#format-input')
    var dropDown = menu.value
    
console.log(dropDown)
console.log(query)

}

var submitBut = document.querySelector('.btn')
