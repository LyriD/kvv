$(document).ready(function(){
    $.get('data/or_try_this.json')
        .success(function (data) {
            var html = '';
            //for (var i = 0; i< data.length; i++) {
            //
            //}

            $.each(data, function(key, value) {
                html += '<option value="'+key+'">'+key+'</option>'
            });

            $('.mark option').after(html);

            $('.mark').on('change', function () {
                $('.model').html('<option value="" disabled selected>Модель</option>')
                var mark = data[$(this).val()];
                var options = '';
                for (var i = 0; i < mark.length; i++) {
                    options += '<option value="'+i+'">'+mark[i].model+'</option>'
                }
                $('.model option').after(options);
                $('.model').trigger('refresh')
            });

            $('.red-btn').on('click', function (e) {
                e.stopPropagation();
                e.preventDefault();

                var obj = data[$('.mark option:selected').val()][$('.model option:selected').val()];

                $('.img1').find('img').attr('src', obj.f1)
                $('.img2').find('img').attr('src', obj.f2)
            });

            $(' select').styler();
        });




});


