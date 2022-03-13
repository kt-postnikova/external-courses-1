const user = {};

user.name = 'Kate';
user.surname = 'Postnikova';
user.age = 28;
user.isAdmin = false;
user.getPermission = function () {
  return this.age > 18;
};
user.friendsList = [{
  name: 'Mary',
  age: 29,
},
{
  name: 'George',
  age: 30,
}];

delete user.friendsList;
