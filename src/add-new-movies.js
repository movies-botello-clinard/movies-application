const $ = require('jquery');

module.exports = {
    addNewMovie: () => {

        $("#addNewMovie-btn").click(function () {
            function getTitle () {
                title = $("#nameOfMovieAdd").val();
                return title;
            }
            function getRating() {
                rating = $('#addRating').val();
                return rating;
            }
        })
    }
};