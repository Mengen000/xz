const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//1.商品列表
router.get('/list',function(req,res){
	//获取数据
	var obj=req.query;
	//验证数据是否为空
	var pno=obj.pno;
	var size=obj.size;
	if(!pno) pno=1;//如果pno为空，默认为1
	if(!size) size=9;//如果大小为空 默认为9
	//转为整形
	pno=parseInt(pno);
	size=parseInt(size);
	//开始计算查询的值
	var start=(pno-1)*size;
  pool.query('SELECT * FROM xz_laptop LIMIT ?,?',[start,size],function(err,result){
	  if(err) throw err;
	    res.send(result);
	});
});
module.exports=router;