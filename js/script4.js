function removeDuplicates(numbers){
    const uniqueNumbers=[]
    for(let num of numbers){
        if(!uniqueNumbers.includes(num))
            uniqueNumbers.push(num)
    }
    return uniqueNumbers
}
const numbers=[1,2,6,8,0,4,6,3,2,7,6,5,]
const uniqueNumbers=removeDuplicates(numbers)
console.log(uniqueNumbers)