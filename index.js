// console.log("hello world");

const message = document.querySelector("#message");

const addMovie = (event) => {
  event.preventDefault();
  const inputField = document.querySelector("#input");
  if (!inputField.value) {
    return alert("Enter a movie title!");
  }
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);
  document.querySelector("ul").appendChild(movie);
  inputField.value = "";
};

document.querySelector("form").addEventListener("submit", addMovie);

const deleteMovie = (event) => {
  event.target.parentNode.remove();
  message.textContent = `Movie yeet'ed`;
};

const crossOffMovie = (event) => {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = "You've done seen this here movie!";
  } else {
    message.textContent = "Added back to the list!";
  }
};
