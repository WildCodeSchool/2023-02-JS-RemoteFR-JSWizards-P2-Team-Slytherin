/**
 * @desc pick one card from the 20 random card for the sorting hat
 */

const hatCard = (randomCards) => {
  const index = Math.floor(Math.random() * randomCards.length);
  return randomCards[index];
};

export default hatCard;
