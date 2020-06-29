/*
 * @Description: 用户模块路由
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-27 12:41:14
 */
const Router = require('koa-router');
const userController = require('../../controllers/userController')

let userRouter = new Router();

userRouter
  .post('/api/users/login', userController.Login)
  .post('/api/users/miniProgramLogin', userController.miniProgramLogin)
  .post('/api/users/findUserName', userController.FindUserName)
  .post('/api/users/register', userController.Register)

module.exports = userRouter;
