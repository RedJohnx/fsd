function pluralize(noun, number) {
    if (number !== 1 && noun !== 'sheep' && noun !== 'geese') { // Basic pluralization
        return `${number} ${noun}s`;
    }
    return `${number} ${noun}`;
}

console.log(pluralize('cat', 5)); // 5 cats
console.log(pluralize('dog', 1)); // 1 dog