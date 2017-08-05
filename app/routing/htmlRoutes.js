var path = require("path")

module.exports = function(app){

switch(urlParts.pathname){

	case "/tables":
	app.get("/tables", function(req, res){
		res.sendFile(path.join(__dirname, "../../public/tables.html"));
	});
	break;

	case "/reserve":
	app.get("/reserve", function(req, res){
		res.sendFile(path.join(__dirname, "../../public/reserve.html"));
	});
	break;

	case "/home":
	app.get("/home", function(req, res){
		res.sendFile(path.join(__dirname, "../../public/home.html"));
	});
	break;

	default:
	app.get("/404", function(req, res){
		res.sendFile(path.join(__dirname, "../../public/404.html"));
	});
	break;
}
}


tables 
reserve
