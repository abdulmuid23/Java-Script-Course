// let person1 ={
//     name:"abdul Muid",
//     cnic: 42101-1197965-1,
//     speak: function(sentence){
//         console.log(sentence + this.name)
//     }

// }



// person1.speak("my name is ") 



// let person2 ={
//     name:"abdul muid ahmed",
//     cnic: 12344344455,
//     speak: function(sentence){
//         console.log(sentence + this.cnic)
    

//     }
// }

// person2.speak("My nic no is ")


let students = [provStudent()];

function provStudent() {
   let std ={
        name:prompt("enter Ur name"),
     cnic: prompt("enter Ur cnic"),
    };
    students.push(std);
}

console.log(students);

localStorag.setItem("name","ishaq")
