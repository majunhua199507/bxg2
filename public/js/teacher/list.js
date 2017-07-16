define(['jquery', 'template', 'bootstrap'], function ($, template, bootstrap) {
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        success: function (info) {
            if (info.code == 200) {
                var htmlStr = template('tc_list_tpl', info);
                $('#tc_list_tBody').html(htmlStr);
            }
        }
    })

    $('#tc_list_tBody').on('click', 'a.btn-info', function () {
        var id = $(this).parent().attr('data-id');
        $.ajax({
            url: '/api/teacher/view',
            data: { tc_id: id },
            type: 'get',
            success: function (info) {
                if (info.code == 200) {
                    var htmlStr = template('tc_info_tpl', info.result);
                    $('#teacherModal tbody').html(htmlStr);
                    $('#teacherModal').modal();
                }
            }
        })
    })

    $("#tc_list_tBody").on('click', 'a.btn-warning', function () {
        // alert('123');
        var id = $(this).parent().attr('data-id');
        var _this = $(this);
        $.ajax({
            url: '/api/teacher/handle',
            type: 'post',
            data: {
                tc_id: id,
                tc_status: $(this).attr('data-status')
            },
            success: function (info) {
                _this.attr('data-status', info.result.tc_status);
                if (info.code) {
                    if (info.result.tc_status == 1) {
                        _this.text('启 用');
                    } else {
                        _this.text('注 销');
                    }
                }
            }
        })
    })

})

