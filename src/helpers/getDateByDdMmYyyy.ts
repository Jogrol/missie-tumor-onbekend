export function getDateByDdMmYyyy(): string {
  const now = new Date()
  var dd = String(now.getDate()).padStart(2, "0")
  var mm = String(now.getMonth() + 1).padStart(2, "0")
  var yyyy = now.getFullYear()

  return mm + "/" + dd + "/" + yyyy
}
