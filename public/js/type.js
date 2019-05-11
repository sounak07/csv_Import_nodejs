$(document).ready(function () {
  $.get('/fetchdata', function (data) {
    var files = data['data'];

    $.each(files, function (index, file) {
      var best = '';
      var mediocre = '';
      var worst = '';

      if (parseFloat(file['Rating']) >= 8.5) {
        best +=
          '<tr><td>' +
          (index + 1) +
          '</td><td>' +
          file['_id'] +
          '</td><td>' +
          file['Title'] +
          '</td><td>' +
          file['Rating'] +
          '</td><td>' +
          file['TotalVotes'] +
          '</td><td>' +
          file['Genre1'] +
          '</td><td>' +
          file['Genre2'] +
          '</td><td>' +
          file['Genre3'] +
          '</td><td>' +
          file['MetaCritic'] +
          '</td><td>' +
          file['Budget'] +
          '</td><td>' +
          file['Runtime'] +
          '</td></tr>';
        $('#best_table').append(best);
      }

      if (
        parseFloat(file['Rating']) > 7.6 &&
        parseFloat(file['Rating']) < 8.5
      ) {
        mediocre +=
          '<tr><td>' +
          (index + 1) +
          '</td><td>' +
          file['_id'] +
          '</td><td>' +
          file['Title'] +
          '</td><td>' +
          file['Rating'] +
          '</td><td>' +
          file['TotalVotes'] +
          '</td><td>' +
          file['Genre1'] +
          '</td><td>' +
          file['Genre2'] +
          '</td><td>' +
          file['Genre3'] +
          '</td><td>' +
          file['MetaCritic'] +
          '</td><td>' +
          file['Budget'] +
          '</td><td>' +
          file['Runtime'] +
          '</td></tr>';
        $('#mediocre_table').append(mediocre);
      }

      if (parseFloat(file['Rating']) <= 7.6) {
        worst +=
          '<tr><td>' +
          (index + 1) +
          '</td><td>' +
          file['_id'] +
          '</td><td>' +
          file['Title'] +
          '</td><td>' +
          file['Rating'] +
          '</td><td>' +
          file['TotalVotes'] +
          '</td><td>' +
          file['Genre1'] +
          '</td><td>' +
          file['Genre2'] +
          '</td><td>' +
          file['Genre3'] +
          '</td><td>' +
          file['MetaCritic'] +
          '</td><td>' +
          file['Budget'] +
          '</td><td>' +
          file['Runtime'] +
          '</td></tr>';
        $('#worst_table').append(worst);
      }
    });
  });
});
