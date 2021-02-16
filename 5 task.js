let local;
function checker(input){
    let num = document.querySelector(input).value;
    num=+num;
    if ((num<=10)&(num>=1)&!(num.isNaN)){
        return true
    } else{
        return false
    }
};
function resetting(input1, input2){
    document.querySelector(input1).value = '';
    document.querySelector(input2).value = '';
};
function picShower(input1, input2){
    if (checker(input1)&checker(input2)){
        fetch (`https://picsum.photos/v2/list?page=${document.querySelector(input1).value}&limit=${document.querySelector(input2).value}`)
            .then((response)=>{
                const res = response.json();
                return res;
            })
            .then((json)=>{
                local = JSON.stringify(json);
                localStorage.clear();
                localStorage.setItem("images",local);
                let result = '';
                for (let elem of json) {
                    const imgBlock = `<img class="container__img" src="${elem.download_url}">`;
                    result += imgBlock;
                }
                document.querySelector('.block').innerHTML = result;
            })
            .catch(()=>{return "error";})
    } else if (checker(input1)) {
        return "Лимит вне диапазона от 1 до 10";
    } else if (checker(input2)) {
        return "Номер страницы вне диапазона от 1 до 10";
    } else {
        return "Номер страницы и лимит вне диапазона от 1 до 10";
    }
}
document.querySelector(".button_5task").addEventListener('click', async ()=>{
    let result = await picShower("#input1","#input2");
    document.querySelector('.block').innerHTML = result;
    resetting("#input1","#input2");
});
if (localStorage.length==1){
    let baseLocal = localStorage.getItem("images");
    baseLocal = JSON.parse(baseLocal);
    let result = '';
    for (let elem of a=baseLocal) {
        const imgBlock = `<img class="container__img" src="${elem.download_url}">`;
        result += imgBlock;
    }
    document.querySelector('.block').innerHTML = result;

}
