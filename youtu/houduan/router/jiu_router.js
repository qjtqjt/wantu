


const express=require("express");
const Router=express.Router();
const jiu_model=require("../model/jiu_model.js");
const util=require("../utils/utils.js");

/**
    * @api {POST} /api/router/jiu 查找显示商品信息
    * @apiGroup 查找显示商品
    * @apiVersion 0.0.1
    * @apiParam {String} time 商品更新时间
    * @apiDescription 查找显示商品
	* @apiError (Error) {String} msg 查询错误
    * @apiSuccessExample {json} 返回样例
    *                {"code":"0","msg":"查询成功"}}
    * @apiErrorExample {json} 失败返回样例
    *                {"code":"-1","msg":"查询失败"}
*/

// 查找显示商品信息

Router.post('/jiu',(req,res)=>{
    console.log(req.body);
    let time=req.body.time;
    let val=req.body.val;
    jiu_model.find({$or:[{'name':{$regex:val}},{'type':{$regex:val}},{'title':{$regex:val}}]}).sort({'time':-1})
    .then((data)=>{
        console.log(data);
    	res.send(util.sendData(0,'请求ok',data))
    })
	.catch((err)=>{
		console.log(err)
		res.send(util.sendData(-1,'请求错误',null))
	})
	
})

/**
    * @api {POST} /api/router/find_jiu 分页查找显示商品信息
    * @apiGroup 分页查找显示商品
    * @apiVersion 0.0.1
    * @apiDescription 分页查找显示商品
    * @apiParam {String} time 商品更新时间
    * @apiParam {String} name 商品名称
	* @apiParam {String} type 商品类型
	* @apiParam {String} title  酒的度数
	* @apiParam {String} page  当前页码数
	* @apiParam {String} num  每一页显示几条商品信息
	* @apiSuccess {String} data 商品信息
	* @apiError (Error) {String} msg 查询错误
    * @apiSuccessExample {json} 返回样例
    *                {"code":"0","msg":"分页查询成功"}}
    * @apiErrorExample {json} 失败返回样例
    *                {"code":"-1","msg":"分页查询失败"}
*/

// 分页查找显示商品信息

Router.post('/find_jiu',(req,res)=>{
	//实现分页   总的数据    目标页   每页有3条
	 // console.log(req.body)
     let page=Number(req.body.page);
     let num=Number(req.body.num);
     let time=req.body.time;
     let price=req.body.time;

     let totall=0;
     jiu_model.find()
     .then((res)=>{
        totall=res.length
       return jiu_model.find().limit(num).skip((page-1)*num).sort({'time':-1})
     })
	.then((data)=>{
       let array={totall:totall,data:data}
	 res.send(util.sendData(0,'请求ok',array))
	})
	.catch((err)=>{
		console.log(err)
		res.send(util.sendData(-1,'请求错误',null))
	})
	
})

/**
    * @api {POST} /api/router/add_jiu 添加商品信息
    * @apiGroup 添加
    * @apiVersion 0.0.1
    * @apiDescription 添加商品
    * @apiParam {String} name 商品名称
 	* @apiParam {String} type 商品类型
 	* @apiParam {String} title  酒的度数
    * @apiParam {String} img 商品图片路径
    * @apiParam {String} price 商品价格
    * @apiSuccess (Success) {int} code 0 代表无错误 -1代表传递的参数有错误 -2代表执行出错
    * @apiSuccess (Success) {String} msg 信息
    * @apiSuccess (Success) {String} data 数据    
    * @apiError (Error) {int} code 0 代表无错误 -1代表传递的参数有错误 -2代表执行出错
    * @apiError (Error) {String} msg 信息
    * @apiError (Error) {String} data 数据
    * @apiSuccessExample {json} 返回样例
    *                {"code":"0","msg":"修改成功","data数据"}
    @apiErrorExample {json} 失败返回样例
    *                {"code":"-1","msg":"传递的参数有错误",null}
    * @apiErrorExample {json} 失败返回样例
    *                {"code":"-2","msg":"修改失败",null}
*/

