/**
 * @desc formatMessage allows to properly format the message to be displayed in the Sorting Hat dialog box
 */

const formatMessage = (message, hatCardPick) => {
  // message has no category (empty) => it is the welcome message => display the welcome message
  if (!message.category) {
    return message.response;
  }
  // message has a category => a hint button has been clicked and the dialog box must display the proper information (character VS clue)
  const alterKey = "hogwartsStaff";
  let resText = "";

  // make sure the category exists in API data
  const [matchKey] = Object.keys(hatCardPick).filter(
    (key) => key === message.category
  );

  // return an error if the key is missing from API data
  if (!matchKey) {
    console.error({ info: "key does not exist", status: "error" });
    return "This is still a secret at Hogwarts...";
  }
  // the key does exist, return the appropriate message

  // make sure the key does have a value from API data
  if (hatCardPick[matchKey] || hatCardPick[matchKey] === false) {
    // by default, just display the key value (string), but some keys have boolean value and need to be handled differently
    switch (matchKey) {
      case "wizard":
        resText = "wizard";
        break;
      case "hogwartsStudent":
        if (hatCardPick[matchKey]) {
          resText = "student";
        } else if (hatCardPick[alterKey]) {
          resText = "staff member";
        } else {
          resText = "nor a student, neither a staff member";
        }
        break;
      case "alive":
        if (hatCardPick[matchKey]) {
          resText = "alive";
        } else {
          resText = "dead";
        }
        break;
      case "species":
        if (hatCardPick[matchKey] === "cat") {
          resText = "not human";
        } else {
          resText = `a ${hatCardPick[matchKey]}`;
        }
        break;
      default:
        resText = hatCardPick[matchKey];
    }
    return `${message.response} ${resText} !`;
  }
  // the key does exist, but the value is missing (no data from API)

  return "This is and will remain a secret at Hogwarts...";
};

export default formatMessage;
