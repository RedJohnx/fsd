function createStudent(usn, subjectCode, subjectName, cie, see) {
    // Private variables (Closure scope)
    let _cie = cie;
    let _see = see;

    return {
        getDetails: function() {
            return `USN: ${usn}, Subject: ${subjectName} (${subjectCode})`;
        },
        calculateTotal: function() {
            return _cie + _see;
        },
        display: function() {
            console.log(`${this.getDetails()}, Total Marks: ${this.calculateTotal()}`);
        }
    };
}

const student1 = createStudent("1MS23CS001", "23CSL57", "FSD Lab", 45, 48);
student1.display();
// Direct access to student1._cie would be undefined