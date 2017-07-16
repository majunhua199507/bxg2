define(['jquery','form','utils','ckeditor','template'],function ($,form,obj,CKEDITOR,template) {
    $("#createBtn").on('click',function () {
        $('form').ajaxSubmit({
            url:'/api/course/create',
            type:'post',
            success:function (info) {
                if (info.code==200) {
                    location.href="/course/basic?cs_id="+info.result.cs_id;
                }
            }
        })
        return false;
    })
    
})