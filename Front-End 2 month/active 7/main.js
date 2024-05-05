// class Person{
//     static retirementAge = 65;
//     #password;
//     #id
//     constructor(name, age, password){
//         this.name = this.#checkName;
//         this.age = age;
//         this.#password = password;
//     }
//     print(password){
//         if(password === this.#password) console.log(this.name);
//     };
//     #checkName(name){
//         if(name.trim()) return name;
//         return 'Name';
//     }
//     static staticMethod(){
//         // Что-то делает)

//     }
//     get id(){
//         return this.#id;
//     }
//     set id(id){
//         if (typeof id == 'number'){
//             this.#id = id;
//         }
//     }
// };


// class Student extends Person{

// }

// let user = new Person('Nursultan', 22, 12345);

// user.id = 20;
// console.log(user.id);







class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Имя - ${this.name}; возраст - ${this.age};`);
    }
}

class Student extends User {
    #password;

    constructor(name, age, username, password) {
        super(name, age);
        this.username = username;
        this.#password = password;
    }

    print(password) {
        if (password === this.#password) {
            console.log(`Имя - ${this.name}; возраст - ${this.age};`);
        } else {
            console.log("Неверный пароль. Доступ запрещен.");
        }
    }
}

// Пример использования класса User
let user1 = new User("Иван", 25);
user1.print(); 

// Пример использования класса Student
const student1 = new Student("Анна", 20, "anna_student", "password123");
student1.print("password123"); 
student1.print("wrongpassword"); 
