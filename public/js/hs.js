$(document).ready(function() {
  $.ajax({
    url: '/fetchdata',
    method: 'get',
    dataType: 'json',
    success: function(data) {
      var datatableInstance = $('#datatable').DataTable({
        paging: true,
        sort: true,
        searching: true,
        data: data,
        columns: [
          { data: 'Id' },
          { data: 'FirstName' },
          { data: 'LastName' },
          { data: 'Gender' },
          { data: 'JobTitle' },
          {
            data: 'WebSite',
            sortable: false,
            searchable: true,
            render: function(webSite) {
              if (!webSite) {
                return 'N/A';
              } else {
                return (
                  '<a href=' +
                  webSite +
                  '>' +
                  webSite.substr(0, 10) +
                  '...' +
                  '</a>'
                );
              }
            }
          },
          {
            data: 'Salary',
            render: function(salary) {
              return '$' + salary;
            }
          },
          {
            data: 'HireDate',
            render: function(jsonDate) {
              var date = new Date(parseInt(jsonDate.substr(6)));
              var month = date.getMonth() + 1;
              return month + '/' + date.getDate() + '/' + date.getFullYear();
            }
          }
        ]
      });

      console.log(datatableInstance);

      $('#datatable tfoot th').each(function() {
        var title = $('#datatable thead th')
          .eq($(this).index())
          .text();
        $(this).html(
          '<input type="text" placeholder="Search ' + title + '" />'
        );
      });

      datatableInstance.columns().every(function() {
        var dataTableColumn = this;

        $(this.footer())
          .find('input')
          .on('keyup change', function() {
            dataTableColumn.search(this.value).draw();
          });
      });
    }
  });
});
