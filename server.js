var express = require("express");
var middleware = require("./middleware"); 
var app = express();
var PORT =process.env.PORT || 3000;




//localhost:3000
/*app.get("/", function(req, res){
    res.send("Merhaba Express");
})
*/

app.use(middleware.logger);

app.get("/hakkimda", middleware.requireAuthentication, function(req, res){
    res.send("Hakkımda Sayfası");
})

app.use(express.static(__dirname + '/public'));

console.log(__dirname);

app.listen(PORT, function(){
    console.log("Express Server" + PORT +" nolu portta çalışıyor");
})