/*
copy the selected text to clipboard
*/
let nextId = 0;
data = [{ id: "", value: ""}];
function copySelection() {
  
  
  let selectedText = window.getSelection().toString().trim();
  console.log(data);

  if (selectedText) {
    navigator.clipboard.writeText(selectedText);

    data.push( { id: nextId++, value: selectedText });
  }
}

function listenForClicks() {
    alert ("Hello World!");
       };
  

/*
Add copySelection() as a listener to mouseup events.
*/
document.addEventListener("mouseup", copySelection)
// .then(listenForClicks)
document.getElementById("myBtn").addEventListener("click", listenForClicks());
