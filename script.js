

// Función para cotizar un seguro de auto
function cotizarSeguroAuto() {
    let edad = prompt("Por favor, ingrese su edad:");
    let marca = prompt("Ingrese la marca de su auto (ej. Toyota, Ford, Chevrolet):");

    let precioBase = 2000;

    let precioFinal = precioBase;

    if (edad < 25) {
        precioFinal += 500;
    }

    if (marca.toLowerCase() === 'toyota') {
        precioFinal += 500;
    } else if (marca.toLowerCase() === 'ford') {
        precioFinal += 300;
    } else {
        precioFinal += 100;
    }

    alert(`El precio final del seguro de auto para una persona de ${edad} años con un auto de marca ${marca} es: $${precioFinal}`);
}

// Llamamos a la función para cotizar un seguro de auto
cotizarSeguroAuto();