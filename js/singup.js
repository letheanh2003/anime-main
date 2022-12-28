class User {
username;
email;
password;

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getUsername() {
        return this.username;
    }

    setUsername(user) {
        this.username = user;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getPassword(password) {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }
}