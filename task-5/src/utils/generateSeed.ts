function generateSeed(): number {
  return Math.trunc(Math.random() * 100000)
}

export default generateSeed;
