// 📦 Este archivo se encarga de guardar y manejar los datos del estacionamiento.
// Usamos arrays para almacenar la información temporalmente en memoria.

// Lista de vehículos actualmente estacionados
let vehiculosActivos = [];

// Lista de vehículos que ya salieron (historial)
let historialVehiculos = [];

/**
 * 🚗 Función para registrar la entrada de un vehículo.
 * Recibe un objeto con los datos del vehículo (patente, marca, modelo, tipo, etc.)
 */
export function guardarEntrada(vehiculo) {
  if (!vehiculo || !vehiculo.patente) {
    console.log(" Error: el vehículo no tiene patente.");
    return;
  }

  // Verificamos si ya está estacionado
  const yaExiste = vehiculosActivos.find(v => v.patente === vehiculo.patente);
  if (yaExiste) {
    console.log(" El vehículo ya está registrado como activo.");
    return;
  }

  // Registramos la hora de entrada
  vehiculo.horaEntrada = new Date();
  vehiculosActivos.push(vehiculo);
  console.log(` Vehículo ${vehiculo.patente} ingresado correctamente.`);
}

/**
 *  Función para registrar la salida de un vehículo.
 * Calcula cuánto tiempo estuvo y cuánto debe pagar.
 */
export function guardarSalida(patente) {
  const vehiculo = vehiculosActivos.find(v => v.patente === patente);

  if (!vehiculo) {
    console.log(" No se encontró un vehículo activo con esa patente.");
    return;
  }

  vehiculo.horaSalida = new Date();

  // Calculamos el tiempo en horas
  const tiempoMs = vehiculo.horaSalida - vehiculo.horaEntrada;
  const horas = Math.ceil(tiempoMs / (1000 * 60 * 60));

  // Precio por hora según tipo
  let tarifa = 0;
  if (vehiculo.tipo === "auto") tarifa = 700;
  else if (vehiculo.tipo === "moto") tarifa = 400;
  else if (vehiculo.tipo === "camioneta") tarifa = 1000;
  else tarifa = 500; // tipo desconocido

  vehiculo.costo = horas * tarifa;

  // Movemos el vehículo al historial
  historialVehiculos.push(vehiculo);
  vehiculosActivos = vehiculosActivos.filter(v => v.patente !== patente);

  console.log(
    ` Vehículo ${vehiculo.patente} salió. Tiempo: ${horas}h. Total: $${vehiculo.costo}`
  );
}

/**
 *  Devuelve todos los vehículos activos actualmente.
 */
export function obtenerActivos() {
  return vehiculosActivos;
}

/**
 *  Devuelve el historial de vehículos que ya salieron.
 */
export function obtenerHistorial() {
  return historialVehiculos;
}
