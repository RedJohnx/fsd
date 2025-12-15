const getMonthName = (function() {
    const months = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];
    
    return function(num) {
        if (isNaN(num) || num < 1 || num > 12) {
            return "Bad Number";
        }
        // Strip decimal portion
        const index = Math.floor(num) - 1; 
        return months[index];
    };
})();

console.log(getMonthName(5.8)); // May
console.log(getMonthName(13));  // Bad Number