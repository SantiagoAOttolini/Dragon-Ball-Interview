export const parseKi = (ki) => {
  if (!ki) return 0

  const multipliers = {
    Thousand: 1e3,
    Million: 1e6,
    Billion: 1e9,
    Trillion: 1e12,
    Quadrillion: 1e15,
    Quintillion: 1e18,
    Sextillion: 1e21,
    Septillion: 1e24,
  }

  const parts = ki.trim().split(' ')
  let baseValue = 0
  let multiplier = 1

  if (parts.length === 2) {
    baseValue = Number(parts[0].replace(/,/g, '').replace(/\./g, '')) || 0
    multiplier = multipliers[parts[1]] || 1
  } else {
    baseValue = Number(parts[0].replace(/\./g, '')) || 0
  }

  return baseValue * multiplier
}
