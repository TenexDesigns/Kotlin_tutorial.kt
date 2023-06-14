In Kotlin, functions are declared using the fun keyword. They are an essential part of writing reusable and modular code. Here's an example of declaring and using a function in Kotlin:

kotlin
Copy code
fun main() {
    // Function call
    sayHello()

    // Function call with arguments
    greetPerson("John")

    // Function call with return value
    val sum = addNumbers(5, 3)
    println("Sum: $sum")
}

// Function definition without parameters or return value
fun sayHello() {
    println("Hello, Kotlin!")
}

// Function definition with a parameter
fun greetPerson(name: String) {
    println("Hello, $name!")
}

// Function definition with parameters and return value
fun addNumbers(a: Int, b: Int): Int {
    return a + b
}
In the code above, we have three functions: sayHello(), greetPerson(name: String), and addNumbers(a: Int, b: Int): Int.

The sayHello() function doesn't take any parameters and doesn't return any value. It simply prints "Hello, Kotlin!" when called.

The greetPerson(name: String) function takes a name parameter of type String and prints a greeting message with the provided name.

The addNumbers(a: Int, b: Int): Int function takes two parameters a and b, both of type Int. It returns an Int value, which is the sum of a and b.

Inside the main() function, we call these functions using their respective names. The sayHello() function is called without any arguments, while the greetPerson() function is called with the argument "John". The addNumbers() function is called with the arguments 5 and 3, and the returned value is stored in the sum variable, which is then printed.

Functions in Kotlin can have parameters, return types, and can be called with different arguments depending on their signature. They allow you to encapsulate logic, promote code reuse, and enhance the modularity of your code.
