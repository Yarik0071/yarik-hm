const findLongestWord = function (string) {

  let array = (string.split(" "));
  let longword = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i].length > longword.length) {
      longword = array[i]
    };
  };
  return (longword)
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'