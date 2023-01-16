/*
copy the selected text to clipboard
*/
function copySelection() {
    let selectedText = window.getSelection().toString().trim();
    console.log(selectedText)

    if (selectedText) {
        navigator.clipboard.writeText(selectedText);
        console.log(navigator.clipboard.writeText(selectedText))
    }
}

/*
Add copySelection() as a listener to mouseup events.
*/
document.addEventListener("mouseup", copySelection);