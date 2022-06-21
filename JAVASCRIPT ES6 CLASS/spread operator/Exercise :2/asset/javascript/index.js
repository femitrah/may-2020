const userTwo={
    marks: [67, 34, 54,72,56], 
    grade: "II"    
}
const user = {
	name: 'karthick',
	age: 12,
    standard: 7
};
const twoObjects={...userTwo,...user};
console.log(twoObjects);