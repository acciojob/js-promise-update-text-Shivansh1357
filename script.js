//your JS code here. If required.
function updateElementTextWithPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

const outputElement = document.getElementById("output");

updateElementTextWithPromise()
  .then((text) => {
    outputElement.textContent = text;
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
