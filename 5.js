function vowelCount(str) {
    const counts = { a:0, e:0, i:0, o:0, u:0 };
    const vowels = 'aeiou';
    
    for(let char of str.toLowerCase()) {
        if(vowels.includes(char)) {
            counts[char]++;
        }
    }
    console.log(`Input: ${str}`);
    console.log(`Output: a:${counts.a}, e:${counts.e}, i:${counts.i}, o:${counts.o}, u:${counts.u}`);
}

vowelCount("Le Tour de France");