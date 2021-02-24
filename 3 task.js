let output = document.querySelector(".chat")
let inp = document.querySelector(".task3__message");
let sendBtn = document.querySelector(".task3__send-message");
let geoBtn = document.querySelector(".task3__geo-btn");
let websocket = new WebSocket("wss://echo.websocket.org/");
websocket.onmessage = (event) => {
    writeToScreen(event.data, true);
}
websocket.onerror = () => {
    console.error("error")
};


function writeToScreen(message, type) {
    let block = document.createElement('div');
    block.innerHTML = message;
    output.appendChild(block);
    if (type) {
        block.classList.toggle("server")
    } else {
        block.classList.toggle("user")
    }
}

sendBtn.addEventListener("click", () => {
    writeToScreen(inp.value, false);
    websocket.send(inp.value);
    inp.value = "";
})

geoBtn.addEventListener("click", () => {
    if ("geolocation" in navigator) {
        let latitude, longitude;
        navigator.geolocation.getCurrentPosition((position) => {
            const {
                coords
            } = position;
            console.log(coords.latitude, coords.longitude);
            latitude = coords.latitude;
            longitude = coords.longitude;
        });
        let block = document.createElement('a');
        block.innerHTML = "Ссылка на карту";
        output.appendChild(block);
        block.classList.toggle("server");
        block.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        block.target = "_blank"
    } else {
        writeToScreen("Геолокация недоступна", true);
    }
})
