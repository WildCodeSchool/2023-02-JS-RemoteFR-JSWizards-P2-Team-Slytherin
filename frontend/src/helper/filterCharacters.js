/**
 * @desc create a nex array with the characters who have image
 */

const filterCharacters = (characters, filter) => {
  return characters.filter((wizards) => wizards[filter] !== "");
};

export default filterCharacters;
