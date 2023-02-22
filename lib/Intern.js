const Emp = require("./Employee")

class Intern extends Emp {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
    }

    getSchool(){
        return this.school
    }
}

module.exports = Intern;