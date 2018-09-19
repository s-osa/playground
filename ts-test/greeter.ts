function greeter(person: string): string {
    return "Hello, " + person;
}

var user = "Alice";
document.body.innerHTML = greeter(user);
