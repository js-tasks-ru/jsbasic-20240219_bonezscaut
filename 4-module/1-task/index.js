function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  friends.forEach(friend => {
    let li = document.createElement('li');
    li.textContent = `${friend.firstName} ${friend.lastName}`;
    ul.appendChild(li);
  });

  return ul;
}

let friends = [
    {
        firstName: 'Artsiom',
        lastName: 'Mezin'
    },
    {
        firstName: 'Ilia',
        lastName: 'Kantor'
    },
    {
        firstName: 'Christopher',
        lastName: 'Michael'
    }
];

