//un simulador de costos


//IMAGINEMOS QUE: trabajamos en una empresa, y creamos un codigo que nos ayuda a agilizar nuestras tareas mas comunes
// primero necesitamos iniciar sesion

//Datos del dueño:
const inicializar = () => {
    const decision = confirm("Buenos días, campeón. ¿Quieres entrar al menú? Haz clic en 'Aceptar'. Si estás cansado y quieres cerrar el programa, pulsa 'Cancelar'");
    if (decision) {
        const eleccion = preguntaSeleccion();
        selector(eleccion);
    } else {
        alert("Apretaste 'Cancelar'. Anda a dormir mejor.");
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
