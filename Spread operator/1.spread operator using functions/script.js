    var arr=[1,2,3,4,5]
    var arr1=[1,2]
    var arr2=[3,4,5]
    var arr3=[...arr1,...arr2]
    
    function Add(arr3){
    var sum=0;
    for(let i=0;i<arr3.length;i++){
    sum+=arr3[i]
    }
    return sum
    }
    let b=Add(arr3)
    console.log(b)

    
    