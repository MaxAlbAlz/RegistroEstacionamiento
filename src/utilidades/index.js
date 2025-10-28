// =========================================
// 🏁 Archivo Principal: index.js
// -----------------------------------------
// Este es el punto de entrada del programa.
// Desde acá conectamos todos los módulos:
//  - modelos (Vehiculo, ClienteFrecuente)
//  - datos (almacenamiento)
//  - utilidades (validaciones y cálculos)
//
// También simulamos algunas acciones básicas
// como registrar entrada, salida y ver listados.
// =========================================

// 📦 Importamos módulos del proyecto
import Vehiculo from "./modelos/vehiculo.js";
import ClienteFrecuente from "./modelos/clienteFrecuente.js";
import {
  registrarEntrada,
  registrarSalida,
  obtenerVehiculosActuales,
  obtenerHistorial
} from "./datos/almacenamiento.js";

import {
  validarPatente,
  validarTipoVehiculo,
  formatearFecha
} from "./utilidades/utilidades.js";

// =========================================
// 🧠 Ejemplo: Crear algunos clientes frecuentes
// =========================================
const cliente1 = new ClienteFrecuente("Juan Pérez", "40123456", "1123456789");
const cliente2 = new ClienteFrecuente("María López", "38566789", "1133344455");

// =========================================
// 🚗 Registrar entrada de vehículos
// -----------------------------------------
// Primero validamos los datos antes de crear el vehículo
// =========================================
function registrarVehiculo(patente, marca, modelo, tipo, cliente = null) {
  if (!validarPatente(patente)) {
    console.log("❌ Patente inválida. Debe tener formato ABC123.");
    return;
  }

  if (!validarTipoVehiculo(tipo)) {
    console.log("❌ Tipo de vehículo no válido. Solo: auto, moto o camioneta.");
    return;
  }

  // Creamos el vehículo
  const nuevoVehiculo = new Vehiculo(patente, marca, modelo, tipo);
  registrarEntrada(nuevoVehiculo);

  // Si pertenece a un cliente frecuente, lo agregamos
  if (cliente) {
    cliente.agregarVehiculo(nuevoVehiculo);
  }

  console.log("✅ Vehículo registrado correctamente:");
  console.log(nuevoVehiculo.mostrarDatos());
}

// =========================================
// 🚪 Registrar salida de vehículo
// -----------------------------------------
function salidaVehiculo(patente) {
  registrarSalida(patente);
  console.log(`🚪 Vehículo con patente ${patente} ha salido del estacionamiento.`);
}

// =========================================
// 📋 Mostrar estado actual
// -----------------------------------------
function mostrarVehiculosActuales() {
  console.log("=== Vehículos actualmente en el estacionamiento ===");
  const vehiculos = obtenerVehiculosActuales();
  vehiculos.forEach(v => console.log(v.mostrarDatos()));
}

function mostrarHistorial() {
  console.log("=== Historial de vehículos ===");
  console.log(obtenerHistorial());
}

// =========================================
// 💡 Simulación de uso del sistema
// (Estos ejemplos sirven para probar que funciona)
// =========================================

// Registramos algunos vehículos
registrarVehiculo("ABC123", "Ford", "Fiesta", "auto", cliente1);
registrarVehiculo("DEF456", "Yamaha", "FZ", "moto", cliente2);

// Mostramos los vehículos en el estacionamiento
mostrarVehiculosActuales();

// Simulamos la salida de un vehículo
setTimeout(() => {
  salidaVehiculo("ABC123");
  mostrarHistorial();
}, 2000); // espera 2 segundos antes de simular salida

