// =========================================
// 📦 Módulo de Almacenamiento
// -----------------------------------------
// Este archivo se encarga de manejar el "almacenamiento"
// de datos dentro del sistema de estacionamiento.
//
// En este caso no usamos una base de datos real, sino
// estructuras en memoria (arrays) que simulan los registros.
//
// Más adelante podríamos reemplazar este módulo para que
// guarde los datos en un archivo JSON o en una base de datos real.
// =========================================

// 🧠 Aquí guardamos los vehículos actualmente en el estacionamiento
const vehiculosEnEstacionamiento = [];

// 🕓 Aquí guardamos el historial de vehículos que ya salieron
const historialDeVehiculos = [];

// -----------------------------------------
// 🚗 Función para registrar la entrada de un vehículo
// Recibe un objeto con los datos del vehículo
// -----------------------------------------
export function registrarEntrada(vehiculo) {
  vehiculosEnEstacionamiento.push(vehiculo);
}

// -----------------------------------------
// 🚪 Función para registrar la salida de un vehículo
// Busca el vehículo por su patente y lo mueve al historial
// -----------------------------------------
export function registrarSalida(patente) {
  const indice = vehiculosEnEstacionamiento.findIndex(v => v.patente === patente);
  if (indice !== -1) {
    const vehiculo = vehiculosEnEstacionamiento.splice(indice, 1)[0];
    historialDeVehiculos.push({
      ...vehiculo,
      horaSalida: new Date().toLocaleString()
    });
  } else {
    console.log(`No se encontró el vehículo con patente ${patente}`);
  }
}

// -----------------------------------------
// 📋 Función para obtener la lista actual de vehículos dentro
// -----------------------------------------
export function obtenerVehiculosActuales() {
  return vehiculosEnEstacionamiento;
}

// -----------------------------------------
// 📚 Función para obtener el historial completo de vehículos
// -----------------------------------------
export function obtenerHistorial() {
  return historialDeVehiculos;
}

// -----------------------------------------
// 🧾 Exportamos todas las funciones para usarlas en otros módulos
// -----------------------------------------
export default {
  registrarEntrada,
  registrarSalida,
  obtenerVehiculosActuales,
  obtenerHistorial
};
