//Anagrams-Find if the strings are anagrams of each other

let a = 'listen';
let b = 'Sientl';
a = a.toLowerCase();
b = b.toLowerCase();

let str1 = a.split('').sort().join('');
let str2 = b.split('').sort().join('');

if(str1 === str2){
  console.log("Yes")
}
else console.log("No")
