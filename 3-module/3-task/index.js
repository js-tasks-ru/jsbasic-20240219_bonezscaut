function camelize(str) {
  return str
    .split('-') // разбиваем строку по дефисам
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}
