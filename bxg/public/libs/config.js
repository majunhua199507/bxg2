    require.config({
        baseUrl:'/bxg/public',
        paths:{
            'jquery':'assets/jquery/jquery.min',
            'boorstrap':'assets/bootstrap/js/bootstrap.min',
            'template':'assets/artTemplate/template',
            'nprogress':'assets/nprogress/nprogress',
            'echarts':'assets/echarts/echarts.min',
            'cookie':'assets/jquery-cookie/jquery.cookie',
            'common':'js/common',
            'login':'js/login',
            'index':'js/index'
        },
        shim:{
            'bootstrap':{
                deps:['jquery']
            }
        }
    });
    require(['common']);