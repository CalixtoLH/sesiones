var express = require ("express");
var path=require("path");
var session=require("express-session");
var usuariosRutas=require("./rutas/usuarios");

var app=express();
app.set("view engine", "ejs");
app.use("/web", express.static(path.join(__dirname,"/web")));
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret:"CALIXTO" , 
    resave:true,
    saveUninitialized:true 
}));

app.use("/",usuariosRutas);

var port=process.env.PORT || 3000;

app.listen(3000, ()=>{
    console.log(`servidor en http://localhost:${port}`);
});