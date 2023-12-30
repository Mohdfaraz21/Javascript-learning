class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const faraz = new User("faraz")
// console.log(faraz.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const android = new Teacher("android", "i@android.com")
console.log(android.createId());