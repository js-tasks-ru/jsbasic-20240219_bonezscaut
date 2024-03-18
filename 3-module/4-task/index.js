function showSalary(users, age) {
  let filteredUsers = users.filter(user => user.age <= age);
  
  let userStrings = filteredUsers.map(user => `${user.name}, ${user.balance}`);
  
  return userStrings.join('\n');
}
