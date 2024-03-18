//importamos la libreria
const express = require("express");

//creamos el proyecto express 
const app = express(); 

//creamos una ruta la cual se va a ejecutar en el endpoint "/api"
//( http://localhost:3000/api )
app.get("/api", (req, res) => {

    //query params (datos que se pasan por la url)
    const name = req.query.name
    const age = req.query.age

    //este es el objeto que pasaremos como respuesta de la peticion
    const resolve = {
        userName:name,
        userAge:age,
        status:"Ok",
        code:200,
        presentation:``
    }

    //esta es la respuesta de la peticion, el cual sera un objeto json{}
    res.json( resolve );

});

//levantamos la aplicacion
app.listen(8080, ()=>{ 

    console.log("App On!");

});
