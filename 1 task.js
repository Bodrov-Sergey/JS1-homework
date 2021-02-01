function check (obj){
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(key);
        };
    };
};
let parent = {"male": "not choosen"};
let child = Object.create(parent);
child = {"name": "Mike",
             "graduate": "school"
            };
check(child);