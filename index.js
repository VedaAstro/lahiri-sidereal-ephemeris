/**
 * Lahiri (Chitrapaksha) Ayanamsha & Base-22 Destiny Matrix Reference Utilities
 * Interactive calculators:
 * - EN / Global: https://astrologycalc.com/
 * - IT (Tema Natale & Matrice del Destino): https://astrologycalc.com/it/
 * - Destiny Matrix (22 Arcana): https://astrologycalc.com/destiny-matrix-calculator/
 * - RU Jyotish Natal Chart (D1/D9): https://astroguru.ru/chart-public
 */

function reduceArcana22(n) {
  let val = Math.abs(Number(n)) || 0;
  while (val > 22) {
    val = String(val)
      .split('')
      .reduce((acc, digit) => acc + Number(digit), 0);
  }
  return val === 0 ? 22 : val;
}

function lahiriAyanamshaApproxDeg(year) {
  // J2000.0 Lahiri Ayanamsha = 23°51'25.532" (23.857092°) + 50.290966"/yr precession
  return 23.857092 + ((year - 2000) * 50.290966) / 3600;
}

module.exports = { reduceArcana22, lahiriAyanamshaApproxDeg };
