$(document).ready(function() {
  /** Click on Fetch data and display in HTML table **/

  $('#fetchdata').on('click', function() {
    $.get('/fetchdata', function(data) {
      var movies = data['data'];

      // var tb1 = '';

      // $('#trdata').html('');

      $('#message').hide();

      var mov_data = '';

      $.each(movies, function(index, movie) {
        mov_data +=
          '<tr><td>' +
          (index + 1) +
          '</td><td>' +
          movie['_id'] +
          '</td><td>' +
          movie['title'] +
          '</td><td>' +
          movie['rating'] +
          '</td><td>' +
          movie['TotalVotes'] +
          '</td><td>' +
          movie['genre1'] +
          '</td><td>' +
          movie['genre2'] +
          '</td><td>' +
          movie['genre3'] +
          '</td><td>' +
          movie['critic'] +
          '</td><td>' +
          movie['budget'] +
          '</td><td>' +
          movie['runtime'] +
          '</td></tr>';
      });

      $('#movie_table').append(mov_data);
    });
  });

  /** Import data after click on a button */

  $('#importdata').on('click', function() {
    $.get('/import', function(data) {
      $('#message')
        .show()
        .html(data['success']);
    });
  });
});
// //for graph

// // const url = 'http://localhost:3000/fetchdata';

// window.onload = function() {
//   var dataPoints = [];

//   var chart = new CanvasJS.Chart('chartContainer', {
//     animationEnabled: true,
//     theme: 'light2',
//     title: {
//       text: 'Ratings VS Critic Graph'
//     },
//     axisY: {
//       title: 'Ratings',
//       titleFontSize: 4
//     },
//     data: [
//       {
//         type: 'column',
//         yValueFormatString: '#,### ',
//         dataPoints: dataPoints
//       }
//     ]
//   });

//   $.get('/fetchdata', function(data) {
//     var movies = data['data'];

//     $.each(movies, function(index, movie) {
//       dataPoints.push({
//         x: parseFloat(movie['rating']),
//         y: parseFloat(movie['critic'])
//       });
//     });

//     chart.render();
//   });
// };

//for movies types
