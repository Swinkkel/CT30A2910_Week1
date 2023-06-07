import "./styles.css";

function printHelloWorld() {
  console.log("Hello World");
}

document.getElementById("app").innerHTML = `
<h1>Hello world!</h1>
<button id="my-button" onclick="printHelloWorld()></button>
`;
