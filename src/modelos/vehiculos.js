// =========================================
//  Módulo: Vehículo
// -----------------------------------------
// Este archivo define la estructura (clase) de los vehículos
// que se registran en el estacionamiento.
// Cada vehículo tiene:
//  - patente
//  - marca
//  - modelo
//  - tipo (auto, moto o camioneta)
//  - hora de entrada
//
// Además, esta clase tiene métodos para calcular el tiempo
// y el costo del estacionamiento.
// =========================================

// Exportamos la clase para poder usarla en otros archivos
export class Vehiculo {

  // -----------------------------------------
  //  Constructor: se ejecuta al crear un nuevo vehículo.
  // Asigna los valores recibidos a las propiedades del objeto.
  // -----------------------------------------
  constructor(patente, marca, modelo, tipo) {
    this.patente = patente;         // Ejemplo: "ABC123"
    this.marca = marca;             // Ejemplo: "Ford"
    this.modelo = modelo;           // Ejemplo: "Fiesta"
    this.tipo = tipo;               // Ejemplo: "auto"
    this.horaEntrada = new Date();  // Guarda la fecha y hora actual
  }

  // -----------------------------------------
  //  Calcula el tiempo total que el vehículo estuvo estacionado.
  // Recibe la hora de salida y devuelve el tiempo en minutos.
  // -----------------------------------------
  calcularTiempoEstacionado(horaSalida) {
    const diferencia = horaSalida - this.horaEntrada; // en milisegundos
    const minutos = Math.floor(diferencia / 60000);   // convertir a minutos
    return minutos;
  }

  // -----------------------------------------
  //  Calcula el costo total según el tipo de vehículo
  // y el tiempo estacionado.
  // -----------------------------------------
  calcularCosto(horaSalida) {
    const minutos = this.calcularTiempoEstacionado(horaSalida);
    let tarifaPorMinuto;
    if (this.tipo.toLowerCase() === "auto") {
      tarifaPorMinuto = 100; // 100 pesos por minuto
    } else if (this.tipo.toLowerCase() === "moto") {
      tarifaPorMinuto = 50; // 50 pesos por minuto
    } else if (this.tipo.toLowerCase() === "camioneta") {
      tarifaPorMinuto = 150; // 150 pesos por minuto
    } else {
      tarifaPorMinuto = 100; // Valor por defecto
    }

    const total = minutos * tarifaPorMinuto;
    return total.toFixed(2); // dos decimales
  }

  // -----------------------------------------
  //  Devuelve un texto legible con los datos del vehículo.
  // -----------------------------------------
  mostrarDatos() {
    return ` Patente: ${this.patente} | Marca: ${this.marca} | Modelo: ${this.modelo} | Tipo: ${this.tipo} | Ingreso: ${this.horaEntrada.toLocaleString()}`;
  }
}

// Exportamos por defecto también (por si se importa así)
export default Vehiculo;
