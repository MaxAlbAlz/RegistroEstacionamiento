// index.js
// Punto de entrada. Usamos import/export y llamamos funciones con if/else
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
  minutosEntre,
  formatearFecha
} from "./utilidades/Utilidades.js";

// Simulamos una "base" de clientes frecuentes
const cliente1 = new ClienteFrecuente("Alberto Alz", "40123456", "11-1234-5678");
const cliente2 = new ClienteFrecuente("Lucia Gomez", "40111234", "11-9988-7766");

// Función para registrar entrada con validaciones simples
export function entradaVehiculo(patente, marca, modelo, tipo, cliente = null) {
  // validaciones con if/else (muy explícitas)
  if (!validarPatente(patente)) {
    console.log("Patente inválida. Debe ser 3 letras y 3 números (ej: ABC123).");
    return false;
  }
  if (!validarTipoVehiculo(tipo)) {
    console.log("Tipo inválido. Usar: auto, moto o camioneta.");
    return false;
  }

  // creamos objeto Vehiculo
  const v = new Vehiculo(patente, marca, modelo, tipo);

  // si es cliente frecuente (objeto pasado), lo asociamos
  if (cliente && typeof cliente.agregarVehiculo === "function") {
    cliente.agregarVehiculo(v);
  }

  // guardamos la entrada en el "almacenamiento"
  guardarEntrada(v);

  console.log("Entrada registrada:");
  console.log(v.infoTexto());
  return true;
}

// Función para registrar salida
export function salidaVehiculo(patente) {
  // buscamos entre activos
  const activos = obtenerActivos();
  let encontrado = null;
  for (let i = 0; i < activos.length; i++) {
    if (activos[i].patente === patente) {
      encontrado = activos[i];
      break;
    }
  }
  if (!encontrado) {
    console.log("No se encontró vehículo con esa patente entre los activos.");
    return false;
  }

  // registramos salida y calculamos costo
  encontrado.registrarSalida();
  const minutos = encontrado.calcularMinutos();
  const costo = encontrado.calcularCosto();

  // movemos al historial
  guardarSalida(patente); // devuelve true/false si movedo

  console.log("Salida registrada:");
  console.log(encontrado.infoTexto());
  console.log("Minutos estacionado:", minutos);
  console.log("Costo total: $" + costo);
  return true;
}

// Funciones para mostrar listados
export function mostrarActivos() {
  const activos = obtenerActivos();
  console.log("=== Vehículos activos ===");
  if (activos.length === 0) {
    console.log("No hay vehículos en el estacionamiento.");
  } else {
    for (let i = 0; i < activos.length; i++) {
      console.log(activos[i].infoTexto());
    }
  }
}

export function mostrarHistorial() {
  const h = obtenerHistorial();
  console.log("=== Historial ===");
  if (h.length === 0) {
    console.log("No hay historial todavía.");
  } else {
    for (let i = 0; i < h.length; i++) {
      console.log(h[i].infoTexto ? h[i].infoTexto() : JSON.stringify(h[i]));
    }
  }
}

// ----- Simulación de uso (para que al ejecutar node src/index.js se vea algo)
entradaVehiculo("ABC123", "Ford", "Fiesta", "auto", cliente1);
entradaVehiculo("DEF456", "Honda", "Wave", "moto", cliente2);

// mostramos activos
mostrarActivos();

// simulamos salida con retardo para que haya diferencia de tiempo
setTimeout(() => {
  salidaVehiculo("ABC123");
  mostrarHistorial();
}, 1000);
