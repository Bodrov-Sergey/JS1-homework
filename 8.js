let newMap = new Map();
newMap.set(true, "answer");
newMap.set(13, false);
newMap.set("jj", 90);

for (let elem of newMap){
    console.log(`Ключ - ${elem[0]}, значение - ${elem[0]} `)
}