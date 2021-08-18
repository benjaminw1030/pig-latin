// function should:
// output "way" at the end of a word //
// output "way" at the end of a word once //
// output "way" at the end of a word beginning with a vowel //
// output "way" at the end of all words beginning with a vowel (except y) //
// not output "way" at the end of a word beginning with a consonant //
// move the first consonant to the end of a word with only one consonant //
// remove the first consonant from the beginning of a word with only one consonant
// move the first consonants to the end of a word with multiple consonants
// add ay after moving consonants
// count y as a consonant, not a vowel
// move q and u together as "qu" and add way
// do this regardless of capitalization
// stretch goal: ignore punctuation

// Business Logic


function addWay (word) {
  const array = word.split("");
  const vowelArray = ["a", "i", "o", "u", "e"];
  for (let i = 0; i < vowelArray.length; i += 1) {
    if (vowelArray[i] === array[0]) {
      word += ("way");
      return word
      break;
    } else {
      array.push(array[0]);
      newWord = array.join('').substr(1);
      return newWord + "ay";
    }
  } 
}
addWay("hello")