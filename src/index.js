import "./styles.css";

function printHelloWorld() {
  console.log("Hello World");
  document.getElementById("header_id").textContent("My notebook");
}

document.getElementById("app").innerHTML = `
<h1 id="header_id">Hello world!</h1>
<button id="my-button" onclick="printHelloWorld">Click me</button>
<h1>test</h1>
`;
