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
          movie['Title'] +
          '</td><td>' +
          movie['Rating'] +
          '</td><td>' +
          movie['TotalVotes'] +
          '</td><td>' +
          movie['Genre1'] +
          '</td><td>' +
          movie['Genre2'] +
          '</td><td>' +
          movie['Genre3'] +
          '</td><td>' +
          movie['MetaCritic'] +
          '</td><td>' +
          movie['Budget'] +
          '</td><td>' +
          movie['Runtime'] +
          '</td></tr>';
      });

      $('#movie_table').append(mov_data);
    });
  });

  $('#movie_table tfoot th').each(function() {
    var title = $('#movie_table thead th')
      .eq($(this).index())
      .text();
    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
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
