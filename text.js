$(document).ready(function(){
	$("#submit-btn").click(
function(){
	sendAjaxForm('result_form', 'ajax_form', 'text.php');
	return false;
}
		);
});

function sendAjaxForm(result_form, ajax_form, url){
$.ajax({
	url: "text.php",
	type: 'POST',
	data: $("#"+ajax_form).serialize(),
	datatype:"html",
	success: function(response) {
		result = $.parseJSON(response);
		$('#result_form').html("Даннные отправлены");
	},
	error: function(response) {
		$('#result_form').html('Ошибка. Проверьте все поля и попробуйье еще раз');
	}
});
};

$(document).ready(function() {
	$("[href]").each(function() {
		if (this.href == window.location.href){
			$(this).addClass("current");
		}
});
});