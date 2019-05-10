$(document).ready(function() {
  $.get('/fetchdata', function(data) {
    var files = data['data'];

    $.each(files, function(index, file) {
      var best = '';
      var mediocre = '';
      var worst = '';

      if (parseFloat(file['rating']) >= 8.5) {
        best +=
          '<tr><td>' +
          (index + 1) +
          '</td><td>' +
          file['_id'] +
          '</td><td>' +
          file['title'] +
          '</td><td>' +
          file['rating'] +
          '</td><td>' +
          file['TotalVotes'] +
          '</td><td>' +
          file['genre1'] +
          '</td><td>' +
          file['genre2'] +
          '</td><td>' +
          file['genre3'] +
          '</td><td>' +
          file['critic'] +
          '</td><td>' +
          file['budget'] +
          '</td><td>' +
          file['runtime'] +
          '</td></tr>';
        $('#best_table').append(best);
      }

      if (
        parseFloat(file['rating']) > 7.6 &&
        parseFloat(file['rating']) < 8.5
      ) {
        mediocre +=
          '<tr><td>' +
          (index + 1) +
          '</td><td>' +
          file['_id'] +
          '</td><td>' +
          file['title'] +
          '</td><td>' +
          file['rating'] +
          '</td><td>' +
          file['TotalVotes'] +
          '</td><td>' +
          file['genre1'] +
          '</td><td>' +
          file['genre2'] +
          '</td><td>' +
          file['genre3'] +
          '</td><td>' +
          file['critic'] +
          '</td><td>' +
          file['budget'] +
          '</td><td>' +
          file['runtime'] +
          '</td></tr>';
        $('#mediocre_table').append(mediocre);
      }

      if (parseFloat(file['rating']) <= 7.6) {
        worst +=
          '<tr><td>' +
          (index + 1) +
          '</td><td>' +
          file['_id'] +
          '</td><td>' +
          file['title'] +
          '</td><td>' +
          file['rating'] +
          '</td><td>' +
          file['TotalVotes'] +
          '</td><td>' +
          file['genre1'] +
          '</td><td>' +
          file['genre2'] +
          '</td><td>' +
          file['genre3'] +
          '</td><td>' +
          file['critic'] +
          '</td><td>' +
          file['budget'] +
          '</td><td>' +
          file['runtime'] +
          '</td></tr>';
        $('#worst_table').append(worst);
      }
    });
  });
});
