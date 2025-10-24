// Archivo principal del sistema de registro de estacionamiento
// Importamos la clase Vehiculo desde modelos
import { Vehiculo } from "./modelos/vehiculo.js";

// Creamos un arreglo donde guardaremos los vehículos registrados
const vehiculos = [];

// Función para registrar la entrada de un vehículo
function registrarEntrada(patente, marca, modelo, tipo) {
  const nuevoVehiculo = new Vehiculo(patente, marca, modelo, tipo);
  vehiculos.push(nuevoVehiculo);
  console.log(`🚗 Vehículo ${patente} ingresó al estacionamiento.`);
}

// Función para registrar la salida de un vehículo
function registrarSalida(patente) {
  const vehiculo = vehiculos.find(v => v.patente === patente);
  if (!vehiculo) {
    console.log("❌ No se encontró un vehículo con esa patente.");
    return;
  }
  vehiculo.registrarSalida();
  console.log(`✅ Vehículo ${patente} salió del estacionamiento.`);
  console.log(`⏱ Tiempo total: ${vehiculo.calcularTiempoEstadia()} minutos`);
  console.log(`💰 Costo total: $${vehiculo.calcularCosto()}`);
}

// Ejemplo de uso:
registrarEntrada("ABC123", "Toyota", "Corolla", "auto");

// Simular salida luego de unos segundos
setTimeout(() => {
  registrarSalida("ABC123");
}, 3000); // 3 segundos de espera
