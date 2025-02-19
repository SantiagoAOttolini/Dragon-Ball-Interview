export const parseKi = (ki) => {
  if (!ki) return 0;

  const multipliers = {
    Thousand: 1e3,
    Million: 1e6,
    Billion: 1e9,
    Trillion: 1e12,
    Quadrillion: 1e15,
    Quintillion: 1e18,
    Sextillion: 1e21,
    Septillion: 1e24,
  };

  const [value, unit] = ki.split(" ");
  const baseValue = parseFloat(value.replace(/,/g, "")) || 0;
  const multiplier = multipliers[unit] || 1;

  return baseValue * multiplier;
};
