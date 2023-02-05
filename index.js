const inputSearch = document.getElementById("inputSearch");
const infoText = document.getElementById("infoText");
const meaningContainer = document.getElementById("meaningContainer");
const wordTitle = document.getElementById("title");
const meaningTitle = document.getElementById("meaning");
const audio = document.getElementById("audio");

inputSearch.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
