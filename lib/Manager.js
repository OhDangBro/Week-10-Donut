// import employee //
const Employee = require('./Employee');


class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email); 
        this.officeNumber = officeNumber; 
    }

    // get role //
    getRole () {
        return "Manager";
    }
}

//export manager //
module.exports = Manager; 