let user = {
    name: "vishu",
    age: 25,

    getDetails() {
        // console.log("printing the details using user.name:: "+user.name);
        console.log("printing the details using this.name:: "+this.name);
    }
}
user.getDetails();

let user1 = user;
user = null;

user1.getDetails();