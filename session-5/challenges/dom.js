console.log("Dom is OPEN BRO");

//  Selector types
let headingElement = document.getElementById("heading");
let paragraph = document.querySelector(".paragraph");
let listItem = document.querySelectorAll('.item');

// Innertext
paragraph.innerText = "The most wonderful guitar you will ever own";

// Shows querySelectorAll
listItem.forEach(function (item) {
    console.log(item.innerText);
});

// Select using a data attribute
let img = document.getElementsByClassName("[data-custom-image-name]");
console.log(img);

// Select by classname 
let paraClass = document.getElementsByClassName('.paragraph');
console.log(paraClass);

// Event handling 
// Declaration
function headingListener() {
    console.log("You clicked the heading");
}

// Expression 
const headingListenerES6 = () => {console.log("Clicked in ES6")};

//  Appendchild
let button = document.getElementById('list-add-btn');
let list = document.querySelector('.number-list');

button.addEventListener('click', function () {
  let newItem = document.createElement("li");
  newItem.classList.add('item');
  newItem.innerHTML = Math.floor(Math.random() * 5);
  list.appendChild(newItem);
})