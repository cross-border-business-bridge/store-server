/*
 * @Description: 商品模块路由
 * @Author: hai-27
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: hai-27
 * @LastEditTime: 2020-04-07 22:52:56
 */
const Router = require('koa-router');
const productController = require('../../controllers/productController')

let productRouter = new Router();

productRouter
  .post('/api/product/getAllProduct', productController.GetAllProduct)
  .post('/api/product/getPromoProduct', productController.GetPromoProduct)
  .post('/api/product/getHotProduct', productController.GetHotProduct)
  .post('/api/product/getProductByCategory', productController.GetProductByCategory)
  .post('/api/product/getCategory', productController.GetCategory)
  .post('/api/product/getProductBySearch', productController.GetProductBySearch)
  .post('/api/product/getDetails', productController.GetDetails)
  .post('/api/product/getDetailsPicture', productController.GetDetailsPicture)

module.exports = productRouter;
