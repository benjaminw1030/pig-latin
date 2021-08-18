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
// move q and u together as "qu" and add ay
// do this regardless of capitalization
// stretch goal: ignore punctuation

// Business Logic


function addWay(word) {
  let wordArray = word.split("");
  const vowels = ["a", "i", "o", "u", "e"];
  if (wordArray[0] === "q" && wordArray[1] === "u") {
    sliceWord = wordArray.slice(2);
    const newWord = sliceWord.join('');
    return newWord + "quay";
  } else {
    for (let i = 0; i < vowels.length; i += 1) {
      if (vowels[i] === wordArray[0]) {
        return word + "way";
      } else {
        let consonants = []
        for (let i = 0; i < wordArray.length; i += 1) {
          if (wordArray[i] === "q" && wordArray[i + 1] === "u") {
            break;
          }
          else if (!vowels.includes(wordArray[i])) {
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
}
addWay("tsddfqzazl");

// wordArray.forEach(function (element) {
//   if (!uniqueArray.includes(element)) {
//     uniqueArray.push(element);
//   }
// });