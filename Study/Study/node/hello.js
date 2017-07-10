var http =require("http");//获取http对象

　　//利用http对象的createServer函数创建一个server对象，参数是一个无参函数，函数利用response对象向浏览器写入头信息和文本

　　var server = http.createServer(function(request, response) {

　　response.writeHead(200,{"Content-Type":"text/plain"});

　　response.write("Hello World");

　　response.end();

　　});

　　//server对象监听8888端口

　　server.listen(8888);

  console.log('Server running at http://127.0.0.1:8888/');
