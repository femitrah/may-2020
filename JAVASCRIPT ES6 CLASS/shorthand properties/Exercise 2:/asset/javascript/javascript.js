var name = 'babu';
var age = '24';
var education = { college: 'UTI', degree: 'BE', class: 'first class', location: 'cbe' };

const userInformation={
name,
age,   
}
const educationInformation={
    education
}
console.log(`${userInformation.name}`);
console.log(`${educationInformation.education.college} ${educationInformation.education.class}`);