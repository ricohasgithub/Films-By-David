
async function getDavids() {
    let response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=0280dba172ca6d48aca63dc2fd6df2be/person?query=david');
    let data = await response.json()
    return data;
}

getDavids().then(data => console.log(data));