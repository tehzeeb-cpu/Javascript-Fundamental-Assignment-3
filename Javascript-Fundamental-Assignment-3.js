// #1
const CarDetails = {
    make: "TATA",
    model: "First",
    year: 2023,
}
console.log(`Company Name is ${CarDetails["make"]} and model is ${CarDetails["model"]} and year of manufacturing is ${CarDetails["year"]}`)

// #2
let StudentInfo = {
    name: "Tehzeeb",
    age: "27",
    grade: "A",
};
console.log(StudentInfo);

StudentInfo.grade = "A+"; //Grade updated

console.log(StudentInfo);

// #3
let NumProperties = {
    id: 10,
    name: "Tehzeeb",
    role: "Software Dev",
    Salary: 50000,
}
let k = 0;
for(let key in NumProperties ){
    k++;
}
console.log(`The number of properties is ${k}`);

// #4
function hasProperty(obj, propertyName) {
    return propertyName in obj;
}
let myObject = {
    name: "John",
    age: 25,
    city: "New York",
};

let propertyToCheck = "age";

if (hasProperty(myObject, propertyToCheck)) {
    console.log(`The object has the property "${propertyToCheck}".`);
} else {
    console.log(`The object does not have the property "${propertyToCheck}".`);
}

// #5
function areaCalculator(r){
    let A = Math.PI*r*r;
    return A;
}
console.log(`The area of the circle is ${areaCalculator(5)}`);

// #6
function Reverse(str){
    return str.split("").reverse().join("");
}
console.log(`The reversed string is ${Reverse("Home")}`)

// #7
class UserInformationManager {
    userMap = new Map();

    addUser(name, age, email) {
        if (!this.userMap.has(name)) {
            this.userMap.set(name, { age, email });
            console.log(`User ${name} added successfully.`);
        } else {
            console.log(`User ${name} already exists.`);
        }
    }

    updateUser(name, age, email) {
        if (this.userMap.has(name)) {
            this.userMap.set(name, { age, email });
            console.log(`User ${name} updated successfully.`);
        } else {
            console.log(`User ${name} does not exist.`);
        }
    }

    deleteUser(name) {
        if (this.userMap.has(name)) {
            this.userMap.delete(name);
            console.log(`User ${name} deleted successfully.`);
        } else {
            console.log(`User ${name} does not exist.`);
        }
    }

    displayUsers() {
        console.log("User Information:");
        this.userMap.forEach((userInfo, name) => {
            console.log(`Name: ${name}, Age: ${userInfo.age}, Email: ${userInfo.email}`);
        });
    }
}

const userManager = new UserInformationManager();

userManager.addUser("Alice", 28, "alice@example.com");
userManager.addUser("Bob", 32, "bob@example.com");
userManager.displayUsers();

userManager.updateUser("Alice", 29, "alice.updated@example.com");
userManager.displayUsers();

userManager.deleteUser("Bob");
userManager.displayUsers();
