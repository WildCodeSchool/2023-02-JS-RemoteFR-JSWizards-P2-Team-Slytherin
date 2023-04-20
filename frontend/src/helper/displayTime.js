/**
 * @desc displayTime converts a number in seconds to an array of strings [minutes, seconds] with 2 digits
 */

const displayTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return [
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ];
};

export default displayTime;
