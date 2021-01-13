const express = require('express');
const app = express();
const path = require('path');

//Referenciando a la carpeta de archivos publicos
const publicPath = path.resolve(__dirname, "./public");
//Haciendo uso de archivos estáticos
app.use(express.static(publicPath));

app.listen(3000,()=>{
  console.log('Servidor corriendo en el puerto 3000');
})

//Mandando la ruta absoluta de home.html para ser mostrada en la raiz http://localhost:3000/
app.get('/', (req,res)=>{
  res.sendFile(path.resolve(__dirname,'./views/home.html'));
})