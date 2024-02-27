var myform = document.querySelector("#myform");
var titel = document.querySelector("#titel");
var desc = document.querySelector("#desc");

var data = document.querySelector(".data");

const cluster = "";
const dataset = [];

myform.addEventListener("submit", function (e) {
  e.preventDefault();

  var ti = titel.value;
  var des = desc.value;

  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

var formattedDate = dd + '/' + mm + '/' + yyyy;


  var time = `${hour} : ${minute}`;

  dataset.push({
    formattedDate,
    time,
    ti,
    des,
  });
  data.innerHTML = "";
  var show = dataset;
  info(show);

  console.log(dataset);
});

function info(dataset) {
  dataset.forEach((element) => {
    data.innerHTML += `<div class="col">
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.ti}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${element.formattedDate} ${element.time}</h6>
          <p class="card-text">${element.des}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
        </div></div>
        `;
  });
}
