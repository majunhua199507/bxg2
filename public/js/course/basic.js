define(['jquery','template','utils','ckeditor','form'],function ($,template,obj,CKEDITOR,form) {
    var id=obj.queryString().cs_id;
    $.ajax({
        url:'/api/course/basic',
        type:'get',
        data:{
            cs_id:id
        },
        success:function (info) {
            if (info.code==200) {
                alert(1)
                var htmlStr =template('cs_basic_tpl',info.result);
                $('.steps').html(htmlStr);
                CKEDITOR.replace('cs_brief');
            }
        }
    })
    $('.steps').on('click','#saveBtn',function () {
        $("#cs_brief").val(CKEDITOR.instances.cs_brief.getData());
        $('form').ajaxSubmit({
            url:'/api/course/update/basic',
            type:'post',
            success:function (info) {
                if (info.code==200) {
                    location.href="/course/pic";
                }
            }
        })
        return false;
    })
    
})