const SERVER_MAP = {
  test: {
    name: '测试环境',
    host: '10.3.87.234',
    port: 22,
    username: 'xxx',
    password: 'xxxxx',
    path: '/docker/nginx/www/xxx' // 发布至静态服务器的项目路径
  }
}
module.exports = SERVER_MAP
