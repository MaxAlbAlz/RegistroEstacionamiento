import fs from 'fs';
import path from 'path';

export function leerJSON(rutaRelativa) {
  const rutaCompleta = path.join(process.cwd(), rutaRelativa);
  const texto = fs.readFileSync(rutaCompleta, 'utf8');
  try {
    return JSON.parse(texto);
  } catch (error) {
    console.error('Error al analizar JSON:', rutaCompleta);
    return [];
  }
}

export function escribirJSON(rutaRelativa, datos) {
  const rutaCompleta = path.join(process.cwd(), rutaRelativa);
  fs.writeFileSync(rutaCompleta, JSON.stringify(datos, null, 2), 'utf8');
}
