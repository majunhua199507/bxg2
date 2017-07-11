define(['jquery','cookie'],function ($,cookie) {
     $("#formLogin").submit(function () {
           var data = $(this).serializeArray();
           $.ajax({
               url:"/api/login",
               type:"post",
               data:data,
               success:function(info){
                //    console.log(info);
                   if (info.code==200) {
                        alert('登陆成功');
                        var infoStr =JSON.stringify(info.result);
                        console.log(infoStr);
                        $.cookie('tcInfo',infoStr);
                       location.href='index'
                       
                   }
               },
               error:function(){
                   console.log("出错了");
               }
           })
           return false;
       })
})