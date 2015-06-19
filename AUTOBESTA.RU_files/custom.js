
jQuery(document).ready(function($){

	//закрытие модального окна
	$('.close_modal').click(function (){
		$('.popup, .popup2').css({'opacity':'0', 'visibility':'hidden'});
		//сброс всех полей формы обраной связи
		$(':input','.fofm').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
	});

	//показ модального окна
	$('.open_modal').click(function (e){
		e.preventDefault();
		if($(this).hasClass('active')){
		    $('.popup').css({'opacity':'0', 'visibility':'hidden'});
		    $(this).removeClass('active');
		}
		else {
		    $('.popup').css({'opacity':'0.96', 'visibility':'visible'});
		    $(this).addClass('active');
		} 
	});

	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".fofm").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "wp-content/themes/autobesta/contact.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup2').css('opacity','0.96');
					$('.popup2').css('visibility','visible');
					$('.popup').css({'opacity':'0','visibility':'hidden'});
				}
				else {
					$('.popup2 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup2').css('opacity','1');
					$('.popup2').css('visibility','visible');
					$('.popup').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

});