// let users = [
//   { name: 'Juan', age: 25, address: { city: 'Manila' } },
//   { name: 'Maria', age: 30, address: { city: 'Cebu' } },
//   { name: 'Pedro', age: 22 },
//   { name: 'Anna', age: 28, address: { city: 'Davao' } },
// ];

// users.forEach(user => {
//   const { name, age, address } = user;
//   console.log(name, age, address);
// });

// users.forEach(user => {
//   console.log(user.address?.city);
// });

// const newUsers = users.map(user => ({...user, country: 'Philippines'}));
// console.log(newUsers);

// class Student {
//   constructor (name, grade) {
//     this.name = name;
//     this.grade = grade;
//   }

//   getStatus() {
//     return this.grade >= 75 ? 'Passed' : 'Failed';
//   }

//   getInfo() {
//     console.log(`${this.name} - ${this.grade} - ${this.getStatus()}`);
//   }
// }

// const student1 = new Student('Juan', 78);
// student1.getInfo();
// const student2 = new Student('Mike', 74);
// student2.getInfo();
// const student3 = new Student('Miks', 75);
// student3.getInfo();

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(this.name + " makes a sound.");
//   }
// }

// // Dog class
// class Dog extends Animal {
//   speak() {
//     console.log(this.name + " barks!");
//   }
// }

// // Cat class
// class Cat extends Animal {
//   speak() {
//     console.log(this.name + " meows!");
//   }
// }

// // Bird class
// class Bird extends Animal {
//   constructor(name, canFly) {
//     super(name);
//     this.canFly = canFly;
//   }

//   speak() {
//     console.log(this.name + " chirps!");
//   }
// }

// // Create instances
// const dog1 = new Dog("Buddy");
// const cat1 = new Cat("Whiskers");
// const bird1 = new Bird("Tweety", false);

// // Call speak()
// dog1.speak();   // Buddy barks!
// cat1.speak();   // Whiskers meows!
// bird1.speak();  // Tweety chirps!

let employees = [
  { name: 'Juan', salary: 25000, department: 'IT' },
  { name: 'Maria', salary: 45000, department: 'HR' },
  { name: 'Pedro', salary: 18000, department: 'IT' },
  { name: 'Anna', salary: 55000, department: 'IT' },
  { name: 'Mike', salary: 30000, department: 'HR' }
];

function getITEmployees() {
  return employees.filter(itDept => itDept.department === 'IT');
}

console.log(getITEmployees());

function getAverageSalary() {
  const itSalary = employees.filter(itDept => itDept.department === 'IT')
  const totalITSalary = itSalary.reduce((acc, itWage) => acc + itWage.salary,0);
  const hrSalary = employees.filter(hrDept => hrDept.department === 'HR')
  const totalHRSalary = hrSalary.reduce((acc, hrWage) => acc + hrWage.salary,0);

  return `\n\nIT Average Salary: ${totalITSalary / itSalary.length}\nHR Average Salary: ${totalHRSalary / hrSalary.length}\nOverall Average Salary: ${(totalHRSalary + totalITSalary) / employees.length}\n\n`
}

console.log(getAverageSalary());

function getHighEarners() {
  return employees
        .filter(highSalary => highSalary.salary > 30000)
        .map(names => names.name);
}

console.log(getHighEarners());
