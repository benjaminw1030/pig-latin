// function should:
// output "way" at the end of a word //
// output "way" at the end of a word once //
// output "way" at the end of a word beginning with a vowel //
// output "way" at the end of all words beginning with a vowel (except y) //
// not output "way" at the end of a word beginning with a consonant //
// move the first consonant to the end of a word with only one consonant //
// remove the first consonant from the beginning of a word with only one consonant //
// move the first consonants to the end of a word with multiple consonants //
// add ay after moving consonants //
// count y as a consonant, not a vowel //
// move q and u together as "qu" and add way
// do this regardless of capitalization
// stretch goal: ignore punctuation

// Business Logic


function addWay(word) {
  let wordArray = word.split("");
  const vowels = ["a", "i", "o", "u", "e"];
  for (let i = 0; i < vowels.length; i += 1) {
    if (vowels[i] === wordArray[0]) {
      return word + "way";
    } else {
      let consonants = []
      for (let i = 0; i < wordArray.length; i += 1) {
        if (!vowels.includes(wordArray[i])) {
          consonants.push(wordArray[i]);
        } else {
          break;
        }
      }
      sliceWord = wordArray.slice(consonants.length).concat(consonants);
      const newWord = sliceWord.join('');
      return newWord + "ay";
    }
  }
}
addWay("threat");

// wordArray.forEach(function (element) {
//   if (!uniqueArray.includes(element)) {
//     uniqueArray.push(element);
//   }
// });