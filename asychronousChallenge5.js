function checkColor() {
    if (document.body.style.background === "rgb(221, 238, 255)") {
        document.body.style.background = "rgb(255, 238, 221)"
    } else {
        document.body.style.background = "rgb(221, 238, 255)"
    }
}

setInterval(buttons, 1000)

function buttons() {
    let activate = document.getElementById("activate");
    let color = document.getElementById("color");
    activate.addEventListener("click", function (event) {
        console.log('clicked#1');
        color.addEventListener("click", function (event) {
            checkColor();
            console.log('clicked#2');
        })
    })
}