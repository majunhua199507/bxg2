define(['jquery','cookie'],function ($,cookie) {
    $("#formLogin").submit(function () {
            var data = $(this).serializeArray();
            console.log(data);
            $.ajax({
                url: '/api/login',
                type: 'post',
                data: data,
                success: function (info) {
                    console.log(info)
                    if (info.code == 200) {
                        var tcinfo = JSON.stringify(info.result);
                        console.log(tcinfo);
                        $.cookie('tc_name', tcinfo);
                        location.href = '/index';
                    }
                },
                error: function () {
                    console.log("输入用户名或密码错误");
                }
            })
            return false;
        })
})