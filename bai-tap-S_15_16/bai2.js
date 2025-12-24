class Employee {
    #salary;

    constructor(salary) {
        this.setSalary(salary);
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(amount) {
        if (amount < 0) {
            console.log("Lương không được âm!");
            return;
        }
        this.#salary = amount;
    }
}

class Developer extends Employee {
    constructor(salary, language) {
        super(salary); 
        this.language = language;
    }
}

class Manager extends Employee {
    constructor(salary, teamSize) {
        super(salary);
        this.teamSize = teamSize;
    }
}
const dev = new Developer(5000, "JavaScript");

console.log(dev.getSalary());
console.log(dev.language);

const manager = new Manager(3000, 5);
console.log(manager.getSalary());
console.log(manager.teamSize);

manager.setSalary(-1000);