// 添加商品信息
Router.post('/add_jiu',(req,res)=>{
	let {time,name,type,title,img,price}=req.body;
	jiu_model.insertMany({time,name,type,title,img,price})
	.then((data)=>{
		res.send(util.sendData(0,'请求ok',data))
	})
	.catch((err)=>{
		// console.log(err);
		res.send(util.sendData(-1,'传递的参数有错误',null));
	})
})

/**
    * @api {POST} /api/router/del_jiu 通过id删除商品信息
    * @apiGroup 删除
    * @apiVersion 0.0.1
    * @apiDescription 通过id删除
    * @apiParam {String} arr  商品的id的数组
    * @apiSuccess (Success) {int} code 0 代表无错误 -1代表传递的参数有错误 -2代表执行出错
    * @apiSuccess (Success) {String} msg 信息
    * @apiSuccess (Success) {String} data 数据    
    * @apiError (Error) {int} code 0 代表无错误 -1代表传递的参数有错误 -2代表执行出错
    * @apiError (Error) {String} msg 信息
    * @apiError (Error) {String} data 数据
    * @apiSuccessExample {json} 返回样例
    *                {"code":"0","msg":"修改成功","data数据"}
    @apiErrorExample {json} 失败返回样例
    *                {"code":"-1","msg":"传递的参数有错误",null}
    * @apiErrorExample {json} 失败返回样例
    *                {"code":"-2","msg":"修改失败",null}
*/

// 通过id删除商品信息
Router.get('/del_jiu',(req,res)=>{
    arr_id=req.query.arrid;
    console.log(arr_id);
	if(!arr_id){
		return res.send(util.sendData(-1,'arr error',null));
	}
	jiu_model.deleteMany({_id:{$in: arr_id }})
	.then((data)=>{
		res.send(util.sendData(0,'arr deleted ok',data));
	})
	.catch((err)=>{
        console.log(err);
		res.send(util.sendData(-2,'arr deleted on ok',null));
	})
})

/**
    * @api {POST} /api/router/typefind_jiu 通过类型查看商品信息
    * @apiGroup 查看
    * @apiVersion 0.0.1
    * @apiDescription 通过类型查看
    * @apiParam  {String} type 商品类型  
    * @apiParam {String} time 商品更新时间 
    * @apiSuccess (Success) {int} code 0 代表无错误 -1代表传递的参数有错误 -2代表执行出错
    * @apiSuccess (Success) {String} msg 信息
    * @apiSuccess (Success) {String} data 数据    
    * @apiError (Error) {int} code 0 代表无错误 -1代表传递的参数有错误 -2代表执行出错
    * @apiError (Error) {String} msg 信息
    * @apiError (Error) {String} data 数据
    * @apiSuccessExample {json} 返回样例
    *                {"code":"0","msg":"修改成功","data数据"}
    @apiErrorExample {json} 失败返回样例
    *                {"code":"-1","msg":"传递的参数有错误",null}
    * @apiErrorExample {json} 失败返回样例
    *                {"code":"-2","msg":"修改失败",null}
*/

// 通过类型查看商品信息
Router.post('/typefind_jiu',(req,res)=>{
	let type=req.body.type;
    let time=req.body.time;
	if(!type){
		return res.send(util.sendData(-1,'type error',null));
	}
	jiu_model.find({type:type}).sort({'time':-1})
	.then((data)=>{
		res.send(util.sendData(0,'type find ok',data));
	})
	.catch((err)=>{
		res.send(util.sendData(-2,'type find no ok',null));
	})
})

/**
    * @api {POST} /api/router/idfind_jiu 通过id查看商品信息
    * @apiGroup 查看
    * @apiVersion 0.0.1
    * @apiDescription 通过id查看
    * @apiParam {String} id  商品的id
    * @apiParam {String} time 商品更新时间
    * @apiSuccess (Success) {int} code 0 代表无错误 -1代表传递的参数有错误 -2代表执行出错
    * @apiSuccess (Success) {String} msg 信息
    * @apiSuccess (Success) {String} data 数据    
    * @apiError (Error) {int} code 0 代表无错误 -1代表传递的参数有错误 -2代表执行出错
    * @apiError (Error) {String} msg 信息
    * @apiError (Error) {String} data 数据
    * @apiSuccessExample {json} 返回样例
    *                {"code":"0","msg":"修改成功","data数据"}
    @apiErrorExample {json} 失败返回样例
    *                {"code":"-1","msg":"传递的参数有错误",null}
    * @apiErrorExample {json} 失败返回样例
    *                {"code":"-2","msg":"修改失败",null}
*/

