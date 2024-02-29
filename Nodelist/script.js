var form = document.querySelector("#form");
var title = document.querySelector("#title");
var desc = document.querySelector("#desc");
var foot = document.querySelector("#foot");
var remove = document.querySelector("#remove");
var empty = document.querySelector("#empty");

const dataSet = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var titledata = title.value;
  var descdata = desc.value;
  var id = Math.floor(e.timeStamp);

  if (titledata === "" || descdata === "") alert("Fields are empty");
  else {
    empty.remove();
    dataSet.push({ titledata, descdata });

    var todo = document.createElement("div");

    todo.innerHTML = `<div
  id="${id}"
  class="card shadow-xl relative bg-zinc-200 p-5 w-[250px] h-[250px] text-black flex flex-col items-center rounded-lg"
>
  <h1 class="mt-6 text-xl font-semibold p-2">${titledata}</h1>
  <h3>${descdata}</h3>
  <h4>Time</h4>
  <button  id="${id}remove"
    class="bg-red-500 p-1 w-1/2 rounded-lg absolute bottom-4 right-4"
    id="remove"
    
  >
    Delete
  </button>
</div>`;

    console.log(e.target.id);

    foot.appendChild(todo);
  }
});

foot.addEventListener("click", function (e) {
  console.log(document.getElementById(e.target.id).parentElement.id);
  document
    .getElementById(document.getElementById(e.target.id).parentElement.id).remove();
});

// const childElement = document.getElementById("child-element");

// // Get the parent element of the child element
// const parentElement = childElement.parentElement;

// // Get the ID of the parent element
// const parentId = parentElement.id;

// // Print the ID of the parent element to the console
// console.log(parentId);
