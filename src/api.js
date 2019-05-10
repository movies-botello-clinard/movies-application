
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


const removeMovie = (id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch(url + '/' + id + '' , options)
        .then(() => console.log(`movie deleted`))
        .catch(() => console.log('error on delete'));
};


// render
function renderMovies() {
    getMovies().then((movies) => {
        $("#loadingicon").css("display", "none");

        let html = ``;

        movies.forEach(({title, rating, id, img}) => {
            html += `<div class="card flex-nowrap col" style="width: 18rem;">`;
            html += `<img src="` + img + `" class="card-img-top" alt="...">`;
            html += `<div class="card-body">`;
            html += `<h5 class="card-title">` + title + `</h5>`;
            html += `<p class="card-rating"><em>Rating: ` + rating + `</em></p>`;
            html += `<a href="#" class="btn btn-secondary edit-button">Edit</a>`;
            html += `<a href="#" class="btn btn-danger delete-button"  data-dbid = "` + id + `">Delete</a>`;
            html += `</div>`;
            html += `</div>`;
        });
            $('#pushFilm').html(html);
    }).catch((error) => {
        alert('Error.');
        console.log(error);
    })
}


export default {getMovies, addMovie, removeMovie, renderMovies};


//////////////////////////////

// module.exports = {
//     getMovies: () => {
//
//         fetch("/api/movies")
//             .then(function (response) {
//                 // console.log(response.json());
//                 return response.json();
//
//             })
//             .then(function (data) {
//                 appendData(data);
//             })
//             .catch(function (err) {
//                 console.log('error: ' + err);
//             });
//
//         //Pushing data to HTML\\
//         //Used above\\
//         function appendData(data) {
//             let movieContainer = document.getElementById("container");
//             for (let i = 0; i < data.length; i++) {
//                 let div = document.createElement("div");
//                 div.innerHTML = 'Movie Name: ' + data[i].title + '<br>' +
//                     'Movie Rating: ' + data[i].rating;
//                 movieContainer.appendChild(div);
//                 // event.preventDefault();
//             }
//         }
//     },
//
//     displayArtists() {
//
//         // Our JSON data
//         let data = ('/api/movies');
//         // {
//         //     "artists": [
//         //         {
//         //             "artistname": "Deep Purple",
//         //             "formed": "1968",
//         //             "albums": [
//         //                 {
//         //                     "albumname": "Machine Head",
//         //                     "year": "1972",
//         //                     "genre": "Rock"
//         //                 },
//         //                 {
//         //                     "albumname": "Stormbringer",
//         //                     "year": "1974",
//         //                     "genre": "Rock"
//         //                 }
//         //             ]
//         //         },
//         //         {
//         //             "artistname": "Joe Satriani",
//         //             "born": "1956",
//         //             "albums": [
//         //                 {
//         //                     "albumname": "Flying in a Blue Dream",
//         //                     "year": "1989",
//         //                     "genre": "Instrumental Rock"
//         //                 },
//         //                 {
//         //                     "albumname": "The Extremist",
//         //                     "year": "1992",
//         //                     "genre": "Instrumental Rock"
//         //                 },
//         //                 {
//         //                     "albumname": "Shockwave Supernova",
//         //                     "year": "2015",
//         //                     "genre": "Instrumental Rock"
//         //                 }
//         //             ]
//         //         },
//         //         {
//         //             "artistname": "Snoop Dogg",
//         //             "born": "1971",
//         //             "albums": [
//         //                 {
//         //                     "albumname": "Tha Doggfather",
//         //                     "year": "1996",
//         //                     "genre": "Gangsta Rap"
//         //                 },
//         //                 {
//         //                     "albumname": "Snoopified",
//         //                     "year": "2005",
//         //                     "genre": "Gangsta Rap"
//         //                 }
//         //             ]
//         //         }
//         //     ]
//         // };
//
//         // Put the data into a variable and format with HTML tags
//         let output = "<h1>Artists</h1>";
//
//         // Loop through the artists
//         for (let i in data.title) {
//             output += "<h2>" + data.title[i] + "</h2>";
//             output += "<ul>";
//
//             // Loop through the albums for the current artist
//             for (let j in data.rating) {
//                 output += "<li>" + data.rating[i];
//             }
//             output += "</ul>";
//         }
//
//         // Output the data to the "artistlist" element
//         document.getElementById("artistlist").innerHTML = output;
//     },
//
// // Load the above function when the window loads
// //     window.onload = displayArtists;
//
// };
