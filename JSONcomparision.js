//How to compare two JSON have same properties without order?
let obj1 = {name : "person", age :5};
let  obj2 = {age : 5, name : "person"};
   console.log(_.isEqual(obj1,obj2));
   var result= _.isEqual(obj1,obj2);
   document.getElementById("answer").innerHTML = result;