/* exercício 1 */

const artists = [ 
    { name: 'Angelina Jolie', age: 80 }, 
    { name: 'Eric Jones', age: 2 }, 
    { name: 'Paris Hilton', age: 5 }, 
    { name: 'Kayne West', age: 16 }, 
    { name: 'Bob Ziroll', age: 100 } 
]

const canGoToTheMatrix = artists.map( artist => artist.age > 18 ? `${artist.name} can go to The Matrix` : `${artist.name} is under age and can't go to The Matrix`)

console.log(canGoToTheMatrix)

/* exercício 2 */

const voters = [ 
    {name:'Bob' , age: 30, voted: true}, 
    {name:'Jake' , age: 32, voted: true}, 
    {name:'Kate' , age: 25, voted: false}, 
    {name:'Sam' , age: 20, voted: false}, 
    {name:'Phil' , age: 21, voted: true}, 
    {name:'Ed' , age:55, voted:true}, 
    {name:'Tami' , age: 54, voted:true}, 
    {name: 'Mary', age: 31, voted: false}, 
    {name: 'Becky', age: 43, voted: false}, 
    {name: 'Joey', age: 41, voted: true}, 
    {name: 'Jeff', age: 30, voted: true}, 
    {name: 'Zack', age: 19, voted: false} 
]

let young = {people: 0, voted: 0};
let mid = {people: 0, voted: 0};
let old = {people: 0, voted: 0};

const reducer = voters.forEach((person) => {
    if(person.age > 18 && person.age < 25) {
        young.people += 1;
        if(person.voted) {
            young.voted += 1;
        }
    } else if(person.age > 26 && person.age < 35) {
        mid.people += 1;
        if(person.voted) {
            mid.voted += 1;
        }
    } else if(person.age > 36 && person.age < 55) {
        old.people += 1;
	if(person.voted) {
	    old.voted += 1;
	}
    }
});

console.log(young, mid, old)

/* ex 2 revisado */

let voters = [ 
    {name:'Bob' , age: 30, voted: true}, 
    {name:'Jake' , age: 32, voted: true}, 
    {name:'Kate' , age: 25, voted: false}, 
    {name:'Sam' , age: 20, voted: false}, 
    {name:'Phil' , age: 21, voted: true}, 
    {name:'Ed' , age:55, voted:true}, 
    {name:'Tami' , age: 54, voted:true}, 
    {name: 'Mary', age: 31, voted: false}, 
    {name: 'Becky', age: 43, voted: false}, 
    {name: 'Joey', age: 41, voted: true}, 
    {name: 'Jeff', age: 30, voted: true}, 
    {name: 'Zack', age: 19, voted: false} 
];

voters.reduce(
    (acc, current, i, array) => {
        let cont=0;
        if(current.age >= 18 && current.age <= 25) {
            return ({
                ...acc,
                    numYoungPeople: acc.numYoungPeople + 1,
                    numYoungVotes: current.voted ? acc.numYoungVotes + 1 : acc.numYoungVotes,
            })
        }
        return acc 
    },
    ({
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotes: 0,
        numMidPeople: 0,
        numOldVotes: 0,
        numOldPeople: 0,
    })
)

/* exercício 3 */

const soma = (x, y) => x + y 
const subtracao = (x, y) => x - y
const multiplicacao = (x, y) => x * y 
const divisao = (x, y) => x / y 

const calcCommand = {
    '+': soma,
    '-': subtracao,
    '*': multiplicacao,
    '/': divisao
}

const calcular = (x, operador, y) => (
    calcCommand[operador]
        ? calcCommand[operador](x,y)
        : `${operador} não é um operador válido`
)