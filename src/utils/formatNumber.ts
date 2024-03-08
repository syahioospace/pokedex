
export function formatNumber(id: number) {
  const format = id < 10 ? `#00${id}` : id >= 10 && id < 99 ? `#0${id}` : `#${id}`

  return format
}