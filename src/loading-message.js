const $ = require('jquery');


// let pageLoad = () => {
//
//     $(document).ajaxStart(
//         function () {
//             $( ".log" ).text( "Triggered ajaxStart handler." );
//             // $body.addClass("loading");
//         }
//         // function ajaxStop () {
//         //     $body.removeClass("loading");
//         // }
//     )};
//
//
// module.exports = pageLoad();




// let pageLoad = () => {
//
//
//
//
// }



const {getMovies} = require('./api.js');

getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);
    });
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});
