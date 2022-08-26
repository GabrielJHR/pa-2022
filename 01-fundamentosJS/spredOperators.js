let lenguajes = [
    'JS',
    'PHP',
    'NodeJS',
    'C#'
]

let frameworks = [
    'React',
    'Angular',
    'Vue',
    'NextJS'
]

let personas = [
    {nombre: "Juan", puesto: 'Desarrollador'},
    {nombre: "Gabriel", puesto: 'UI Designer'},
    {nombre: "Tomas", puesto: 'Tester'},
    {nombre: "Gonzalo", puesto: 'Scrum Master'}
]

/* const filtrado = personas.filter((persona)=> {
    return persona.nombre[0] == 'G';
}) */

const filtrado = personas.find( persona => {
    return persona.nombre == 'Gabriel';
})

/* let concatenacion = lenguajes.concat(frameworks); */
/* let combinacion = [...lenguajes, ...frameworks]; */
/* let [reversa] = [...lenguajes.reverse()]; */

console.log(filtrado);