/*
 * @Description: 全局配置信息
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-28 23:21:30
 */
const path = require('path');

const accessDB = {
  dev: {
    host: '10.200.61.139:60001',
    user: 'bbl_db',
    password: 'OStem@00',
    database: 'storeDB'
  },
  test: {
    host: 'localhost:3310',
    user: 'root',
    password: '13kf7AZvQId@m9Hq',
    database: 'storeDB'
  }
};

const config = {
  connectionLimit: 10,
};

module.exports = {
  Port: 3000, // 启动端口
  staticDir: path.resolve('./public'), // 静态资源路径
  uploadDir: path.join(__dirname, path.resolve('public/')), // 上传文件路径
  // 数据库连接设置
  dbConfig: Object.assign(config, accessDB['dev'])
}