// 通过id查看商品信息
Router.post('/idfind_jiu',(req,res)=>{
	let id=req.body.id;
    let time=req.body.time;
	if(!id){
		return res.send(util.sendData(-1,'id error',null));
	}
	jiu_model.find({_id:id}).sort({'time':-1})
	.then((data)=>{
		res.send(util.sendData(0,'id find ok',data));
	})
	.catch((err)=>{
		res.send(util.sendData(-2,'id find no ok',null));
	})
})

/**
    * @api {POST} /api/router/update_jiu 通过id修改商品信息
    * @apiGroup 修改
    * @apiVersion 0.0.1
    * @apiDescription 通过id修改 
    * @apiParam {String} id  商品的id
    * @apiParam {String} name 商品名称
    * @apiParam {String} type 商品类型
    * @apiParam {String} title  酒的度数
    * @apiParam {String} img 商品图片路径
    * @apiParam {String} price 商品价格
    * @apiSuccess (Success) {int} code 0 代表无错误 -1代表传递的参数有错误 -2代表执行出错
    * @apiSuccess (Success) {String} msg 信息
    * @apiSuccess (Success) {String} data 数据    
    * @apiError (Error) {int} code 0 代表无错误 -1代表传递的参数有错误 -2代表执行出错
    * @apiError (Error) {String} msg 信息
    * @apiError (Error) {String} data 数据
    * @apiSuccessExample {json} 返回样例
    *                {"code":"0","msg":"修改成功","data数据"}
    @apiErrorExample {json} 失败返回样例
    *                {"code":"-1","msg":"传递的参数有错误",null}
    * @apiErrorExample {json} 失败返回样例
    *                {"code":"-2","msg":"修改失败",null}
*/

// 通过id修改商品信息
Router.post('/update_jiu',(req,res)=>{
	let {time,id,title,name,img,price,type}=req.body;
	if(!id){
		res.send(util.sendData(-1,'update id error',null));
	}
	jiu_model.updateMany({_id:id},{time,title,name,img,price,type})
	.then((data)=>{
		res.send(util.sendData(0,'update ok',data));
	})
	.catch((err)=>{
		res.send(util.sendData(-2,'update no ok',null));
	})
})

 // $or : [ //多条件，数组
 //   {nick : {$regex : reg}},
 //   {email : {$regex : reg}}
 //  ]
/**
    * @api {POST} /api/router/find_jiu 模糊分页查找显示商品信息
    * @apiGroup 分页查找显示商品
    * @apiVersion 0.0.1
    * @apiDescription 分页查找显示商品
    * @apiParam {String} time 商品更新时间
    * @apiParam {String} name 商品名称
    * @apiParam {String} type 商品类型
    * @apiParam {String} title  酒的度数
    * @apiParam {String} page  当前页码数
    * @apiParam {String} num  每一页显示几条商品信息
    * @apiSuccess {String} data 商品信息
    * @apiError (Error) {String} msg 查询错误
    * @apiSuccessExample {json} 返回样例
    *                {"code":"0","msg":"分页查询成功"}}
    * @apiErrorExample {json} 失败返回样例
    *                {"code":"-1","msg":"分页查询失败"}
*/

// 模糊分页查找显示商品信息

Router.post('/mofind_jiu',(req,res)=>{
    //实现分页   总的数据    目标页   每页有3条
     // console.log(req.body)
     let page=Number(req.body.page);
     let num=Number(req.body.num);
     let time=req.body.time;
     let price=req.body.time;

     let totall=0;
     jiu_model.find()
     .then((res)=>{
        totall=res.length
       return jiu_model.find().limit(num).skip((page-1)*num).sort({'time':-1})
     })
    .then((data)=>{
       let array={totall:totall,data:data}
     res.send(util.sendData(0,'请求ok',array))
    })
    .catch((err)=>{
        console.log(err)
        res.send(util.sendData(-1,'请求错误',null))
    })
    
})



module.exports=Router;








