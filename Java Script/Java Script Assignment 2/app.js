//           Q1            ///

// let x=+prompt("Enter Value you want to Add in 5");
// function AddNo(value){

// return function(ghi){
//     console.log(ghi + value)
// }
// }

// let innerfunction = AddNo(x)
// innerfunction(5)

///           Q2            ///


function search(arr,startValue,length,value)
{
    if(length<1){
    return -1
}
    else if(arr[startValue] === value)
    {
        return startValue
    }
   else{
    return search(arr,startValue + 1,value)
   }
}

let arr = [1,2,3,4,5,6,7,8,9]
let length=arr.length;
let index = search(arr,0,0)
if(index >= 0)
{
    console.log("true")
}
else{
    console.log("false")
}


///           Q3            ///
function addParagraph(text) {
    var paragraph = document.createElement("p");
    paragraph.textContent = text;
   
    var body = document.querySelector("body");

    if (body) {
      
      body.appendChild(paragraph);
    } else {
     
      console.error("Unable to find body element in document.");
    }
  }
  
  addParagraph("This is a new paragraph element.");

///           Q4            ///
 function addListItem(text) {
    var list = document.getElementById("myList");
    var newListItem = document.createElement("li");
    newListItem.textContent = text;
    list.appendChild(newListItem);
  }
  addListItem("New list item");


///           Q5            ///

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  // Html File code
  <!DOCTYPE html>
<html>
<head>
  <title>Change Background Color Example</title>
  <style>
    /* add some basic styles to the element */
    #my-element {
      width: 200px;
      height: 200px;
      border: 1px solid black;
    }
  </style>
  <script src="./app.js"></script>
</head>
<body>
  <div id="my-element"></div>

  <script>
    const element = document.getElementById('my-element');
    changeBackgroundColor(element, 'blue');
  </script>
</body>
</html>


///           Q6            ///

function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
// get item
  function getObjectFromLocalStorage(key) {
    const storedObject = localStorage.getItem(key);
    return JSON.parse(storedObject);
  }
  

///           Q7             ///
function getObjectFromLocalStorage(key) {
    var objectString = localStorage.getItem(key);
    var object = JSON.parse(objectString);
  
    return object;
  }
  var myObject = getObjectFromLocalStorage("myObject");

console.log(myObject);

///           Q8            ///

function saveObjectToLocalStorage(object) {
    for (var prop in object) {

      var value = object[prop];
      localStorage.setItem(prop, JSON.stringify(value));
    }
  
    var retrievedObject = {};
  
    for (var prop in object) {
      var value = JSON.parse(localStorage.getItem(prop));
  
      retrievedObject[prop] = value;
    }
  
    return retrievedObject;
  }

var myObject = {name: "John", age: 30};

var retrievedObject = saveObjectToLocalStorage(myObject);

console.log(retrievedObject);
