const Http = new XMLHttpRequest();
const url = 'https://rest.bandsintown.com/artists/';
const artistName = 'Iron Maiden'
const eventPast = '/events?app_id=jshp&date=upcoming'
// const id = '?app_id=jshp'
Http.open("GET", url + artistName + eventPast);
Http.send();
Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let response = Http.responseText;
        forEach(JSON.parse(response))
    }
}

function forEach(objectFromGet) {
    for(let i = 0; i < objectFromGet.length; i++){
        dataHandler(objectFromGet[i].venue.name)
    }
}


const unorderedList = document.createElement("ul")
setTimeout(
    () => {
        document.getElementById("ch3").appendChild(unorderedList)
    }, 0
) 



function dataHandler(objectCreatead) {
        let listItem = document.createElement("li")
        let itemInfo = document.createTextNode(objectCreatead)
        listItem.appendChild(itemInfo)
        unorderedList.appendChild(listItem)
        document.getElementById("ch3").appendChild(unorderedList)
}