const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function titleCased(listOfTitles) {
//   let capitalized = listOfTitles.map(function(title) {
//     return title.split(' ').map(function(word) {
//       return word[0].toUpperCase();
//     });
//   });
//   return capitalized;
// }

// function titleCased(listOfTitles) {
//   let capitalized = listOfTitles.map(function(title) {
//     let separate = title.split(' ');
//     separate.map(function(word) {
//       return word[0].toUpperCase();
//     });
//   });
//   return capitalized;
// }

// function titleCased(listOfTitles) {
//   let capitalized = listOfTitles.map(title => {
//     let separate = title.split(' ');
//     separate.map(word => {
//       return word[0].toUpperCase();
//     });
//   });
//   return capitalized;
// }

const titleCased = listOfTitles => {
  return tutorials.map(title => {
    const token = title.split(' ')
      const capitalToken = token.map(word => 
      word.charAt(0).toUpperCase() + word.slice(1));
      let joinedLetters = capitalToken.join(' ');
      return joinedLetters;
  });
}

