define(['jquery', 'template'], function ($, template) {
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        success: function (info) {
            if (info.code == 200) {
                var tplStr = template('tc_list', info);
                $("#tc_tpl").html(tplStr);
            }
        }
    })
})