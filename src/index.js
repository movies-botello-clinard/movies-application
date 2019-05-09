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
const {addNewMovie} = require('./add-new-movies');


getMovies();
addNewMovie();

//   function appendData(data) {
//     let mainContainer = document.getElementById("myData");
//     for (let i = 0; i < data.length; i++) {
//       let div = document.createElement("div");
//       div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//       mainContainer.appendChild(div);
//     }
// }




