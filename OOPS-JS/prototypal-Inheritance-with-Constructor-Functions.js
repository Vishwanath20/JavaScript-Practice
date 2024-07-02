function User(name){
    this.name = name;

    this.printName = function(){
        console.log(this.name);
    }
    console.log(this.name);
}

let isntance = new User("Vishu")