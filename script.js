var table = document.getElementById("myTable");
var add = document.getElementById("addList");
var removeFirstRow = document.getElementById("removeFirst");
var removeLastRow = document.getElementById("removeLast");

add.addEventListener("click", function (event) {
  event.preventDefault(event);

  var inputName = document.getElementById("inputName");
  var inputSurname = document.getElementById("inputSurname");
  var inputAge = document.getElementById("age");

  if (inputAge.value > 0 && !!inputName.value && inputName.value !== "" && !!inputSurname.value && inputSurname.value !== "") {
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.classList.add("row");
    td2.classList.add("row");
    td3.classList.add("row");

    td1.innerHTML = inputName.value;
    td2.innerHTML = inputSurname.value;
    td3.innerHTML = inputAge.value;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    table.children[table.children.length - 1].appendChild(row);
    inputName.value = "";
    inputSurname.value = "";
    inputAge.value = "";
  } else {
    alert("Įveskite duomenis");
  }
});

removeFirstRow.addEventListener("click", function (event) {
  event.preventDefault(event);

  var rows = document.getElementsByTagName("tr");
  if (rows.length > 1) {
    rows[1].remove();
  } else {
    alert("Nebėra ką trinti.");
  }
});

removeLastRow.addEventListener("click", function (event) {
  event.preventDefault(event);

  var rows = document.getElementsByTagName("tr");
  if (rows.length > 1) {
    rows[rows.length - 1].remove();
  } else {
    alert("Nebėra ką trinti.");
  }
});
