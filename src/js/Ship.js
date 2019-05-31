const Ship = (name, ship) => {
  let size = ship
  // eslint-disable-next-line no-return-assign
  const hit = () => --size
  const isSunk = () => size === 0
  return {
    size,
    hit,
    isSunk,
    name
  }
}

export {
  Ship
}
