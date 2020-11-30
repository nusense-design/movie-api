const apiUrl =
   "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7e0b59c233535ae31cb7dcec01ba036d&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
   "https://api.themoviedb.org/3/search/movie?&api_key=7e0b59c233535ae31cb7dcec01ba036d&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// sending api url to showMovies
showMovies(apiUrl);
function showMovies(url) {
   fetch(url)
      .then((res) => res.json())
      .then(function (data) {
         console.log(data.results);
         data.results.forEach((element) => {
            const el = document.createElement("div");
            const image = document.createElement("img");
            const text = document.createElement("h2");

            text.innerHTML = `${element.title}`;
            image.src = IMGPATH + element.poster_path;
            el.appendChild(image);
            el.appendChild(text);
            main.appendChild(el);
         });
      });
}

form.addEventListener("submit", (e) => {
   e.preventDefault();
   main.innerHTML = "";

   const searchTerm = search.value;

   if (searchTerm) {
      showMovies(SEARCHAPI + searchTerm);
      search.value = "";
   }
});
