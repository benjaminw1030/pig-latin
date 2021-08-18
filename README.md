Describe: pigLatinWord()

Test: It will add "way" at the end of a word once."
Code: pigLatinWord("way")
Expected Output: "wayway"

Test: "It will add 'way' to the end of words that begin with a vowel (except y)."
Code: pigLatinWord("away");
Expected Output: "awayway"

Test: "It will not output "way" at the end of a word beginning with a consonant."
Code: pigLatinWord("way")
Expected Output: "way"

Test: "It will move the first consonant to the end of a word beginning with a consonant."
Code: pigLatinWord("hello")
Expected Output: "elloh"

Test: "It will move the first consonants to the end of a word with multiple consonants."
Code: pigLatinWord("there")
Expected Output: "ehethay"

Test: "It will add "ay" to end after moving all consonants"
Code: pigLatinWord("there")
Expected Output: "erethay"

Test: "It will move q and u together as 'qu' and add 'ay'"
Code: pigLatinWord("quest")
Expected Output: "uestquay"

Test: "It will move consonants before 'qu' to the end of the word and stop"
Code: pigLatinWord("square")
Expected Output: "quaresay"

Test: "It will do all of this regardless of capitalization"
Code: pigLatinWord("Quest")
Expected Output: "estquay"