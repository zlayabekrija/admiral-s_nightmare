const CPU = () => {
  let played = [];
  const valid = (x, y) => {
    for (let i = 0; i < played.length; i++) {
      if (played[i].indexOf(x) !== -1 && played[i].indexOf(y)) {
        return false;
      }
    }
    played.push([x, y])
    return true;
  }
  const play = () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let cvalid = valid(x, y);
    while (!cvalid) {
      cvalid = valid(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
    }
    return [x, y]
  }
  return {
    play
  }
}
export {
  CPU
}