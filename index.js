
// Get movies made by Davids using imdb api
async function getDavids() {
    let response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=0280dba172ca6d48aca63dc2fd6df2be/person?query=david');
    let data = await response.json()
    return data;
}

getDavids().then(data => console.log(data));

// Cool background color change for *aesthetics*
var i = 0;

function updateBackground() {
  let doc = document.getElementById("background");
  let color = ["#faf884", "powderblue", "#f8b88b", "#baed91"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}

setInterval(updateBackground, 1000);