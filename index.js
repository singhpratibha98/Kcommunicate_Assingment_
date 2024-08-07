function reverseNumber(num) {
    let numStr = num.toString();
    
    let numArray = numStr.split('');
    
    let reversedArray = numArray.reverse();

    let reversedStr = reversedArray.join('');
    
    let reversedNum = parseInt(reversedStr, 10);
    
    return reversedNum;
}

console.log(reverseNumber(149));
