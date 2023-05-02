/**
 * @desc shortens a character firstname by inly taking its initial and return the fully shortened name
 */

const shortenName = (name) => {
  const firstName = name.split(" ")[0].charAt(0);
  const lastName = name.split(" ")[1];
  return `${firstName}. ${lastName}`;
};

export default shortenName;
