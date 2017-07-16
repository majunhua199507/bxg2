require.config({
    baseUrl: '/public',
    paths: {
        'jquery': 'assets/jquery/jquery.min',
        'bootstrap': 'assets/bootstrap/js/bootstrap.min',
        'nprogress': 'assets/nprogress/nprogress',
        'echarts': 'assets/echarts/echarts.min',
        'cookie': 'assets/jquery-cookie/jquery.cookie',
        'template': 'assets/artTemplate/template',
        'common': 'js/dashboard/common',
        'login': 'js/dashborad/login',
        'index': 'js/dshborad/index',
        'form': 'assets/jquery-form/jquery.form',
        'datepicker': 'assets/bootstrap-datepicker/js/bootstrap-datepicker',
        'datepickerzh': 'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        'uploadify': 'assets/uploadify/jquery.uploadify',
        'region': 'assets/jquery-region/jquery.region',
        'ckeditor': 'assets/ckeditor/ckeditor',
        'utils':'js/utils/utils'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'datepickerzh': {
            deps: ['jquery']
        },
        'uploadify': {
            deps: ['jquery']
        },
        'ckeditor': {
            exports: 'CKEDITOR'
        }
    }
})