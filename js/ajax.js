$(function () {
  $("#form").submit(function () {
    var errors = false;


	$(this).find('.required').each(function () {
		if ($.trim($(this).val()) == '') {
			errors = true;
			$('.required').addClass('error');
		}
	});
	
    if (!errors) {
      var data = $("#form").serialize();
      $.ajax({
        url: "mail.php",
        type: "POST",
        data: data,
        beforeSend: function () {
          $(".send").text("Отправляю...");
        },
        success: function (res) {
          if (res == 1) {
            $(".input, .send, select").hide();
            $(".formTitle").text("Ваша заявка отправлена");
            $(".successMsg").css("display", "block");
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
});
