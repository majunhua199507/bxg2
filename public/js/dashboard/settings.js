define(['jquery', 'template', 'uploadify', 'region', 'ckeditor'], function ($, template, uploadify, region, CKEDITOR) {
    $.ajax({
        url: '/api/teacher/profile',
        type: 'get',
        success: function (info) {
            if (info.code == 200) {
                var htmlStr = template('setting_tpl', info.result);
                $('.settings').html(htmlStr);
                $('#upfile').uploadify({
                    swf: '/public/assets/uploadify/uploadify.swf',
                    uploader: '/api/uploader/avatar',
                    buttonText: '',
                    weight: 120,
                    height: 120,
                    fileObjName: 'tc_avatar',
                    onUploadSuccess: function (file, data, response) {
                        $(".preview img").attr('src', JSON.parse(data).result.path);
                    }
                });
                $('#region').region({
                    url: '/public/assets/jquery-region/region.json'
                });
                CKEDITOR.replace('introduce', {
                    toolbarGroups: [
                        { name: 'clipboard', groups: ['clipboard', 'undo'] },
                        { name: 'links' },
                        { name: 'document', groups: ['mode', 'document', 'doctools'] },
                        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] }
                    ]
                })
            }
        }
    })

})