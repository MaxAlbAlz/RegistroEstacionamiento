// src/app.js
import readline from "readline";
import {
  entradaVehiculo,
  salidaVehiculo,
  mostrarActivos,
  mostrarHistorial
} from "./index.js";

import ClienteFrecuente from "./modelos/ClientesFrecuentes.js";

// Base de clientes frecuentes
const clientes = [
  new ClienteFrecuente("Alberto Alz", "40123456", "11-1234-5678"),
  new ClienteFrecuente("Lucia Gomez", "40111234", "11-9988-7766"),
  new ClienteFrecuente("Carlos Perez", "40222333", "11-5566-7788"),
  new ClienteFrecuente("Marta Diaz", "40333444", "11-3344-5566")
];

// Configuración readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ---------------------------
// Función registrar ingreso
// ---------------------------
function registrarIngreso() {
  rl.question("Ingrese nombre del cliente: ", (nom) => {
    rl.question("Ingrese DNI del cliente: ", (dni) => {
      rl.question("Ingrese teléfono del cliente: ", (telefono) => {
        rl.question("Ingrese la patente del vehículo (ej: ABC123): ", (patente) => {
          rl.question("Ingrese la marca: ", (marca) => {
            rl.question("Ingrese el modelo: ", (modelo) => {
              rl.question("Ingrese el tipo (auto/moto/camioneta): ", (tipo) => {
                // Creamos cliente
                const cliente = new ClienteFrecuente(nom, dni, telefono);
                entradaVehiculo(patente, marca, modelo, tipo, cliente);
                mostrarMenu();
              });
            });
          });
        });
      });
    });
  });
}

// ---------------------------
// Función registrar salida
// ---------------------------
function registrarSalida() {
  rl.question("Ingrese la patente del vehículo que sale: ", (patente) => {
    salidaVehiculo(patente);
    mostrarMenu();
  });
}

// ---------------------------
// Menú principal
// ---------------------------
function mostrarMenu() {
  console.log("\n=== SISTEMA DE ESTACIONAMIENTO ===");
  console.log("1. Registrar ingreso de vehículo");
  console.log("2. Ver vehículos estacionados");
  console.log("3. Registrar salida de vehículo");
  console.log("4. Ver historial");
  console.log("5. Salir\n");

  rl.question("Seleccione una opción: ", (opcion) => {
    switch (opcion) {
      case "1":
        registrarIngreso();
        break;
      case "2":
        mostrarActivos();
        mostrarMenu();
        break;
      case "3":
        registrarSalida();
        break;
      case "4":
        mostrarHistorial();
        mostrarMenu();
        break;
      case "5":
        console.log("Saliendo del sistema...");
        rl.close();
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
        mostrarMenu();
    }
  });
}

// Inicia el menú
mostrarMenu();
