function PersonDetails(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;

    // getter methods
    this.getFirstName = () => this.firstName;
    this.getLastName = () => this.lastName;
    this.getEmail = () => this.email;
    
    // setter methods
    this.setFirstName = (firstName) => this.firstName = firstName;
    this.setLastName = (lastName) => this.lastName = lastName; 
    this.setEmail = (email) => this.email = email;

    // display method
    this.display = (output = '') => {
        output += `First name: ${this.firstName}\nLast name: ${this.lastName}\nEmail: ${this.email}`
        console.log(output);
    }
}

let person1 = new PersonDetails('Timmy', 'Tunner', 'timmytunner15@gmail.com');
person1.display();
