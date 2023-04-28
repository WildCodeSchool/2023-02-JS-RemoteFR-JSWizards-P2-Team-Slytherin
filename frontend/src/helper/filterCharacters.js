/**
 * @desc create a new array with the characters who have image and take 20 card from that
 */

const filterCharacters = (characters, filter) => {
  const arrayFilter = characters.filter((wizards) => wizards[filter] !== "");
  const test = arrayFilter.sort((a, b) => 0.5 - Math.random()).slice(0, 20);
  return test;
};

export default filterCharacters;
