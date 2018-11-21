const Http = new XMLHttpRequest();
const url = 'https://rest.bandsintown.com/artists/';
const artistName = 'Iron Maiden'
const eventPast = '/events?app_id=jshp&date=past'
const id = '?app_id=jshp'
Http.open("GET", url + artistName + id);
Http.send();
Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(Http.responseText);
        let response = Http.responseText;
        dataHandler(JSON.parse(response))
    }
}

function dataHandler(objectCreatead) {
    var element = document.getElementById("ch2");
    element.innerHTML = "<img src='" + objectCreatead.image_url + "' />"
}