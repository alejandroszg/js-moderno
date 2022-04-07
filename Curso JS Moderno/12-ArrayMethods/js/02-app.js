// Encontrar la posición de índice en un array
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Tradicional
meses.forEach((mes,i)=>{
    if(mes === 'Abril'){
        console.log(`${mes} se encuentra en el índice ${i}`)
    }
})

//Con el método findIndex()

//Encuentra el índice de Mayo
const indice = meses.findIndex( mes => mes === 'Mayo');
console.log(indice)

//Encuentra un índice de un arreglo de objetos
const indice2 = carrito.findIndex(producto => producto.precio === 100);
console.log(indice2);