const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const db=require('./dbconnect.js');
const path=require("path");
const cors=require("cors");
app.use(cors());
//post参数解析
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,'./public')));
app.use('/admin',express.static(path.join(__dirname,'./admin')));
app.use('/list',express.static(path.join(__dirname,'./list')));

//router
const user=require('./router/user.js')
app.use('/api/user',user)
const jiu=require("./router/jiu_router.js");
app.use('/api/router',jiu);
const jiu_upload=require("./router/jiu_upload.js");
app.use('/api/upload',jiu_upload);

app.listen(8000,()=>{
	console.log('server start in port'+8000)
})