// maybe we need to require sessionController
var cookieController = {};

cookieController.setCookie = setCookie;

function setCookie (req,res) {
//res.USERID
res.cookie('hothotnot', res.USERID);
console.log("WE JUST SET THE COOKIE MAYBE")
res.end()

}





module.exports = cookieController;