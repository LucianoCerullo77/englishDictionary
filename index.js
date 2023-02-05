const inputSearch = document.getElementById("inputSearch");
const infoText = document.getElementById("infoText");
const meaningContainer = document.getElementById("meaningContainer");
const wordTitle = document.getElementById("title");
const meaningTitle = document.getElementById("meaning");
const audio = document.getElementById("audio");

const fetchAPI = async (word) => {
  try {
    // Containers Display appears
    infoText.style.display = "block";
    meaningContainer.style.display = "none";
    infoText.innerText = `Searching the meaning of "${word}"`;

    // Fetching Dictionary API
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(URL).then((res) => res.json());

    // Showing Results
    if (result.title) {
      // No Results found
      meaningContainer.style.display = "block";
      wordTitle.innerText = word;
      meaningTitle.innerText = "Not Found";
      audio.style.display = "none";
    } else {
      // Containers Display disappears
      infoText.style.display = "none";
      meaningContainer.style.display = "block";

      // Results found
      wordTitle.innerText = result[0].word;
      meaningTitle.innerText = result[0].meanings[0].definitions[0].definition;
      audio.style.display = "inline-block";
      audio.src = result[0].phonetics[0].audio;
    }
  } catch (err) {
    console.log(err);
  }
};

// Getting the info in the Searchbar
inputSearch.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchAPI(e.target.value);
  }
});
