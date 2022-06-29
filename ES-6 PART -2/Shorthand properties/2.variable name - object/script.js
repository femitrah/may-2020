var name = 'babu';
var age = '24';
var education = { college: 'UTI', degree: 'BE', class: 'first class', location: 'cbe' };
let b={
    name:name,
    age:age,
    education:education
    }
let{name:na,education:{college:coll,class:cla}}=b
console.log(na,coll,cla)
