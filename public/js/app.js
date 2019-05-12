$(document).ready(function () {
  /** Click on Fetch data and display in HTML table **/

  // $('#fetchdata').on('click', function () {


  $.ajax({
    url: '/fetchdata',
    method: 'get',
    dataType: 'json',
    success: function (data) {
      $('#movie_table').DataTable({
        paging: true,
        sort: true,
        searching: true,
        "bFilter": true,
        data: data['data'],
        columns: [
          // { data: '#' },
          {
            data: '_id'
          },
          {
            data: 'Title'
          },
          {
            data: 'Rating'
          },
          {
            data: 'TotalVotes'
          },
          {
            data: 'Genre1'
          },
          {
            data: 'Genre2'
          },
          {
            data: 'Genre3'
          },
          {
            data: 'MetaCritic'
          },
          {
            data: 'Budget'
          },
          {
            data: 'Runtime'
          }
        ]
      });


      $('#movie_table tfoot th').each(function () {
        var title = $(this).text();
        $(this).html('<input style="width:98px;" type="text" placeholder="Search ' + title + '" />');
      });

      // DataTable
      var otable = $('#movie_table').DataTable();

      // Apply the search
      otable.columns().every(function () {

        var that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this.value) {
            that
              .search(this.value)
              .draw();
          }
        });
      });

    }
  })




  // });
  /** Import data after click on a button */

  $('#importdata').on('click', function () {
    $.get('/import', function (data) {
      $('#message')
        .show()
        .html(data['success']);
    });
  });
});
