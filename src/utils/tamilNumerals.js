const TAMIL_DIGITS = ['௦', '௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯'];

/** Convert any number/string to Tamil numerals: 42 -> ௪௨ */
export function toTamilNumerals(value) {
  return String(value).replace(/\d/g, (digit) => TAMIL_DIGITS[Number(digit)]);
}

/** Zero-padded 2-digit string, or Tamil equivalent. */
export function pad(value, tamil = false) {
  const str = String(Math.max(0, Math.floor(value))).padStart(2, '0');
  return tamil ? toTamilNumerals(str) : str;
}

export default toTamilNumerals;
