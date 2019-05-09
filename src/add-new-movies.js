const $ = require('jquery');

module.exports = {
    addNewMovie: () => {

        $("#addNewMovie-btn").click(function () {

            addedMovieName = $("#nameOfMovieAdd").val();
            console.log(addedMovieName);

            addedMovieRating = $('#addRating').val();
            console.log(addedMovieRating);
        })
    }
};