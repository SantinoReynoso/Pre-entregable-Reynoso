// Simulador de costos

const datos = {
    productos: []
}

function mostrarProducto() {
    if (datos.productos.length > 0) {
        alert("Tu lista de productos cargados:\n" + datos.productos.map(producto => producto.nombre).join('\n'));
    } else {
        alert("No hay productos almacenados.");
    }
}

function agregarProducto() {
    let agregarProducto = true;
    while (agregarProducto) {
        let productonombre = prompt("Ingresa el nombre del Producto nuevo, por favor.").toLowerCase();
        while (!productonombre) {
            productonombre = prompt("Hiciste algo mal, ¿cómo era el nombre del producto?").toLowerCase();
        }
        let productonuevo = { nombre: productonombre };
        datos.productos.push(productonuevo);
        alert(`LISTO, el producto "${productonombre}" ya fue cargado exitosamente.`);
        agregarProducto = confirm("¿Quieres agregar otro producto?");
    }
}

function calcularPrecio() {
    const opcion = prompt("Selecciona una opción:\n 1 - Poner precio a productos guardados\n 2 - Agregar nuevo producto con precio propio\n En este momento solo está disponible la opción `2`. Cualquier otro número dará error. Muchas gracias");

    switch (opcion) {
        case "1":
            ponerPrecioAProductos();
            break;
        case "2":
            agregarProductoConPrecio();
            break;
        default:
            alert("Opción inválida. Reinicia el programa.");
    }
}

function agregarProductoConPrecio() {
    let productonombre = prompt("PRIMERO\n Danos el nombre del producto:").toLowerCase();
    while (!productonombre) {
        productonombre = prompt("Hiciste algo mal. ¿Cómo era el nombre del producto?").toLowerCase();
    }
    const precioProducto = parseFloat(prompt(`Ingresa el precio para el producto "${productonombre}":`));
    if (!isNaN(precioProducto)) {
        const precioConIVA = calcularPrecioConIVA(precioProducto);
        const precioParaPublico = calcularPrecioPublico(precioConIVA, 0.25); // 0.25 es el 25%

        alert(`Precio del producto "${productonombre}": $${precioProducto}\nPrecio + IVA: $${precioConIVA}\nPrecio para el público: $${precioParaPublico}`);
    } else {
        alert("Precio ingresado inválido. Reinicia el programa e intenta de nuevo.");
    }
}

function calcularPrecioConIVA(precioBase) {
    const iva = 0.21;
    return precioBase * (1 + iva);
}

function calcularGananciaRecomendada(precioConIVA) {
    const porcentajeGananciaRecomendada = 0.25;
    return precioConIVA * porcentajeGananciaRecomendada;
}

function calcularPrecioPublico(precioConIVA, porcentajeGananciaRecomendada) {
    const precioParaPublico = precioConIVA + calcularGananciaRecomendada(precioConIVA);
    return precioParaPublico;
}

const inicializar = () => {
    let continuar = true;
    const decision = confirm("Buenos días, campeón.");
    while (continuar) {
        const decision = confirm("¿Quieres entrar al menú? Haz clic en 'Aceptar'. Si estás cansado y quieres cerrar el programa, pulsa 'Cancelar'");

        if (decision) {
            const eleccion = preguntaSeleccion();
            selector(eleccion);
        } else {
            alert("Apretaste 'Cancelar'. Anda a dormir mejor.");
            break;
        }

        continuar = confirm("¿Quieres realizar otra acción?");
    }
};

const preguntaSeleccion = () => {
    let eleccion = prompt("Elige la opción que prefieras:\n1 - Mostrar productos almacenados\n2 - Agregar productos\n3 - Realizar cuenta + recomendación de costo\nEs imprescindible que respondas con un número.");
    return parseInt(eleccion);
};

const selector = (eleccion) => {
    switch (eleccion) {
        case 1:
            mostrarProducto();
            break;
        case 2:
            agregarProducto();
            break;
        case 3:
            calcularPrecio();
            break;
        default:
            alert("Elegiste un dato inválido. ¡Arruinaste el programa! Reinicia.");
    }
};

inicializar();
