function rest({three,...otherInfo}){
    return otherInfo
}
console.log(rest({ one: 1, two: 2, three: 3, four: 4, five: 5 }))
 