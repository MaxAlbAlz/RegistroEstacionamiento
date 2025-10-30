// src/modelos/vehiculo.js

// Clase base Vehiculo
export class Vehiculo {
  constructor(patente, marca, modelo, tipo) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
    this.tipo = tipo;             // "auto", "moto", "camioneta"
    this.horaEntrada = new Date(); 
    this.horaSalida = null;
    this.costo = 0;
  }

  registrarSalida() {
    this.horaSalida = new Date();
  }

  calcularMinutos() {
    if (!this.horaSalida) {
      return 0;
    }
    const diferenciaMs = this.horaSalida - this.horaEntrada;
    const minutos = Math.floor(diferenciaMs / 60000);
    return minutos;
  }

  tarifaPorMinuto() {
    const tipo = this.tipo.toLowerCase();
    if (tipo === "auto") {
      return 10;
    } else if (tipo === "moto") {
      return 5;
    } else if (tipo === "camioneta") {
      return 15;
    } else {
      return 10;
    }
  }

  calcularCosto() {
    const minutos = this.calcularMinutos();
    const tarifa = this.tarifaPorMinuto();
    this.costo = minutos * tarifa;
    return this.costo;
  }

  infoTexto() {
    return `Patente: ${this.patente} | Marca: ${this.marca} | Modelo: ${this.modelo} | Tipo: ${this.tipo.toLowerCase()} | Ingreso: ${this.horaEntrada.toLocaleString()} | Salida: ${this.horaSalida ? this.horaSalida.toLocaleString() : "En curso"} | Minutos: ${this.calcularMinutos()} | Costo: $${this.costo}`;
  }
}

// Clases hijas (opcional)
export class Auto extends Vehiculo {
  constructor(patente, marca, modelo) {
    super(patente, marca, modelo, "auto");
  }
}

export class Moto extends Vehiculo {
  constructor(patente, marca, modelo) {
    super(patente, marca, modelo, "moto");
  }
}

export class Camioneta extends Vehiculo {
  constructor(patente, marca, modelo) {
    super(patente, marca, modelo, "camioneta");
  }
}
