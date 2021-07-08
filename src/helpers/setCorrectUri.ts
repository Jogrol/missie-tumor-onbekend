export function useCorrectUri(uri: string): String {
  return uri.replace("/steun-missie-tumor-onbekend/", "/")
}
