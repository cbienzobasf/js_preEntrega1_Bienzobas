function usoCotizacion() {
    const IMP_IVA = 0.19; // Definición % Impuesto IVA
    let subtotal = 0; // Variable para acumular costo sin IVA
    let selectedServices = ""; // String para almacenar los nombres de los servicios seleccionados

    // Precios y nombres de los servicios como variables individuales
    const precioDecoracion = 200000;
    const precioBanqueteria = 500000;
    const precioMusica = 150000;

    const nombreDecoracion = "Decoración";
    const nombreBanqueteria = "Banquetería";
    const nombreMusica = "Música";

    // While para solicitar cada servicio
    // Ciclo para agregar servicios de decoración
    while (true) {
        const respuesta = prompt(`¿Desea incluir ${nombreDecoracion} por ${precioDecoracion.toLocaleString("es-CL")} CLP en su cotización? (S para sí, N para no, 0 para salir)`);
        if (respuesta === "0") {
            alert("Has salido del programa.");
            return; // Salir de la función si el usuario ingresa "0"
        } else if (respuesta.toLowerCase() === "s") {
            subtotal += precioDecoracion;
            selectedServices += nombreDecoracion + ", ";
            break; // Salir del bucle si la respuesta es "s"
        } else if (respuesta.toLowerCase() === "n") {
            break; // Salir del bucle si la respuesta es "n"
        } else {
            alert("Error respuesta, por favor ingrese S para sí, N para no, o 0 para salir.");
        }
    }

    // Ciclo para agregar servicios de banquetería
    while (true) {
        const respuesta = prompt(`¿Desea incluir ${nombreBanqueteria} por ${precioBanqueteria.toLocaleString("es-CL")} CLP en su cotización? (S para sí, N para no, 0 para salir)`);
        if (respuesta === "0") {
            alert("Has salido del programa.");
            return; // Salir de la función si el usuario ingresa "0"
        } else if (respuesta.toLowerCase() === "s") {
            subtotal += precioBanqueteria;
            selectedServices += nombreBanqueteria + ", ";
            break; // Salir del bucle si la respuesta es "s"
        } else if (respuesta.toLowerCase() === "n") {
            break; // Salir del bucle si la respuesta es "n"
        } else {
            alert("Error respuesta, por favor ingrese S para sí, N para no, o 0 para salir.");
        }
    }

    // Ciclo para agregar servicios de música
    while (true) {
        const respuesta = prompt(`¿Desea incluir ${nombreMusica} por ${precioMusica.toLocaleString("es-CL")} CLP en su cotización? (S para sí, N para no, 0 para salir)`);
        if (respuesta === "0") {
            alert("Has salido del programa.");
            return; // Salir de la función si el usuario ingresa "0"
        } else if (respuesta.toLowerCase() === "s") {
            subtotal += precioMusica;
            selectedServices += nombreMusica + ", ";
            break; // Salir del bucle si la respuesta es "s"
        } else if (respuesta.toLowerCase() === "n") {
            break; // Salir del bucle si la respuesta es "n"
        } else {
            alert("Respuesta no válida. Por favor, ingrese S para sí, N para no, o 0 para salir.");
        }
    }

    // Remover última coma y espacio sobrante en `selectedServices`
    selectedServices = selectedServices.slice(0, -2);

    // Cálculo IVA y total
    const iva = subtotal * IMP_IVA;
    const total = subtotal + iva;

    // Output resumen de la selección usuario final
    alert(`Productos seleccionados: ${selectedServices}\n` +
            `Subtotal (sin IVA): ${subtotal.toLocaleString("es-CL")} CLP\n` +
            `IVA (19%): ${iva.toLocaleString("es-CL")} CLP\n` +
            `Total (con IVA): ${total.toLocaleString("es-CL")} CLP\n`);
}
