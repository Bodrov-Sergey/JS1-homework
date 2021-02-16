const parser = new DOMParser();
const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const list = xmlDOM.querySelector("list");
const students = list.querySelectorAll("student");

const studentIvanName = students[0].querySelector("name");
const studentIvanFirst = studentIvanName.querySelector("first");
const studentIvanSecond = studentIvanName.querySelector("second");
const studentIvanAge = students[0].querySelector("age");
const studentIvanProf = students[0].querySelector("prof");

const studentPetrName = students[1].querySelector("name");
const studentPetrFirst = studentPetrName.querySelector("first");
const studentPetrSecond = studentPetrName.querySelector("second");
const studentPetrAge = students[1].querySelector("age");
const studentPetrProf = students[1].querySelector("prof");

const studentIvanLangValue = studentIvanName.getAttribute("lang");
const studentPetrLangValue = studentPetrName.getAttribute("lang");


class Student{
    constructor(fName, sName, age, prof, lang){
        this.name =`${fName.textContent} ${sName.textContent}`;
        this.age = age.textContent;
        this.prof = prof.textContent;
        this.lang = lang;
    }
}
const studentIvan = new Student(studentIvanFirst, studentIvanSecond, studentIvanAge, studentIvanProf, studentIvanLangValue);
const studentPetr = new Student(studentPetrFirst, studentPetrSecond, studentPetrAge, studentPetrProf, studentPetrLangValue);

let resArr = [studentIvan, studentPetr]

const rusult = {
    list: list
}
console.log(rusult);
