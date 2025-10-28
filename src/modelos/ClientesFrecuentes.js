// =========================================
// 👤 Módulo: Cliente Frecuente
// -----------------------------------------
// Este archivo define la estructura (clase) de un cliente frecuente.
// Cada cliente tiene:
//  - nombre
//  - número de documento
//  - teléfono
//  - vehículos asociados (puede tener más de uno)
//
// En el futuro se podría ampliar para aplicar descuentos,
// membresías, etc.
// =========================================

// Exportamos la clase ClienteFrecuente
export class ClienteFrecuente {
  // -----------------------------------------
  // Constructor: se ejecuta al crear un nuevo cliente.
  // -----------------------------------------
  constructor(nombre, documento, telefono) {
    this.nombre = nombre;         // Ejemplo: "Alberto Alzuga"
    this.documento = documento;   // Ejemplo: "37766117"
    this.telefono = telefono;     // Ejemplo: "2494514292"
    this.vehiculos = [];          // Array para guardar los vehículos del cliente
  }

  // -----------------------------------------
  //  Agrega un vehículo al cliente
  // Recibe un objeto vehículo (de la clase Vehiculo)
  // -----------------------------------------
  agregarVehiculo(vehiculo) {
    this.vehiculos.push(vehiculo);
  }

  // ----------------------------------------
  //  Muestra los datos del cliente en formato de texto
  // -----------------------------------------
  mostrarDatos() {
    return `
 Cliente: ${this.nombre}
 Documento: ${this.documento}
 Teléfono: ${this.telefono}
 Vehículos: ${this.vehiculos.map(v => v.patente).join(", ") || "Ninguno"}
`;
  }

  // -----------------------------------------
  //  Busca si un vehículo pertenece al cliente
  // Devuelve true si lo encuentra
  // -----------------------------------------
  tieneVehiculo(patente) {
    return this.vehiculos.some(v => v.patente === patente);
  }
}

// -----------------------------------------
//  Exportación por defecto
// -----------------------------------------
export default ClienteFrecuente;
