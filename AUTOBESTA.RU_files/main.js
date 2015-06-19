$(document).ready(function(){
    $.get('data/cut2.json')
        .success(function (data) {
            var html = '';
            for (var i = 0; i< data.length; i++) {
                html += '<option value='+i+'>'+data[i].primary+'</option>'
            }
            $('.mark option').after(html);

            $('.mark').on('change', function () {
                console.log($(this).val());
            });

            $(' select').styler();
        });




});


