import "./styles.css"

if(document.readyState !== "loading") {
    console.log("Document is ready!");
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("Document is ready after waiting!");

        const buttonId = document.getElementById("my-button");
        if (buttonId == null) {
            console.log("Failed.");    
        }
        else {
            console.log("Done.");    
        }
        buttonId.onclick = test;
        
        const addButtonId = document.getElementById("add-data");
        addButtonId.onclick = addData;

        console.log("Button click handler added.");

    })
}

function addData() {
    let listId = document.getElementById("list");

    let textAreaId = document.getElementById("my-text");
    
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(textAreaId.value));
    listId.appendChild(li);
    console.log("addData");

}

function test() {
    const buttonId = document.getElementById("my-header");
    buttonId.innerText = "My notebook";
    console.log("Hello world!");
}
