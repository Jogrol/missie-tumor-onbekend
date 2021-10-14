export function formatNumberToEuro(number: number): string {
  return `€ ${number.toFixed(2).replace(".", ",")}`
}
