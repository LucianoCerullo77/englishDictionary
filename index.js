const inputSearch = document.getElementById("inputSearch");
const infoText = document.getElementById("infoText");
const meaningContainer = document.getElementById("meaningContainer");
const wordTitle = document.getElementById("title");
const meaningTitle = document.getElementById("meaning");
const audio = document.getElementById("audio");

const fetchAPI = async (word) => {
  try {
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(URL).then((res) => res.json());
  } catch (err) {
    console.log(err);
  }
};

inputSearch.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
