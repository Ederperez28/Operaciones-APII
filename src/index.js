const express = require ('express'); // importar libreria express
const app = express(); // iniciar libreria express
const morgan = require ('morgan');
const cors = require ('cors'); // importa el paquete 

//Configuraciones servidor
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);


console.log("Hola Mundo")

console.log("mi primer api")


app.use(morgan('dev')); //peticiones de consola morgan maneja errores

app.use(express.urlencoded({extended:false})); // para decir que vamos a manejar apis

app.use(express.json());  // manejar el formato json
app.use(cors()); // permitir peticiones de otros sitios 


app.get('/', (req, res) => {
    res.json(
        {
            "Title": "Hola Mundo"
        }
    );
})

app.post('/sumar', (req, res) => { // http://localhost:3000/Sumar
    const { num1, num2 } = req.body; // se declaran los datos de entrada

    //Validar que se hayan enviado los dos numeros que no esten vacio
    if (!num1 || !num2) {
        return res.status(400).send({ error: 'Faltan numeros para sumar'});
    }

    //Sumar los numeros
    const resultado = num1 + num2;

    //Enviar el resultado al front

    res.send({ resultado });
});

app.post('/restar', (req, res) => { // http://localhost:3000/Resta
    const { num1, num2 } = req.body; // se declaran los datos de entrada

    //Validar que se hayan enviado los dos numeros que no esten vacio
    if (!num1 || !num2) {
        return res.status(400).send({ error: 'Faltan numeros para restar'});
    }

    //Sumar los numeros
    const resultado = num1 - num2;

    //Enviar el resultado al front

    res.send({ resultado });
});

app.post('/dividir', (req, res) => { // http://localhost:3000/Division
    const { num1, num2 } = req.body; // se declaran los datos de entrada

    //Validar que se hayan enviado los dos numeros que no esten vacio
    if (!num1 || !num2) {
        return res.status(400).send({ error: 'Faltan numeros para dividir'});
    }

    //Sumar los numeros
    const resultado = num1 / num2;

    //Enviar el resultado al front

    res.send({ resultado });
});

app.post('/multiplicar', (req, res) => { // http://localhost:3000/Multiplicacion
    const { num1, num2 } = req.body; // se declaran los datos de entrada

    //Validar que se hayan enviado los dos numeros que no esten vacio
    if (!num1 || !num2) {
        return res.status(400).send({ error: 'Faltan numeros para multiplicar'});
    }

    //Sumar los numeros
    const resultado = num1 * num2;

    //Enviar el resultado al front

    res.send({ resultado });
});

app.post('/Area-Triangulo', (req, res) => { // localhost:3000/Area-Triangulo
    const { Base, Altura } = req.body; // se declaran los datos de entrada

    //Validar que se hayan enviado los dos numeros que no esten vacio
    if (!Base || !Altura) {
        return res.status(400).send({ error: 'Faltan numeros para realizar operacion'});
    }

    //Sumar los numeros
    const resultado = Base * Altura / 2;

    //Enviar el resultado al front

    res.send({ resultado });
});

app.post('/Area-Cuadrado', (req, res) => { // localhost:3000/Area-Triangulo
    const { Lado } = req.body; // se declaran los datos de entrada

    //Validar que se hayan enviado los dos numeros que no esten vacio
    if ( !Lado ) {
        return res.status(400).send({ error: 'Faltan numeros para realizar operacion'});
    }

    //Sumar los numeros
    const resultado = Lado * Lado;

    //Enviar el resultado al front

    res.send({ resultado });
});


app.post('/Area-Circulo', (req, res) => { // localhost:3000/Area-Triangulo
    const { Radio } = req.body; // se declaran los datos de entrada

    //Validar que se hayan enviado los dos numeros que no esten vacio
    if ( !Radio ) {
        return res.status(400).send({ error: 'Faltan numeros para realizar operacion'});
    }

    //Sumar los numeros
    const resultado = 3.1416 * Radio^2;

    //Enviar el resultado al front

    res.send({ resultado });
});


app.post('/Area-Circulo', (req, res) => { // localhost:3000/Area-Triangulo
    const { Radio } = req.body; // se declaran los datos de entrada

    //Validar que se hayan enviado los dos numeros que no esten vacio
    if ( !Radio ) {
        return res.status(400).send({ error: 'Faltan numeros para realizar operacion'});
    }

    //Sumar los numeros
    const resultado = 3.1416 * Radio^2;

    //Enviar el resultado al front

    res.send({ resultado });
});



app.post('/Perimetro-Circulo', (req, res) => { // localhost:3000/Area-Triangulo
    const { Diametro } = req.body; // se declaran los datos de entrada

    //Validar que se hayan enviado los dos numeros que no esten vacio
    if ( !Diametro ) {
        return res.status(400).send({ error: 'Faltan numeros para realizar operacion'});
    }

    //Sumar los numeros
    const resultado = 3.1416 * Diametro;

    //Enviar el resultado al front

    res.send({ resultado });
});


app.post('/Perimetro-Cuadrado', (req, res) => { // localhost:3000/Area-Triangulo
    const { Lado } = req.body; // se declaran los datos de entrada

    //Validar que se hayan enviado los dos numeros que no esten vacio
    if ( !Lado ) {
        return res.status(400).send({ error: 'Faltan numeros para realizar operacion'});
    }

    //Sumar los numeros
    const resultado = Lado * 4;

    //Enviar el resultado al front

    res.send({ resultado });
});



app.post('/Perimetro-Triangulo', (req, res) => { // localhost:3000/Area-Triangulo
    const { Lado } = req.body; // se declaran los datos de entrada

    //Validar que se hayan enviado los dos numeros que no esten vacio
    if ( !Lado ) {
        return res.status(400).send({ error: 'Faltan numeros para realizar operacion'});
    }

    //Sumar los numeros
    const resultado = Lado * Lado * Lado;

    //Enviar el resultado al front

    res.send({ resultado });
});




// Iniciando servidor
app.listen(app.get('port'),()=>{
    //console.log(`Server listening on port ${app.get('port')}`);
});
