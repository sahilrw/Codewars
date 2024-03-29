// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// my solution
function getCount(str) {
  const vowel = /[aeiou]/g;

  const matches = str.match(vowel);

  return matches ? matches.length : 0;
}
