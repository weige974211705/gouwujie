


//配置快捷位置



module.exports ={
    configureWebpack:{
        resolve:{
            alias:{
               // '@':'src',
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                //着两个用得少，可以注释
                // 'router':'@/router',
                // 'store':'@/store',
                'views':'@/views',
            }
        }
    }
}