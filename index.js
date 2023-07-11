var counter = 0;
var count = 0;
const addNode = document.getElementById("add-node");
const element = document.getElementById("div1");

function createCounter() {
  const para = document.createElement("p");
  const id = "p" + count;
  para.setAttribute("id", id);
  const node = document.createTextNode("0");
  para.appendChild(node);
  element.appendChild(para);

  var nodeCounter = 0;

  setInterval(function () {
    nodeCounter++;
    var counterElement = document.getElementById(id);
    counterElement.textContent = nodeCounter;
  }, 1000);

  count++;
}

addNode.addEventListener("click", createCounter);
