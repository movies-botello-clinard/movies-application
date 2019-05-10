

const $ = require('jquery');


import movies from './api.js';


movies.renderMovies();



// $(document).on("click", '.edit-button', function(){
//
// });
//
// $(document).on("click", ".delete-button", function(){
//     movies.removeMovie();
// });

$(document).on('click', '#submitbutton', function(){
    console.log($('#inputTitle').val());
    console.log($("input:radio[name=inlineRadioOptions]:checked").val());
    console.log($('#inputSummary').val());
    movies.addMovie();
    movies.renderMovies();
});

let settings = {
    "async": true,
    "crossDomain": true,
    "url": "/api/movies",
    "method": "GET",
    "headers": {},
    "data": "{}"
};

$.ajax(settings).done(function (response) {
    console.log(response);
});




