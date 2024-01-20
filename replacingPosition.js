const nodeReversalInArr =(inputArr , elementIndex)=>{

    let newArr =[]

    for(i in inputArr){
 
        if(i == elementIndex  ){
            newArr.unshift(inputArr[elementIndex])
        }
        else{
            newArr.push(inputArr[i])
        }
    
    }
return newArr
}

nodeReversalInArr([1,2,3,5,9,89],2)