let newNumber = prompt(`your number:`);
newNumber = +newNumber;
if (typeof newNumber === "number") {
    if (Number.isNaN(newNumber)) {
        console.log(`упс кажется вы ошиблись`);
    } else {
        if (newNumber % 2 == 0) {
            console.log(`even`);
        } else {
            console.log(`odd`);
        }
    }
}