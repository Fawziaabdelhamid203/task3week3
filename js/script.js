function filterEvenNum(numbers){
    return numbers.filter(num=>num%2==0)
}
const numbers=[1,2,3,4,5,6,7,8,9,10]
const evenNumbers=filterEvenNum(numbers)
console.log(evenNumbers)