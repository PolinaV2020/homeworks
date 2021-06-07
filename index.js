const _ = require('lodash');

const data1 = [
{
"age": 3,
"name": "Curtis Greene",
"email": "curtis.greene@zaj.ca",
},
{
"age": 23,
"name": "Nikki Lowe",
"email": "nikki.lowe@darwinium.tv",
},
{
"age": 39,
"name": "Barr Copeland",
"email": "barr.copeland@nipaz.me",
},
];

const data2 = [
{
"age": 29,
"name": "Calhoun Woodward",
"email": "calhoun.woodward@medmex.info",
},
{
"age": 21,
"name": "Leta Lee",
"email": "leta.lee@qnekt.com",
},
{
"age": 40,
"name": "James Dinh",
"email": "j.dink@erw.com",
}
];



// Task 1
const userIndex = _.indexOf(data1, _.find(data1, function(data1) { return data1.age === 23; }));




// Task 2
const concatArrays = () => {
return _.concat(data1, data2);
}



// Task 3 
const objectWithoutAge = () => _.forEach(data2, function (user) {
  return _.omit(user, ["age"]); 
});

objectWithoutAge();



// Task 4
const newArray = data2.map(user => ({
name: user.name,
email: user.email
}));


