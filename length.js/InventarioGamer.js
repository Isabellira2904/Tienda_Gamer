const productos = ["mouse", "teclado", "monitor", "audifonos"];
console.log(productos.length);


    
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i]);
    }


productos.push("cpu")

function AgregarProducto(arreglo, nuevoE){
    arreglo.push(nuevoE);

}
AgregarProducto(productos, "pantalla");
console.log(productos);

