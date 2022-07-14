// Where my anagrams at?
/*
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

{
   function anagrams(word, words) {
      let arr = [];
      words.forEach(w => { if (word.split('').sort().join('') == w.split('').sort().join('')) arr.push(w); });
      return arr;
   }
}
// Extract the domain name from a URL
/*
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
 */
{
   function domainName(url) {
      if (url.split('')[0] != "h") {
         url = "https://" + url
      }
      let name = new URL(url).hostname
      name = name.replace("www.", "")
      return name.slice(".", name.indexOf('.'))
   }
}
// Not very secure
/*
 In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
 */
{
   function alphanumeric(string) {
      const arr = string.match(/[\da-z]/gi)
      return (arr != null && arr.length == string.length) ? true : false;
   }
   console.log(alphanumeric("Mazinkaiser")) // true
   console.log(alphanumeric("hello world_")) // false
   console.log(alphanumeric("PassW0rd")) // true
   console.log(alphanumeric("     ")) // false
}