const { json } = require('express');
var express = require('express');
var router = express.Router();

const mongoControler = require('./mongo.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/vote/cast',function(req,res,next){

  const user_id = req.param('user_id');
  const topic_id = req.param('topic_id');
  const option_id = Number(req.param('option_id'));

  console.log(user_id,topic_id,option_id);

  const callback = (err,data) => {
    console.log(data);
    console.log(err);

    if (!err) {
      return res.json({
      statusCode:200,
      data:data
    })
    }

    else {
      return json({
      statusCode:300,
      error:err
    });

    }
  }

  return mongoControler.cast(user_id,topic_id,option_id,callback);

});

router.get('/topic/get',function(req,res,next){
  const callback = (err,data) => {

    if (!err) {
      return res.json({
        statusCode:200,
        data:data
      })
    }

    else {
      return res.json({
        statusCode:300,
        error:err
      })
    }

  }

  return mongoControler.load(callback);
});

router.post('/topic/regist',function(req,res,next){

  const topic_title = req.param('topic_title');
  const option_1 = req.param('option_1');
  const option_2 = req.param('option_2');
  const img_url = req.param('img_url');
  const publisher = req.param('publisher');
  const category = req.param('category');

  const callback = (err,data) => {
    console.log(data);
    console.log(err);

    if (!err) {
      return res.json({
        statusCode:200,
        data:data
      })
    }

    else {
      return res.json({
        statusCode:300,
        error:err
      })
    }

  }

  return mongoControler.add_topic(topic_title,category,img_url,option_1,option_2,publisher,callback);

});

module.exports = router;
