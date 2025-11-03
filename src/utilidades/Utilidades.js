// =========================================
//  Módulo: Utilidades
// -----------------------------------------
// Este archivo contiene funciones generales que pueden ser usadas
// en cualquier parte del programa. Nos ayuda a no repetir código.
//
// Ejemplo de funciones:
// - Validar una patente
// - Formatear una fecha y hora
// - Calcular diferencia de minutos entre dos fechas
// =========================================

// -----------------------------------------
//  Función para validar una patente argentina simple.
// Devuelve true si tiene formato válido (3 letras y 3 números, ej: ABC123)
// -----------------------------------------
export function validarPatente(patente) {
  const patron = /^[A-Z]{3}\d{3}$/i; // patrón de 3 letras + 3 números
  const patron2 = /^[A-Z]{2}\d{3}[A-Z]{2}$/i; // patrón de 2 letras + 3 números + 2 letras (formato nuevo)
  if (patron2.test(patente)) {
    return true;
  }
  return patron.test(patente);
}

// -----------------------------------------
//  Función para calcular la diferencia en minutos entre dos fechas
// -----------------------------------------
export function calcularDiferenciaMinutos(fechaInicio, fechaFin) {
  const diferencia = fechaFin - fechaInicio; // en milisegundos
  const minutos = Math.floor(diferencia / 60000); // convertir a minutos
  return minutos;
}

// -----------------------------------------
//  Función para formatear una fecha en texto legible
// -----------------------------------------
export function formatearFecha(fecha) {
  return fecha.toLocaleString(); // Ejemplo: "24/10/2025 14:33:00"
}

// -----------------------------------------
//  Función para validar tipo de vehículo
// Acepta solo "auto", "moto" o "camioneta"
// -----------------------------------------
export function validarTipoVehiculo(tipo) {
  const tiposValidos = ["auto", "moto", "camioneta"];
  return tiposValidos.includes(tipo.toLowerCase());
}
export const minutosEntre = calcularDiferenciaMinutos;
// -----------------------------------------
//  Exportamos todas las funciones para poder usarlas en otros módulos
// -----------------------------------------
export default {
  validarPatente,
  calcularDiferenciaMinutos,
  formatearFecha,
  validarTipoVehiculo
};
