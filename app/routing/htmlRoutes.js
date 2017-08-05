var path = require("path")

module.exports = function(app){

	app.get("/tables", function(req, res){
		res.sendFile(path.join(__dirname, "../../app/public/tables.html"));
	});
	app.get("/reserve", function(req, res){
		res.sendFile(path.join(__dirname, "../../app/public/reserve.html"));
	});
	app.use(function(req, res){
		res.sendFile(path.join(__dirname, "../../app/public/home.html"));
	});
}