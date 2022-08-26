const carrito = [
    "producto 1",
    "producto 2",
    "producto 3"
]

console.log(carrito);
const appContenedor = document.querySelector('#app');
let html = '';

carrito.forEach((prod) => {
    html += `<ul><li>${prod}</li></ul>`
})

const carritoHTML = carrito.map((prod) => {
    return `<ul><li>${prod}</li></ul>`
})

carritoHTML.forEach(carrito => {
    html += carrito;
})


appContenedor.innerHTML = html;