const url=('/api/movies');


// returns json

const getMovies = () => {
    return fetch(url)
        .then(response => response.json());
};


// add movie

const addMovie =  () =>{
    let title =$('#inputTitle').val();
    let rating = $("input:radio[name=inlineRadioOptions]:checked").val();
    let summary = $('.card-text').val();

    const newMovie = {title: title, rating: rating, summary: summary};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    };
    fetch(url,options)
        .then(()=> console.log('added'))
        .catch(()=> console.log('error'))
};

// remove movie

const removeMovie = (movieID) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch(url + '/' + movieID + '', options)
        .then(() => console.log(`movie ${movieID} deleted`))
        .catch(() => console.log('error on delete'));
};


// render
function renderMovies() {
    getMovies().then((movies) => {
        $("#loadingicon").css("display", "none");

        movies.forEach(({title, rating, id, summary, img}) => {
            let html = ``;
            html += `<div class="card flex-nowrap" style="width: 18rem;">`;
            html += `<img src="` + img + `" class="card-img-top" alt="...">`;
            html += `<div class="card-body">`;
            html += `<h5 class="card-title">` + title + `</h5>`;
            html += `<p class="card-text">` + summary + `</p>`;
            html += `<p class="card-rating"><em>Rating: ` + rating + `</em></p>`;
            html += `<a href="#" class="btn btn-secondary edit-button">Edit</a>`;
            html += `<a href="#" class="btn btn-danger delete-button">Delete</a>`;
            html += `</div>`;
            html += `</div>`;
            $('#pushFilm').append(html);
        })
    }).catch((error) => {
        alert('Error.');
        console.log(error);
    })
}




function renderDeletePills() {
    getMovies().then((movies) => {
        movies.forEach(({title, rating, id}) => {
            var html = `<a href="#" class="badge badge-danger" id="${id}">${title}</a>`;
            $('#delete-mov-title').append(html);
        })
    })}



export default {getMovies, addMovie, removeMovie, renderMovies, renderDeletePills};