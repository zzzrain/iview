import Env from './env';

let config = {
    env: Env,
    dev: {
        proxyTable:{
            '/api': {
                target : 'http://111.230.241.62:9128',
                changeOrigin : true,   //允许跨域
                pathRewrite : {
                    '^/api': '/'
                }
            }
        },
    }
};
export default config;
