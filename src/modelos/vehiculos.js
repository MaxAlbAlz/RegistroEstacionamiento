// Clase base Vehiculo
export class Vehiculo {
  constructor(patente, marca, modelo, tipo, cliente = null) {
    this.patente = patente;
    this.marca = marca;
    this.modelo = modelo;
    this.tipo = tipo;             // "auto", "moto", "camioneta"
    this.horaEntrada = new Date(); 
    this.horaSalida = null;
    this.costo = 0;
    this.cliente = cliente;       // cliente ahora se guarda correctamente
  }

  registrarSalida() {
    this.horaSalida = new Date();
  }

  calcularMinutos() {
    if (!this.horaSalida) return 0;
    const diferenciaMs = this.horaSalida - this.horaEntrada;
    return Math.floor(diferenciaMs / 60000);
  }

  tarifaPorMinuto() {
    const tipo = this.tipo.toLowerCase();
    if (tipo === "auto") return 10;
    if (tipo === "moto") return 5;
    if (tipo === "camioneta") return 15;
    return 10;
  }

  calcularCosto() {
    const minutos = this.calcularMinutos();
    const tarifa = this.tarifaPorMinuto();
    this.costo = minutos * tarifa;
    return this.costo;
  }

  // --------------------------------------------
  // infoTexto ahora muestra nombre, DNI y teléfono
  // --------------------------------------------
  infoTexto() {
    let texto = `Tipo: ${this.tipo} | Marca: ${this.marca} | Modelo: ${this.modelo} | Patente: ${this.patente}`;
    if (this.cliente) {
      texto += ` | Cliente: ${this.cliente.nombre} | DNI: ${this.cliente.dni} | Tel: ${this.cliente.telefono}`;
    }
    return texto;
  }
}

// Clases hijas
export class Auto extends Vehiculo {
  constructor(patente, marca, modelo, cliente = null) {
    super(patente, marca, modelo, "auto", cliente);
  }
}

export class Moto extends Vehiculo {
  constructor(patente, marca, modelo, cliente = null) {
    super(patente, marca, modelo, "moto", cliente);
  }
}

export class Camioneta extends Vehiculo {
  constructor(patente, marca, modelo, cliente = null) {
    super(patente, marca, modelo, "camioneta", cliente);
  }
}
