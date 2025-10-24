// clase que representa un vehiculo en el sistema
export class Vehiculo {
  constructor(patente, marca, modelo, tipo) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
    this.tipo = tipo;
    this.horaEntrada = new Date(); // se registra automáticamente al crear el vehículo
    this.horaSalida = null;
  }

  // Marca la salida del vehículo
  registrarSalida() {
    this.horaSalida = new Date();
  }

  // Calcula el tiempo total en minutos
  calcularTiempoEstadia() {
    if (!this.horaSalida) return 0;
    const diferenciaMs = this.horaSalida - this.horaEntrada;
    return Math.round(diferenciaMs / 60000); // convierte milisegundos a minutos
  }

  // Calcula el costo de la estadía (ejemplo: $50 por minuto)
  calcularCosto() {
    const minutos = this.calcularTiempoEstadia();
    return minutos * 50;
  }
}
