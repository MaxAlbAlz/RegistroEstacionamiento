export default class ClienteFrecuente {
  constructor(nombre, dni, telefono) {
    this.nombre = nombre;
    this.dni = dni;
    this.telefono = telefono;
    this.vehiculos = [];
  }

  agregarVehiculo(vehiculo) {
    if (vehiculo) {
      this.vehiculos.push(vehiculo);
    }
  }

  cantidadIngresos() {
    return this.vehiculos.length;
  }

  esFrecuente() {
    return this.cantidadIngresos() >= 3;
  }

  infoTexto() {
    return `Cliente: ${this.nombre} | DNI: ${this.dni} | Tel: ${this.telefono} | Vehículos registrados: ${this.vehiculos.length} | ${this.esFrecuente() ? 'Cliente Frecuente' : 'Cliente Nuevo'}`;
  }
}
