

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

//
// $(function(){
//
//     $('#Submitbutton').on('click', function(e){
//         e.preventDefault();
//         var imdbid  = $(this).attr('id');
//         var resturl = "http://mymovieapi.com/?type=json&id="+imdbid+"&release=full&plot=full";
//
//         $('#imdbcontents').html('<center><img src="images/loading.gif" alt="loading..."></center>');
//
//         $.ajax({
//             url: resturl,
//             dataType: 'json',
//             success: function(data){
//                 var title  = data.title;
//                 var genre  = data.genres[0];
//                 var poster = data.poster.imdb;
//                 var url    = data.imdb_url;
//                 var plot   = data.plot;
//                 var rlseyr = data.year;
//
//                 var cdiv = $('#imdbcontents');
//
//                 var thehtml = "<img src=\""+poster+"\" class=\"floatright\">";
//                 thehtml = thehtml + "<h2>"+title+"</h2>";
//                 thehtml = thehtml + "<p class=\"genre\">"+genre+" - first aired in "+rlseyr+"</p>";
//                 thehtml = thehtml + "<p>"+plot+"</p>";
//                 thehtml = thehtml + "<p><a href=\""+url+"\" target=\"_blank\">View on IMDb &rarr;</p>";
//
//                 cdiv.html(thehtml);
//             }
//         });
//     });
//
// });




