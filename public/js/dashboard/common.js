define(['jquery', 'template', 'cookie'], function ($, template, cookie) {
	if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
		location.href = 'login';
	}
	if (location.pathname != '/login') {
		var htmlStr = template('aside_tpl', JSON.parse($.cookie('tc_name')));
		$('.aside>.profile').html(htmlStr);
	}
	$("#logoutBtn").on('click', function () {
		$.ajax({
			url: '/api/logout',
			type: 'POST',
			success: function (info) {
				if (info.code == 200) {
					location.href = '/login';
				}
			}
		})
	})

	// console.log($(".navs a+ul").prev());
	$(".navs a+ul").prev().on('click', function () {
		$(this).next().slideToggle();
	})
})