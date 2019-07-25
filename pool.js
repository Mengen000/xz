
const mysql=require('mysql');

//创建连接池对象
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:3306,
	password:'',
	user:'root',
	database:'xz',
	connectionLimit:15
});
//导出连接池
module.exports=pool;



