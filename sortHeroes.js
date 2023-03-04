const sortHeroes = function (heroes) {
  return heroes.sort((prev, next) => {
    if (prev.health > next.health) {
      return -1;
    } if (prev.health < next.health) {
      return 1;
    }
    return 0;
  });
};

export default sortHeroes;
