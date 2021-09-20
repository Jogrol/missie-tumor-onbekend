export function formatNumberToDots(number: number):string {
    return number.toString().replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}