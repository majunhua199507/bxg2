define(['jquery', 'template', 'form', 'datepicker', 'datepickerzh'], function ($, template, form, datepicker, datepickerzh) {
    var search = location.search;
    search = search.slice(1);
    var searchArr = search.split('&');
    var obj = {};
    for (var i = 0; i < searchArr.length; i++) {
        var temp = searchArr[i].split('=');
        obj[temp[0]] = temp[1];
    }
    if (obj.tc_id) {
        $.ajax({
            url: '/api/teacher/edit',
            type: 'get',
            data: { tc_id: obj.tc_id },
            success: function (info) {
                if (info.code == 200) {
                    alert('请求成功了');
                    info.result.title = "讲师编辑";
                    info.result.saveBtnText = "保 存";
                    var htmlStr = template('tc_edit_tpl', info.result);
                    $('.teacher').html(htmlStr);
                }
            }
        })
        $('.teacher').on('click', '.btnSave', function () {
            $('form').ajaxSubmit({
                url: '/api/teacher/update',
                type: 'post',
                success: function (info) {
                    if (info.code == 200) {
                        alert('即将跳转');
                        location.href = "/teacher/list";
                    }
                }
            })
            return false;
        })
    } else {
        var htmlStr = template('tc_edit_tpl', { title: "讲师添加", saveBtnText: "添 加", tc_gender: 1 });
        $('.teacher').html(htmlStr);
        $('input[name=tc_join_date').datepicker({
            format: 'yyyy-mm-dd', // 让插件按正常的年月日的格式显示
            language: 'zh-CN'  // 将插件显示为汉化的状态
        })
        $('.teacher').on('click', '.btnSave', function () {
            $('form').ajaxSubmit({
                url: '/api/teacher/add',
                type: 'post',
                success: function (info) {
                    if (info.code == 200) {
                        alert("起飞");
                        location.href = "/teacher/list";
                    }
                }
            })
        })

    }


})