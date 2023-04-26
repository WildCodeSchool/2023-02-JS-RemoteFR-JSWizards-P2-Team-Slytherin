/**
 * @desc take 20 random characters to make the deck
 */

const randomCards = (max) => {
  const arr = [];
  for (let i = 0; i < 20; i++) {
    const x = Math.floor(Math.random() * max);
    if (arr.includes(x) === true) {
      i = i - 1;
    } else {
      arr.push(x);
    }
  }
  return arr;
};

export default randomCards;
