function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        if (xhr.status >= 400) {
            console.error(xhr.response);
        } else {
            const res = JSON.parse(xhr.response);
            if (callback) {
                callback(res);
            }
        }
    }
    xhr.onerror = () => {
        console.error(xhr.response)
    }
    xhr.send();
}
const btn = document.querySelector(".button");
const img = document.querySelector(".images");
let images = '';

function displayRes(apiData) {
    let input = document.querySelector(".input").value;
    input = +input;
    if (input >= 1 & input <= 10) {
        for (let elem of apiData) {
            const imgBlock = `<img class="container__img" src="${elem.download_url}">`;
            images += imgBlock;
        }
    } else {
        const imgBlock = '<p>число вне диапазона от 1 до 10</p>';
        images += imgBlock;
    }
    img.innerHTML = images;
}
btn.addEventListener("click", ()=>{useRequest("https://picsum.photos/v2/list?limit=10",displayRes);})
