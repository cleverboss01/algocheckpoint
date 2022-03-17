// At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character, and to determine:

// The length of the sentence (the number of characters).
// The number of words in the sentence (assuming that the words are separated by a single space).
// The number of vowels in the sentence.
// You have to keep in mind that: 

// Each character will be treated separately.
// The last character is the point.
// Use three variables as counters.

var sentence = 'I love to code.';

const sentenceReader = sentence => {

  for(let i = 0; i < sentence.length; i++){
    var upperSentence = sentence.toUpperCase();
    var vowels = /[AEIOU]/g;
    var compared = upperSentence.match(vowels).length;
      }
        return `The number of characters is ${sentence.length}, the number of words is ${sentence.split(' ').length} and the number of vowels is ${compared}`;
    }

console.log(sentenceReader(sentence));
