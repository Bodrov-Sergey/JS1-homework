let x = 0;
x = typeof x;
console.log(x)
switch (x) { 
    case "boolean":
        console.log('x-логический тип');
        break;
    case "number":
        console.log('x-число');
        break;
    case "string":
        console.log('x-строка');
        break;
    default:
        console.log('Тип х не определен');
}