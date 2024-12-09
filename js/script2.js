function LargestNum(numbers){
    let largest=numbers[0]
    for(let i=1;i<numbers.length;i++){
        if(numbers[i]>largest){
            largest=numbers[i]
        }
            
    }
    return largest
}
const largest=[2,7,9,4,5,70,38,14]
const largestNum=LargestNum(largest)
console.log(largestNum)