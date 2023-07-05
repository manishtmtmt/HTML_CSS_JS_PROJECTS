document.addEventListener("DOMContentLoaded", generateJoke);

const jokeElement = document.querySelector(".joke");
const jokeButton = document.querySelector('.btn');

jokeButton.addEventListener("click", generateJoke);

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }

  try {
    const response = await fetch("https://icanhazdadjoke.com", config);
    const data = await response.json();
    jokeElement.innerHTML = data.joke;
  } catch (error) {
    console.log("🚀 ~ file: script.js:20 ~ generateJoke ~ error:", error) 
  }
}