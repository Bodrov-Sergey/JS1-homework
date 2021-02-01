function checker(obj, str){
    if(obj.hasOwnProperty(str)){
        return true;
    } else{
        return false;
    }
}
let object = {"life": "regular"};
console.log(checker(object, "greenn"))