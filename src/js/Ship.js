
const Ship = (name,ship) =>{
  let size = new Array(ship).fill(name);
  const hit = (position,size) => size[position-1] = 'X' ;
  const isSunk = (size) => size.every(pos);
  const pos = (pos) => pos === 'X';
  return {size,hit,isSunk,name}
}

export {Ship}
