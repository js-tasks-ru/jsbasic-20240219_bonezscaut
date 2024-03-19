function ucFirst(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
  
}

console.log(ucFirst('вася')); // Вася
console.log(ucFirst('в'));    // В
console.log(ucFirst('')); 