// COPARISION
// 1. bigger: >
// 2. smaller: <
// 3. bigger or equal: >=
// 4. smaller or equal: <=
// 5. equal: ==
// 6. not equal: !=
// -------------------------
// 7. strict equal: ===
// 8. strict not equal: !==
// -------------------------
// 9. logical and: &&
// 10. logical or: ||
// 11. logical not: ! 









const address = 'andorKilla';
const part = address.slice(2, 5);
// console.log(part);

const Sentence = 'I am a good and hardworking person.';
console.log(Sentence.split(' '));
console.log(Sentence.split('a'));

const friendsStr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
const friends = friendsStr.split(',');
console.log(friends);
const realFriend = [ 'Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));

const sentence = 'I am learning Web Dev.'
// const result = '.veD beW gninrael ma I';


// web
// bew
// donal
// d
// od
// nod
// anod
// lanod

let reverse = ''
for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
// console.log(reverse);

// ignore this solution
let rev = ''
for(let i = 0; i <sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev; 
}
// console.log(rev);

// shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed);
// primitive
// basic, primary
const age = 21;
const school = 'rifle square';
const isPassed = true;
// let isDeveloper;

const subjects = ['bangla', 'English', 'Physics', 'Math']
const bottle_wrong = ['white', 45];
const bottleColor = 'white';
const bottlePrice = 45;
const bottleDrinks = 'water';

// object
// non-primitive
const bottle = {
    brand: 'apple',
    price: 45,
    color: 'white',
    isClean: false,
}

// non-primitive
const subject = {
    name: 'biology',
    teacher: 'rasheda mam',
    examDate: '30 Feb', 
    chapters: ['first', 'second', 'third'],
    exams: {
        name: 'Final Exam',
        marks: 100
    }
}

const person = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

person.salary = 30000;
person['age'] = 26;
person['fav places'] = ['maldives', 'bali', 'pataya']

const propName = 'profession';
person[propName] = 'devops'
console.log(person)



const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb', 
    monitor: 'hp'
}

const keys = Object.keys(computer);
console.log(keys)



const values = Object.values(computer);
console.log(values);

// nested object
const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    } 
}

// console.log(college.unique.color)
college.unique.result.merit = 'top top top most'
console.log(college['unique'].result.merit)
college.events[1] = '16 December'
console.log(college.events[1])
delete college.class;
console.log(college)

const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// for of : array
// for in : object
for(const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}

const keya = Object.keys(mobile);
console.log(keya);

for(const key of keya){
    console.log(key, ':', mobile[key]);
    
}

const pen = { brand: 'econo', price: 10, color: 'black' }
const pencil = new Object()
console.log(pencil)
const rubber = Object.create({})
console.log(rubber)
