var myobj={
    name:"sona",
    age:25
}

// localStorage.setItem('myobject',myobj)
// console.log(localStorage)
//we need to represent object as a string as local storage only accept strings

let myobj_serialized=JSON.stringify(myobj);
// console.log(myobj_serialized)

localStorage.setItem('myobject', myobj_serialized)
// console.log(localStorage)

// var myobj_deserialized=localStorage.getItem('myobj')
// console.log(typeof myobj_deserialized)

var myobj_deserialized=JSON.parse(localStorage.getItem('myobject'));
console.log(myobj_deserialized)

