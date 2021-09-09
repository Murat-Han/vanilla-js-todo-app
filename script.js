"use strict";
let parentDiv = document.querySelector("#divParent");
var btn = document.querySelector("#btn");
var contentInput = document.getElementById("contentInput");
let newDiv = document.createElement("div");
function associateIds() {
  var all = document.getElementsByTagName("*");
  let id = -1;
  for (var elem = 0; elem < all.length; elem++) {
    if (all[elem].tagName == "DIV") {
      id++;
      all[elem].setAttribute("id", id);
    }
  }
}
let selectedItemid = [];
newDiv.addEventListener("click", reply_click);

function reply_click(id) {
  const clicktarget = document.getElementById(id);
  selectedItemid.push(id);
  clicktarget.style.border = "3px solid white";
}

function deleteElement() {
  for (var x of selectedItemid) {
    const elm = document.getElementById(x);
    parentDiv.removeChild(elm);
  }
}

btn.addEventListener("click", hideSelectedElements);

function hideSelectedElements() {
  var elm2 = document.getElementById(y);
  for (var y of selectedItemid) {
    if (elm2.style.display =="block"){
      elm2.style.visibility = "hidden";
      btn.textContent = "Gizle";
    } else if (elm2.style.visibility == "hidden") {
      btn.textContent = "Göster";
      elm2.style.visibility = "visible";
    }
  }
}

function addElement() {
  let newDiv = document.createElement("div");
  parentDiv.appendChild(newDiv);
  newDiv.textContent = contentInput.value;
  newDiv.className =
    "d-flex justify-content-center align-items-center bg-primary text-white p-2 mt-3";
  newDiv.setAttribute("onclick", "reply_click(this.id);");
  newDiv.style.display="block";
  associateIds();
}

function replaceElement() {
  var item = parentDiv.lastChild;
  var content = document.createTextNode(contentInput.value);
  item.textContent = "";
  item.appendChild(content);
}
