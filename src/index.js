

const $ = require('jquery');


import movies from './api.js';


movies.renderMovies();



$(".edit-button").on("click", function(){

});

$(".delete-button").on("click", function(){
    movies.removeMovie();
});

$('#submitbutton').on('click', function(){
    console.log($('#inputTitle').val());
    console.log($("input:radio[name=inlineRadioOptions]:checked").val());
    console.log($('#inputSummary').val());
    movies.addMovie();
    // $('#row1').html('');
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




