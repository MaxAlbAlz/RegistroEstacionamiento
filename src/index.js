// =========================================
//  Archivo: index.js
// -----------------------------------------
//  Punto de entrada lógico del sistema.
//  Contiene las funciones principales para registrar
//  ingresos, salidas y mostrar la información.
//
//  NO ejecuta nada automáticamente — eso se hace desde app.js
// =========================================
import readline from "readline";
import { Vehiculo, Auto, Moto, Camioneta } from "./modelos/vehiculos.js";
import ClienteFrecuente from "./modelos/ClientesFrecuentes.js";

import {
  guardarEntrada,
  guardarSalida,
  obtenerActivos,
  obtenerHistorial
} from "./datos/almacenamiento.js";

import {
  validarPatente,
  validarTipoVehiculo,
  formatearFecha
} from "./utilidades/Utilidades.js";

// -------------------------------------------------
// Función para registrar entrada con validaciones simples
// -------------------------------------------------
export function entradaVehiculo(patente, marca, modelo, tipo, cliente = null) {
  if (!validarPatente(patente)) {
    console.log(" Patente inválida. Debe ser 3 letras y 3 números (ej: ABC123).");
    return false;
  }

  if (!validarTipoVehiculo(tipo)) {
    console.log(" Tipo inválido. Usar: auto, moto o camioneta.");
    return false;
  }

  let v;

  // Creamos el vehículo según el tipo
  if (tipo.toLowerCase() === "auto") {
    v = new Auto(patente, marca, modelo, cliente);
  } else if (tipo.toLowerCase() === "moto") {
    v = new Moto(patente, marca, modelo, cliente);
  } else if (tipo.toLowerCase() === "camioneta") {
    v = new Camioneta(patente, marca, modelo, cliente);
  } else {
    v = new Vehiculo(patente, marca, modelo, tipo, cliente);
  }

  // Asociamos el cliente si fue pasado
  if (cliente && typeof cliente.agregarVehiculo === "function") {
    cliente.agregarVehiculo(v);
  }

  // Guardamos la entrada
  guardarEntrada(v);
  console.log(" Vehículo registrado correctamente.");
  console.log(v.infoTexto());
  return true;
}

// -------------------------------------------------
// Función para registrar salida
// -------------------------------------------------
export function salidaVehiculo(patente) {
  const activos = obtenerActivos();
  let encontrado = null;

  for (let i = 0; i < activos.length; i++) {
    if (activos[i].patente === patente) {
      encontrado = activos[i];
      break;
    }
  }

  if (!encontrado) {
    console.log(" No se encontró vehículo con esa patente.");
    return false;
  }

  // Calculamos tiempo y costo
  encontrado.registrarSalida();
  const minutos = encontrado.calcularMinutos();
  const costo = encontrado.calcularCosto();

  // Guardamos salida
  guardarSalida(patente);
  console.log(" Salida registrada con éxito:");
  console.log(encontrado.infoTexto());
  console.log(" Tiempo estacionado:", minutos, "minutos");
  console.log(" Costo total: $" + costo);
  return true;
}

// -------------------------------------------------
// Función para mostrar vehículos activos
// -------------------------------------------------
export function mostrarActivos() {
  const activos = obtenerActivos();
  console.log("\n===  Vehículos activos ===");
  if (activos.length === 0) {
    console.log("No hay vehículos en el estacionamiento.");
  } else {
    for (let i = 0; i < activos.length; i++) {
      console.log(activos[i].infoTexto());
    }
  }
}

// -------------------------------------------------
// Función para mostrar historial
// -------------------------------------------------
export function mostrarHistorial() {
  const historial = obtenerHistorial();
  console.log("\n===  Historial de vehículos ===");
  if (historial.length === 0) {
    console.log("No hay historial todavía.");
  } else {
    for (let i = 0; i < historial.length; i++) {
      console.log(historial[i].infoTexto ? historial[i].infoTexto() : JSON.stringify(historial[i]));
    }
  }
}
