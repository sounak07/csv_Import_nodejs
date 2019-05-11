//for graph

// const url = 'http://localhost:3000/fetchdata';

window.onload = function() {
  var dataPoints = [];

  var chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: 'Ratings VS Critic Graph'
    },
    axisY: {
      title: 'Ratings',
      titleFontSize: 4
    },
    data: [
      {
        type: 'column',
        yValueFormatString: '#,### ',
        dataPoints: dataPoints
      }
    ]
  });

  $.get('/fetchdata', function(data) {
    var movies = data['data'];

    $.each(movies, function(index, movie) {
      dataPoints.push({
        x: parseFloat(movie['Rating']),
        y: parseFloat(movie['MetaCritic'])
      });
    });

    chart.render();
  });
};
