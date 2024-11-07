const scpClient = require('scp2')
const ora = require('ora')
const chalk = require('chalk')
const serverMap = require('./config.js')
const Client = require('ssh2').Client
const server = serverMap[process.env.NODE_ENV]
const spinner =
  ora(`正在发布到${process.env.NODE_ENV === 'test' ? '测试' : '开发'}服务器... \n 
服务器信息:\n
${JSON.stringify(server, null, '\t')}\n`)
const conn = new Client()
conn
  .on('ready', function () {
    // rm 删除dist文件，\n 是换行 换行执行 重启nginx命令 我这里是用docker重启nginx
    conn.exec('rm -rf /docker/nginx/www/xxx', function (err, stream) {
      if (err) throw err
      stream
        .on('close', function (code, signal) {
          // 在执行shell命令后，把开始上传部署项目代码放到这里面
          spinner.start()
          scpClient.scp(
            './dist',
            {
              host: server.host,
              port: server.port,
              username: server.username,
              password: server.password,
              path: server.path // 发布至静态服务器的项目路径
            },
            function (err) {
              spinner.stop()
              if (err) {
                console.log(chalk.red('发布失败.\n'))
                throw err
              } else {
                console.log(
                  chalk.green(
                    'Success! 成功发布到' +
                      (process.env.NODE_ENV === 'test' ? '测试' : '开发') +
                      '服务器! \n'
                  )
                )
              }
            }
          )

          conn.end()
        })
        .on('data', function (data) {
          console.log('STDOUT: ' + data)
        })
        .stderr.on('data', function (data) {
          console.log('STDERR: ' + data)
        })
    })
  })
  .connect({
    host: server.host,
    port: server.port,
    username: server.username,
    password: server.password
  })
