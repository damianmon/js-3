/* ==========================================================================
   06 — Bloque 2: El Tiempo y Fechas (Timers & Date) | 10 Katas
   Foco: cálculos matemáticos para cronómetros y marcas de tiempo.
   Completá cada función RETORNANDO el valor pedido.
   ⚠️  NO uses console.log() — las funciones deben RETORNAR el resultado.
========================================================================== */

/* --------------------------------------------------------------------------
   KATA 1 — segundosAMinutos
   Convierte segundos a formato "MM:SS".
   Ej: 65 → "01:05" | 9 → "00:09" | 120 → "02:00"
-------------------------------------------------------------------------- */
function segundosAMinutos(s) {
  // TU CÓDIGO AQUÍ 👇
  let minutos = Math.floor(s / 60);
  let segundos = s % 60;

  let minStr = minutos.toString().padStart(2, "0");
  let segStr = segundos.toString().padStart(2, "0");

  return `${minStr}:${segStr}`;
}

/* --------------------------------------------------------------------------
   KATA 2 — msASegundos
   Convierte milisegundos a segundos redondos (hacia abajo).
   Ej: 3500 → 3 | 1000 → 1 | 999 → 0
-------------------------------------------------------------------------- */
function msASegundos(ms) {
  // TU CÓDIGO AQUÍ 👇
  return Math.floor(ms / 1000);
}

/* --------------------------------------------------------------------------
   KATA 3 — esMasDeUnaHora
   Retorna true si los segundos superan los 3600 (una hora), false si no.
   Ej: 3601 → true | 3600 → false
-------------------------------------------------------------------------- */
function esMasDeUnaHora(s) {
  // TU CÓDIGO AQUÍ 👇
  return s > 3600;
}

/* --------------------------------------------------------------------------
   KATA 4 — obtenerAnio
   Retorna el año actual (número) usando el objeto Date.
   Ej: (en 2026) → 2026
-------------------------------------------------------------------------- */
function obtenerAnio() {
  // TU CÓDIGO AQUÍ 👇
  return new Date().getFullYear();
}

/* --------------------------------------------------------------------------
   KATA 5 — diferenciaEnSegundos
   Recibe dos timestamps en ms y retorna cuántos segundos completos
   hay de diferencia entre ellos (positivo siempre).
   Ej: (5000, 8500) → 3
-------------------------------------------------------------------------- */
function diferenciaEnSegundos(inicio, fin) {
  // TU CÓDIGO AQUÍ 👇
  return Math.floor(Math.abs(fin - inicio) / 1000);
}

/* --------------------------------------------------------------------------
   KATA 6 — formatearFechaCorta
   Recibe un objeto Date y retorna el string "DD/MM/YYYY".
   Ej: new Date(2026, 2, 30) → "30/03/2026"
   Tip: padStart(2, "0") para el día y el mes.
-------------------------------------------------------------------------- */
function formatearFechaCorta(date) {
  // TU CÓDIGO AQUÍ 👇
  let dia = date.getDate().toString().padStart(2, "0");
  let mes = (date.getMonth() + 1).toString().padStart(2, "0");
  let anio = date.getFullYear();

  return `${dia}/${mes}/${anio}`;
}

/* --------------------------------------------------------------------------
   KATA 7 — sumarDias
   Recibe un objeto Date y una cantidad de días. Retorna un nuevo Date
   sumándole esos días (útil para calcular vencimientos).
   Ej: (new Date(2026,0,1), 10) → Date equivalente al 11/01/2026
-------------------------------------------------------------------------- */
function sumarDias(date, dias) {
  // TU CÓDIGO AQUÍ 👇
  let nuevaFecha = new Date(date);
  nuevaFecha.setDate(nuevaFecha.getDate() + dias);
  return nuevaFecha;
}

/* --------------------------------------------------------------------------
   KATA 8 — esFinDeSemana
   Retorna true si el objeto Date cae en sábado (6) o domingo (0).
   Ej: new Date(2026, 2, 28) → true (sábado)
-------------------------------------------------------------------------- */
function esFinDeSemana(date) {
  // TU CÓDIGO AQUÍ 👇
  let dia = date.getDay();
  return dia === 0 || dia === 6;
}

/* --------------------------------------------------------------------------
   KATA 9 — obtenerSaludo
   Retorna un saludo según la hora actual:
   - 6 a 12  → "Buenos días"
   - 12 a 20 → "Buenas tardes"
   - resto   → "Buenas noches"
-------------------------------------------------------------------------- */
function obtenerSaludo() {
  // TU CÓDIGO AQUÍ 👇
  let hora = new Date().getHours();

  if (hora >= 6 && hora < 12) {
    return "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

/* --------------------------------------------------------------------------
   KATA 10 — tiempoRestante
   Convierte milisegundos en un objeto con minutos, segundos y ms restantes.
   Ej: 75500 → { min: 1, seg: 15, ms: 500 }
-------------------------------------------------------------------------- */
function tiempoRestante(ms) {
  // TU CÓDIGO AQUÍ 👇
  let min = Math.floor(ms / 60000);
  let seg = Math.floor((ms % 60000) / 1000);
  let restanteMs = ms % 1000;

  return {
    min: min,
    seg: seg,
    ms: restanteMs,
  };
}

// 🚨 ¡NO TOCAR! Exportación para los tests
module.exports = {
  segundosAMinutos,
  msASegundos,
  esMasDeUnaHora,
  obtenerAnio,
  diferenciaEnSegundos,
  formatearFechaCorta,
  sumarDias,
  esFinDeSemana,
  obtenerSaludo,
  tiempoRestante,
};
