let productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 3 }
];

let carrito = [];

function agregarAlCarrito(nombreProducto, cantidad) {
  
    let producto = productos.find(p => p.nombre === nombreProducto);
    
    if (producto && producto.stock >= cantidad) {
      
        let itemEnCarrito = carrito.find(item => item.nombre === nombreProducto);
        
        if (itemEnCarrito) {
         
            itemEnCarrito.cantidad += cantidad;
        } else {
          
            carrito.push({
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: cantidad
            });
        }
    
        producto.stock -= cantidad;
        
        console.log(`${cantidad} ${nombreProducto}(s) agregado(s) al carrito.`);
    } else {
        console.log("Producto no disponible o cantidad insuficiente en stock.");
    }
}

function mostrarCarrito() {
    console.log("Carrito de compras:");
    carrito.forEach(item => {
        let subtotal = item.precio * item.cantidad;
        console.log(`${item.nombre} - Cantidad: ${item.cantidad} - Subtotal: $${subtotal}`);
    });
}
function calcularTotal() {
    let total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    console.log(`Total de la compra: $${total}`);
}