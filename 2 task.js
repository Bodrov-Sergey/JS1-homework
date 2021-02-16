const JSONString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;
const data = JSON.parse(JSONString);
const list = data.list;

const petrName = list[0].name;
const petrAge = list[0].age;
const petrProf = list[0].prof;

const vovaName = list[1].name;
const vovaAge = list[1].age;
const vovaProf = list[1].prof;

class Boys{
    constructor(name, age, prof){
        this.name = name;
        this.age = age;
        this.prof = prof;
    }
}
const boyPetr = new Boys(petrName, petrAge, petrProf);
const boyVova = new Boys(vovaName, vovaAge, vovaProf);

const resArr = [boyPetr,boyVova];
const result = {
    list: resArr
}
console.log(result);
