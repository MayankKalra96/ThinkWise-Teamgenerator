const Emp = require("./Employee")

class Manager extends Emp {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.title = "Manager"
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager