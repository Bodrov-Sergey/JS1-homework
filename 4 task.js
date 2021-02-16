let size = [];
const img = document.querySelector(".images");
function checker(size){
    size =+size;
    if ((size<=300)&(size>=100)&!(size.isNaN)){
        return true;
    } else{
        return false;
    }
};
function pusher(inp){
    let num = document.querySelector(inp).value;
    num=+num;
    size.push(num);
};
function resetting(inp){document.querySelector(inp).value = ''};
function counter(inp){
    if (size.length==2 || size.length==0){
        size=[];
        pusher(inp);
        resetting(inp);
        return "введите второе число от 100 до 300"
    }else if (size.length==1){
        pusher(inp);
        resetting(inp);
        if (checker(size[0])&checker(size[1])){
            fetch(`https://picsum.photos/${size[0]}/${size[1]}`)
                .then((response)=>{
                    img.innerHTML = `<img src="${response.url}"> <p>Введите число от 100 до 300 для новой картинки</p>`;
                })
                .catch(()=>{
                return "ошибка"
                })

        } else{
            return "одно из чисел или оба вне диапазона от 100 до 300"
        }
    }

};
document.querySelector(".button").addEventListener('click', async ()=>{
    let res = await counter(".input");
    img.innerHTML = res;
});