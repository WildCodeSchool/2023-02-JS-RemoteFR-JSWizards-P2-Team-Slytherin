/**
 * @desc take 20 random characters to make the deck
 */

const randomCards = (array) => {
  return array.sort((a, b) => 0.5 - Math.random());
};

export default randomCards;
