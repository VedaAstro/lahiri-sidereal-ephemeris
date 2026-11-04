# Lahiri Sidereal Ephemeris (1900–2050) & Base-22 Destiny Matrix Reference

Open technical reference for **Chitrapaksha (Lahiri) Ayanamsha** longitudinal precession offsets (`1900–2050`), **27 Lunar Nakshatra** sidereal boundaries (`13°20'` segments), and **Base-22 Destiny Matrix (22 Major Arcana)** coordinate reduction formulas.

## Live Reference Calculators

- **Western & Vedic Sidereal Birth Chart Calculator (EN):** [https://astrologycalc.com/](https://astrologycalc.com/)
- **Calcolo Tema Natale & Matrice del Destino (IT):** [https://astrologycalc.com/it/](https://astrologycalc.com/it/)
- **22 Arcana Destiny Matrix & Karmic Tail Calculator:** [https://astrologycalc.com/destiny-matrix-calculator/](https://astrologycalc.com/destiny-matrix-calculator/)
- **Ведическая натальная карта Джйотиш онлайн (D1 Раши, D9 Навамша, Вимшоттари Даша):** [https://astroguru.ru/chart-public](https://astroguru.ru/chart-public)
- **GitHub Pages Documentation & Tables:** [https://vedaastro.github.io/lahiri-sidereal-ephemeris/](https://vedaastro.github.io/lahiri-sidereal-ephemeris/)

---

## 1. Chitrapaksha (Lahiri) Ayanamsha Table (1900–2050)

The sidereal longitude $\lambda_{\text{sidereal}}$ is computed from the apparent tropical ecliptic longitude $\lambda_{\text{tropical}}$ by subtracting the Chitrapaksha (Lahiri) Ayanamsha $\Delta \psi_{\text{Lahiri}}(t)$ anchored so that Spica ($\alpha$ Virginis, *Chitra*) lies at `180°00'00"` (0° Libra sidereal):

$$\lambda_{\text{sidereal}} = (\lambda_{\text{tropical}} - \Delta \psi_{\text{Lahiri}}(t)) \bmod 360^\circ$$

| Epoch (Jan 1, 00:00 TT) | Julian Ephemeris Day (JDE) | Lahiri Ayanamsha (DMS) | Decimal Degrees | Annual Precession Rate |
| :--- | :--- | :--- | :--- | :--- |
| **1900.0** | `2415020.5` | `22° 27' 37.7"` | `22.46047°` | `50.2564"/yr` |
| **1910.0** | `2418672.5` | `22° 35' 59.9"` | `22.59997°` | `50.2586"/yr` |
| **1920.0** | `2422325.5` | `22° 44' 22.5"` | `22.73958°` | `50.2608"/yr` |
| **1930.0** | `2425977.5` | `22° 52' 45.2"` | `22.87922°` | `50.2630"/yr` |
| **1940.0** | `2429630.5` | `23° 01' 08.0"` | `23.01889°` | `50.2653"/yr` |
| **1950.0** | `2433282.5` | `23° 09' 31.0"` | `23.15861°` | `50.2675"/yr` |
| **1960.0** | `2436934.5` | `23° 17' 54.2"` | `23.29839°` | `50.2697"/yr` |
| **1970.0** | `2440587.5` | `23° 26' 17.6"` | `23.43822°` | `50.2719"/yr` |
| **1980.0** | `2444239.5` | `23° 34' 41.2"` | `23.57811°` | `50.2741"/yr` |
| **1990.0** | `2447892.5` | `23° 43' 05.0"` | `23.71806°` | `50.2764"/yr` |
| **2000.0 (J2000)** | `2451545.0` | `23° 51' 25.5"` | `23.85709°` | `50.2910"/yr` |
| **2010.0** | `2455197.5` | `23° 59' 48.4"` | `23.99678°` | `50.2932"/yr` |
| **2020.0** | `2458849.5` | `24° 08' 11.4"` | `24.13650°` | `50.2954"/yr` |
| **2026.0** | `2461041.5` | `24° 13' 13.2"` | `24.22033°` | `50.2968"/yr` |
| **2030.0** | `2462502.5` | `24° 16' 34.4"` | `24.27622°` | `50.2977"/yr` |
| **2040.0** | `2466154.5` | `24° 24' 57.5"` | `24.41597°` | `50.2999"/yr` |
| **2050.0** | `2469807.5` | `24° 33' 20.8"` | `24.55578°` | `50.3021"/yr` |

---

## 2. Base-22 Destiny Matrix (22 Major Arcana) Formulas

Given a birth date `(DD, MM, YYYY)`, every node in the octagonal **Destiny Matrix** is reduced into the closed integer ring `{1..22}` via recursive digit summation for any integer strictly greater than `22`:

```javascript
function R22(n) {
  let x = Math.abs(Number(n));
  while (x > 22) {
    x = String(x).split('').reduce((s, d) => s + Number(d), 0);
  }
  return x === 0 ? 22 : x;
}
```

### Core Octagon & Karmic Tail Equations

1. **Personal Square Corners (Diagonal):**
   - $A = R_{22}(\text{DD})$ — Birth Day Arcana (0° West vertex, Personal Portrait)
   - $B = \text{MM}$ — Birth Month Arcana (90° North vertex, Higher Spiritual Channel)
   - $C = R_{22}(\sum \text{digits}(\text{YYYY}))$ — Birth Year Arcana (180° East vertex, Material & Health Karma)
   - $D = R_{22}(A + B + C)$ — Bottom Karmic Vertex (270° South vertex, Past-Life Foundation)
2. **Central Core Comfort Zone (Soul Crystal):**
   - $E = R_{22}(A + B + C + D)$
3. **Karmic Tail Triad (Bottom 3 Numbers):**
   - $K_1 = R_{22}(D + E)$ (Inner Karmic Knot)
   - $K_2 = R_{22}(D + K_1)$ (Central Karmic Lesson)
   - $D$ (Root Past-Life Debt)
   - *Full interactive Karmic Tail breakdown:* [https://astrologycalc.com/destiny-matrix-calculator/](https://astrologycalc.com/destiny-matrix-calculator/)

---

## License

MIT License — Open Astronomical & Numerological Reference.
