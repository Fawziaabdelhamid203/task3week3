function reverseString(str){
    let reversed=''
    for(let i=str.length-1;i>=0;i--){
        reversed +=str[i]
    }
    return reversed
}
const string="hello"
const reversedString=reverseString(string)
console.log(reversedString)