//1.- Importamos elemenos para usar express
const express = require('express')

//2.- Vamops a crear nuestro server cn express
const app = express()

// config para usar archivos, imagenes, audio, css
app.use(express.static("public"))

// Creamos Rutas con POST y GET

app.get("/home",(req,res,next)=>{
    res.sendFile(__dirname + "/views/home.html")
  })

  app.get("/about",(req,res,next)=>{
    res.sendFile(__dirname + "/views/about.html")
  })
  app.get("/works",(req,res,next)=>{
    res.sendFile(__dirname + "/views/works.html")
  })
  


  // Prendemos el servidor
app.listen(3000,()=>{
    console.log('Estoy corriendo en el puerto 3000')
})