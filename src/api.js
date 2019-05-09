// module.exports = {
//   getMovies: () => {
//     fetch('/api/movies')
//         .then(function (response) {
//           // console.log(response.json());
//           return response.json();
//
//         })
//         .then(function (data) {
//           appendData(data);
//         })
//         .catch(function (err) {
//           console.log('error: ' + err);
//         });
//
//     //Pushing data to HTML\\
//     //Used above\\
//     function appendData(data) {
//       let movieContainer = document.getElementById("container");
//       for (let i = 0; i < data.length; i++) {
//         let div = document.createElement("div");
//         div.innerHTML = 'Movie Name: ' + data[i].title + '<br>' +
//             'Movie Rating: ' + data[i].rating;
//         movieContainer.appendChild(div);
//       }
//     }
//   }
// };




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
