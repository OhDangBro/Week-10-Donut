// importing employee mod //
const Employee = require('./Employee');


class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 

        this.school = school; 
    }

    // get school name //
    getSchool () {
        return this.school;
    }

    // get role name //
    getRole () {
        return "Intern";
    }
}

// export intern module //
module.exports = Intern; 