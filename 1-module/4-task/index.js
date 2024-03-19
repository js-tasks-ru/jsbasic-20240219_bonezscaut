function checkSpam(str) {
  str = str.toLowerCase();
  return str.indexOf('1xbet') !== -1 || str.indexOf('xxx') !== -1;
  //вариант1 let lowerStr = str.toLowerCase(); -
  //вариант2 const regex = /1xbet|xxx/i; -
 //вариант1 return lowerStr.includes('1xbet') || lowerStr.includes('xxx');
 //вариант2 return regex.test(str);
}

console.log(checkSpam('1XbeT now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));