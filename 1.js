function translate(text) {
    let result = "";
    const vowels = "aeiouAEIOU ";
    
    for (let char of text) {
        if (vowels.includes(char) || !isNaN(char)) {
            result += char;
        } else {
            result += char + "o" + char;
        }
    }
    return result;
}

console.log(translate("this is fun")); 
// Output: tothohisos isos fofunon