const $ = require('jquery');

module.exports = {
    // getMovies: () => {
    //     fetch('/api/movies')
    //         .then(function (response) {
    //             // console.log(response.json());
    //             return response.json();
    //
    //         })
    //         .then(function (data) {
    //             appendData(data);
    //         })
    //         .catch(function (err) {
    //             console.log('error: ' + err);
    //         });

        //Pushing data to HTML\\
        //Used above\\
        // function appendData(data) {
        //     let movieContainer = document.getElementById("container");
        //     for (let i = 0; i < data.length; i++) {
        //         let div = document.createElement("div");
        //         div.innerHTML = 'Movie Name: ' + data[i].title + '<br>' +
        //             'Movie Rating: ' + data[i].rating;
        //         movieContainer.appendChild(div);
        //     }
        // }
    // },



// module.exports = {
    addNewMovie: () => {

        $.ajax({
            url: '/api/movies',
            dataType: 'json',
            success: function (data) {
                let movieContainer = document.getElementById("container");
                for (let i = 0; i < data.length; i++) {
                    let div = document.createElement("div");
                    div.innerHTML = 'Movie Name: ' + data[i].title + '<br>' +
                        'Movie Rating: ' + data[i].rating;
                    movieContainer.appendChild(div);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }
        });


        $(document).ready(function () {
            $(document).on('click', 'addNewMovie-btn', function () {
                $.ajax({
                    url: '/api/movies',
                    type: 'POST',
                    dataType: 'json',
                    success: function (data) {
                        function getTitle() {
                            title = $("#nameOfMovieAdd").val();
                            return title;
                        }
                        function getRating() {
                            rating = $('#addRating').val();
                            return rating;
                        }
                    }
                });
            });
        });

    }

};





    //     $("#addNewMovie-btn").click(function () {
    //         function getTitle () {
    //             title = $("#nameOfMovieAdd").val();
    //             return title;
    //         }
    //         function getRating() {
    //             rating = $('#addRating').val();
    //             return rating;
    //         }
    //     })
    // }



// $.ajax('api/movies').done(function(posts) {
//     console.log(posts);
//     $('addNewMovie-btn').click(function() {
//         function getTitle () {
//             title = $("#nameOfMovieAdd").val();
//             return title;
//         }
//         function getRating() {
//             rating = $('#addRating').val();
//             return rating;
//         }
//     });
// }).fail(function() {
//     console.log("ERROR!");
// });