function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

saludar('Gabriel');

/* Function expression */
const cliente = function(nombre){
    console.log(`Bienvenido ${nombre}`);
}

cliente('Gabriel');

/* Arrow function */
let viajando = (destino) => {
    console.log(`Viajando a ${destino}`);
}

viajando('Bogota');