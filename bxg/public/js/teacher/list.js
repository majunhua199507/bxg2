define(['jquery', 'template','bootstrap'], function ($, template,bootstrap) {
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        success: function (info) {
            if (info.code == 200) {
                var tplStr = template('tc_list', info);
                $("#tc_list_tpl_l").html(tplStr);
            }
        }
    })
    $("#tc_list_tpl_l").on('click', 'a.btn-info', function () {
        // alert('123');
        var id = $(this).parent().attr('data-id');
        $.ajax({
            url:'/api/teacher/view',
            type:'get',
            data:{tc_id:id},
            success:function (info) {
                if (info.code==200) {
                    var htmlStr = template('tc_info_tpl',info.result);
                    $('#teacherModal tbody').html(htmlStr);
                    console.log(htmlStr);
                    $('#teacherModal').modal();
                }
            }
        })
    })
})
