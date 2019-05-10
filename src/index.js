

const $ = require('jquery');


import movies from './api.js';


movies.renderMovies();

//////////////////////////
$(document).on('click', '#Submitbutton', function(){
    console.log($('#inputTitle').val());
    console.log($("input:radio[name=inlineRadioOptions]:checked").val());
    console.log($('#inputSummary').val());
    movies.addMovie();
    movies.renderMovies();
});

///////////////////////////
$(document).on("click", '.edit-button', function(e){
    $('.addForm').hide();
    $('.editForm').show();
    $('#edit-submit-button, .edit-button').attr("data-dbid", $(e.target).attr("data-dbid"));
});

$(document).on('click', '#edit-submit-button', function(e){
    console.log($('#inputTitle').val());
    console.log($("input:radio[name=inlineRadioOptions]:checked").val());
    console.log($('#inputSummary').val());
    movies.editMovie(e);
    movies.renderMovies();
});

/////////////////////////////
$(document).on("click", ".delete-button", function(){
    movies.removeMovie($(this).attr('data-dbid'));
    movies.renderMovies();
});

/////////////////////////////
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




