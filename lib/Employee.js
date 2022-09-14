// Construct Employee //
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // get name = return name //
    getName () {
        return this.name;
    }

    // get id = return id //
    getId () {
        return this.id;
    }   

    // get email = return email //
    getEmail () {
        return this.email;
    }

    // get role == return employee role //
    getRole () {
        return 'Employee'; 
    }
};

// Exports Employee from top //
module.exports = Employee; 