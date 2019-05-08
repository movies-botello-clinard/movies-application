module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
        .then(response => response.json())
        .then(function (movies) {

          movies.forEach((movies) => {
           const {id, title, rating} = movies;

            console.log(`id#${id} - ${title} - rating: ${rating}`);

            // result +=
            //
            //     `<div>
            //         <h2>Movie title is ${id}</h2>
            //         </div>`;

            // document.getElementsByClassName('.container').innerHTML = result;
          })
        });
  }};



// let pageLoad = () => {
//
//   $(window).on({
//     ajaxStart: function () {
//       $('.modal').text("Triggered ajaxStart handler.");
//       $('body').addClass("loading");
//     },
//     ajaxStop: function () {
//       $('body').removeClass("loading");
//     }
//   });
// };
