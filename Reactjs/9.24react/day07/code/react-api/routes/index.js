var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'react接口测试中心' });
});

router.get('/api/shop', function(req, res, next) {
  const data = require('./../data/shop');
  res.json(data); //json用序列化得形式返回给客户端
});

router.get('/api/todos', function(req, res, next) {
  const data = require('./../data/todo');
  res.json(data); //json用序列化得形式返回给客户端
});

module.exports = router;
