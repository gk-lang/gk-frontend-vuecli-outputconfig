const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const resolve = dir => {
  return path.join(__dirname, dir)
}
const VUE_APP_COMMON_MODULE_PATH = process.env.VUE_APP_COMMON_MODULE_PATH

module.exports = defineConfig({
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件，启用本选项，列出需要转译的第三方包包名或正则表达式
  transpileDependencies: ['join-common-module-frontend'],
  // 是否为生产环境构建生成source map，为true即可保留.map映射文件（可以帮助调试代码）
  productionSourceMap: false,
  // 设置标题
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('#', resolve(VUE_APP_COMMON_MODULE_PATH)) // 用子项目的模式引入公共模块，require('#/aa.js')

    config.plugin('html').tap(args => {
      args[0].title = 'XXX管理系统'
      return args
    })
  },
  // scss变量全局引用
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "~#/styles/variable.scss" as *;
          @use "~#/styles/mixin.scss" as *;
        `
      }
    }
  },
  // 按需自动导入element plus
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        'element-plus': path.resolve('./node_modules/element-plus'),
        vue: path.resolve('./node_modules/vue')
      }
    },
    externals: {
      xlsx: 'XLSX',
      echarts: 'echarts',
      'bpmn-viewer': 'BpmnJS'
    },
    plugins: [],
    devtool: 'source-map'
  },
  // 设置代理
  devServer: {
    host: 'localhost',
    port: 9100,
    open: true,
    proxy: {
      '/zuul': {
        target: 'http://10.3.87.234:8085/zuul/', // 代理，测试环境
        // target: 'http://192.168.0.84/zuul/', // 正式环境，算流量的，最好不要用，内网负载的
        // target: 'http://192.168.0.47/zuul/', // 正式环境，直接指向服务器的 47.92.133.108（外网地址）
        // target: 'https://wms.56jzt.com/zuul/', // 正式环境，域名
        changeOrigin: true,
        pathRewrite: {
          '^/zuul': ''
        }
      },
      '/api': {
        // minio代理不能放在zuul、api前面，否则上传相关接口会出错，原因：搞不懂
        target: 'http://10.3.87.234:8085/api/', // 集成平台的代理，待替换
        // target: 'http://192.168.0.84/api/', // 正式环境，算流量的，最好不要用，内网负载的
        // target: 'http://192.168.0.47/api/', // 正式环境，直接指向服务器的 47.92.133.108（外网地址）
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/minio': {
        target: 'http://10.3.87.21:9000', // 集成平台的代理，待替换
        // target: 'http://192.168.0.81:9010', // minio正式环境代理地址
        changeOrigin: true,
        pathRewrite: {
          '^/minio': ''
        }
      }
    }
  }
})
