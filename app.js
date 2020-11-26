const express = require('express')
const app = express();

// creamos rutas
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/mipagina.html');
})

app.get('/muestra-imagen',(req,res)=>{
        res.sendFile(__dirname+'/js.png')
})

app.get('/about',(req,res)=>{
        res.send('hola Mundo')
})

//2:34:00  HEROKU

// aca creamos el servidor
const port = process.env.PORT || 4000;

 app.listen(port,()=>{
         console.log('servidor corriendo en el puerto ' + port);
 })



app.use(express.json());
app.use(express.urlencoded({extended:false}));

//ruta absoluta es decir c://nodecurso/ pagina.html
//ruta relativa hace referencia a donde esta el archivo en el ide 
//res-->obtengo cosas del servidor
//req--> hago una peticion al servidor
// get-> pido algo 
// post--Z inserto dato a la base


