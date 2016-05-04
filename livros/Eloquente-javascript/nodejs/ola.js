(function(){
	/* first test 
	var garble = require("./t");

	// O índice 2 possui o valor do primeiro parâmetro da linha de comando
	var parametro = process.argv[2];

	console.log(garble(parametro));
	*/
	
	/* second test 
	var figlet = require("./node_modules/figlet/lib/figlet");

	figlet('Hello World!!', function(err, data) {
		if (err) {
			console.log('Something went wrong...');
			console.dir(err);
			return;
		}
		console.log(data)
	});
	*/
	
	/* third test 
	var fs = require("fs");
	fs.writeFile("graffiti.txt", "Node was here", function(err) {
	  if (err)
	    console.log("Failed to write file:", err);
	  else
	    console.log("File written.");
	});
	*/

	/* fourth test 
	var http = require("http");
	var server = http.createServer(function(request, response) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("<h1>Hello!</h1><p>You asked for <code>" +
			request.url + "</code></p>");
		response.end();
	});
	server.listen(8889);
	*/

	/* fifth test
	// stream */
	var http = require("http");
	http.createServer(function(request, response) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		request.on("data", function(chunk) {
			response.write(chunk.toString().toUpperCase());
		});
		request.on("end", function() {
			response.end();
		});
	}).listen(8000);

	var request = http.request({
		hostname: "localhost",
		port: 8000,
		method: "POST"
	}, function(response) {
		response.on("data", function(chunk) {
			process.stdout.write(chunk.toString());
		});
	});
	request.end("Hello server");

})();