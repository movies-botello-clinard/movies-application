// /**
//  * es6 modules and imports
//  */
// import sayHello from './hello';
// sayHello('World');

/**
 * require style imports
 */
const $ = require('jquery');
// const {pageLoad} = require('./loading-message');

const {getMovies} = require('./api.js');


// module.exports = pageLoad();
//
// function pushMovies(movies) {
//
//   let html = '';
//   let i;
//
//   for (i = 0; i <= movies.length; i++) {
//
//     // let title = Promise.PromiseValue[i].title;
//
//     html += '<div class="container">';
//     html += '<h1>' + title + '</h1>';
//     html += '</div>';
//   }
//
//   return html;
// }

// console.log(getMovies());

getMovies().then((movies) => {
  console.log('Here are all the movies:');


  document.getElementsByClassName('.container').innerHTML;


  // movies.forEach(({title, rating, id}) => {
  //   console.log(`id#${id} - ${title} - rating: ${rating}`);
  }).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});




