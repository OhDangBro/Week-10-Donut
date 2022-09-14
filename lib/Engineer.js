// import//
const Employee = require("./Employee");

//defining //
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github; 
    }

    //get github //
    getGithub () {
        return this.github;
    }

     // get role for engineer //
    getRole () {
        return "Engineer";
    }
}

// exports // 
module.exports = Engineer; 