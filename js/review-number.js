var str1 = 'Hello Word!';
console.log(str1);

var str2 = str1.split(' ');
console.log(str2);
console.log(str2[0]);
console.log(str2[1].split('!')[0]);

console.log(str1.slice(6));

//charAt
console.log(str1.charAt(0)); //returns value at 0 index
console.log(str1.charAt(str1.length - 1));
// console.log(str.charAt(0), str1.charAt(1), str1.c)
//this can give you just the one character if you need it

//substring
console.log(str1.substring(0, 2));

//substring
console.log(str1.substr(0));
console.log(str1.substr(0, 5));
//beginning index, length from that index
console.log(str1.substr(6, str1.length-1));