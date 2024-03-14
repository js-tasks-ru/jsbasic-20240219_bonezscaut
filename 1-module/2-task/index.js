function print(text) {
  console.log(text);
}

function isValid(name) {
  if (typeof name !== 'string' || name === null) {
    return false;
  }
  return /^[^\s]{4,}$/.test(name);
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
