const findMatching = (arr, string) => {
  return arr.filter(n => n.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (arr, string) => {
  return arr.filter(n => n.slice(0, string.length) === string)
}

const matchName = (arr, string) => {
  return arr.filter(n => n.name === string)
}
