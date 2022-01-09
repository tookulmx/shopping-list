// // Methods and objects

// var database = [
//     {
//         username: "Name",
//         password: "contra"
//     }
// ];

// var newsFeed = [
// {
//     username: "One",
//     timeline: "Newsfeed"
// },

// {
//     username: "Two",
//     timeline: "Newsfeed"
// },


// {
//     username: "Three",
//     timeline: "Newsfeed"
// }
// ];

// var userNamePrompt = prompt("What is your name?");
// var passwordPrompt = prompt("What is your password?");

// function signIn(user, pass) {
//     if (user === database[0].username && pass === database[0].password){
//         console.log(newsFeed);
//     } else {
//         alert("Wrong user");
//     }

// }

// signIn(userNamePrompt, passwordPrompt);

// For, while, do, forEach

// var todos = [
//     "clean room",
//     "brush teeth",
//     "excercise",
//     "study javascript",
//     "eat healty"

// ];

// for(var i=0; i < todos.length; i++) {
//     todos[i] = todos[i] + "!";
// }

// var counterOne = 0;
// while (counterOne <= 10) {
//     console.log(counterOne);
//     counterOne++
// }

// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo --
// } while (counterTwo > 11);



// Document Object Model Events Example

// var buttonAdd = document.getElementById("add");
// var buttonCheck = document.getElementById("check");

// buttonAdd.addEventListener("click", function(){
//     console.log("Click!!!!!!!!!")
// })

// buttonCheck.addEventListener("mouseenter", function() {
//     console.log("Click!!!!!!!!!")
// })

var buttonAdd = document.getElementById("add");
var buttonCheck = document.getElementById("check");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");
var checked = document.getElementsByClassName("done");



function inputLenght() {
    return input.value.length;
}

function createListElement() {
    var list = document.createElement("li");
    list.appendChild(document.createTextNode(input.value));
    ul.appendChild(list);
    input.value = "" ;    
}

function addEventListAfterClick() {
    if (inputLenght() > 0) {
        createListElement();
        }
}

function addListAfterKeypress(event) {
    if (inputLenght() > 0 && event.keyCode == 13) {
        createListElement();
        }
}

buttonAdd.addEventListener("click", addEventListAfterClick);


input.addEventListener("keypress", addListAfterKeypress);

function doneTask(task) {
    if (task.target.tagName === "LI") {
        task.target.classList.toggle("done");
    }
}

function handleUlClick(element) {
	doneTask(element);
	deleteListElement(element);
}

// function deleteListElement(checked) {
// 	if (checked.target.className === "done"){
// 		checked.target.remove();
// 	}
// }

function cleanElements() {
           checked[0].parentNode.removeChild(checked[0]);
}

buttonCheck.addEventListener("click", cleanElements);

ul.addEventListener("click", handleUlClick);


