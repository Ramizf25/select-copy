// import { saveJSON, loadJSON } from "./readwritejson";

let nextId = 0;
data = [];

function copySelection() {
  let selectedText = window.getSelection().toString().trim();
  console.log(data);

  if (selectedText) {
    navigator.clipboard.writeText(selectedText);

    data.push({ id: nextId++, value: selectedText });
  }
}

function listenForClicks() {
  alert("Hello World!");
  // const info = loadJSON("results.json");
  // data.forEach((item) => info.information.push(item));
  // saveJSON('results.json',info)
}

document.addEventListener("mouseup", copySelection);
