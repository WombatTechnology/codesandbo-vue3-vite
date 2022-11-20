export const moveIndex = <T>(original: T[], from: number, to: number) => {
  const arr = [...original]
  const target = arr[from]
  arr.splice(from, 1)
  arr.splice(to, 0, target)
  return arr
}
