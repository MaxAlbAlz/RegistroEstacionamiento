// =========================================
//  Módulo: Vehículo y subclases
// -----------------------------------------
// Define la clase base Vehiculo y las clases hijas
// Auto, Moto y Camioneta, que heredan sus propiedades.
//
// Cada clase tiene su propio tipo de vehículo y un método
// infoTexto() que devuelve información legible.
// =========================================

// -----------------------------------------
//  Clase base Vehiculo
// -----------------------------------------
export class Vehiculo {
  constructor(patente, tipo, color) {
    this.patente = patente;
    this.tipo = tipo;
    this.color = color;
    this.horaEntrada = null;
    this.horaSalida = null;
  }

  // Método para registrar la hora de entrada
  registrarEntrada() {
    this.horaEntrada = new Date();
  }

  // Método para registrar la hora de salida
  registrarSalida() {
    this.horaSalida = new Date();
  }

  // Método que devuelve un texto con la info del vehículo
  infoTexto() {
    return `Vehículo tipo: ${this.tipo.toUpperCase()} | Patente: ${this.patente} | Color: ${this.color}`;
  }
}

// -----------------------------------------
//  Clase Auto
// -----------------------------------------
export class Auto extends Vehiculo {
  constructor(patente, color) {
    super(patente, "auto", color);
  }
}

// -----------------------------------------
//  Clase Moto
// -----------------------------------------
export class Moto extends Vehiculo {
  constructor(patente, color) {
    super(patente, "moto", color);
  }
}

// -----------------------------------------
//  Clase Camioneta
// -----------------------------------------
export class Camioneta extends Vehiculo {
  constructor(patente, color) {
    super(patente, "camioneta", color);
  }
}

// -----------------------------------------
//  Exportación agrupada
// -----------------------------------------
export default {
  Vehiculo,
  Auto,
  Moto,
  Camioneta
};
