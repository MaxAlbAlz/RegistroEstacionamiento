// clienteFrecuente.js
export class ClienteFrecuente {
  constructor(nombre, documento, telefono) {
    this.nombre = nombre || "Sin nombre";
    this.documento = documento || "";
    this.telefono = telefono || "";
    this.vehiculos = []; // guardamos objetos Vehiculo o patentes
  }

  // Añadir vehículo (objeto vehiculo o patente)
  agregarVehiculo(vehiculo) {
    // guardamos la patente si recibimos objeto o string
    if (typeof vehiculo === "string") {
      this.vehiculos.push(vehiculo);
    } else if (vehiculo && vehiculo.patente) {
      this.vehiculos.push(vehiculo.patente);
    }
  }

  tieneVehiculo(patente) {
    for (let i = 0; i < this.vehiculos.length; i++) {
      if (this.vehiculos[i] === patente) return true;
    }
    return false;
  }

  infoTexto() {
    const veh = this.vehiculos.length ? this.vehiculos.join(", ") : "Ninguno";
    return `Cliente: ${this.nombre} | Doc: ${this.documento} | Tel: ${this.telefono} | Vehículos: ${veh}`;
  }
}

export default ClienteFrecuente;
