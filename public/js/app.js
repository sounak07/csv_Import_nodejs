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
