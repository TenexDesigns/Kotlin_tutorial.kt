In Kotlin, you can use varargs, default parameters, and named parameters to provide flexibility when working with functions.


1.Varargs:
Varargs allow you to pass a variable number of arguments of the same type to a function.
You can use the vararg modifier before the parameter type in the function declaration.
Here's an example:


fun printNumbers(vararg numbers: Int) {
    for (number in numbers) {
        println(number)
    }
}

// Function call with varargs
printNumbers(1, 2, 3, 4, 5)
In the above code, the printNumbers() function accepts a variable number of Int arguments.
Inside the function, you can access the numbers parameter as an array of Int.
When calling the function, you can pass any number of Int values as arguments.




2.Default Parameters:
Default parameters allow you to specify default values for function parameters.
If an argument is not provided when calling the function, the default value will be used.
Here's an example:

fun greetPerson(name: String = "Guest") {
    println("Hello, $name!")
}

// Function calls with and without arguments
greetPerson()  // Output: Hello, Guest!
greetPerson("John")  // Output: Hello, John!
In the above code, the greetPerson() function has a name parameter with a default value of "Guest".
When calling the function, if no argument is provided, the default value is used.
You can override the default value by passing a different value when calling the function.





3.Named Parameters:
Named parameters allow you to specify arguments by name when calling a function, regardless of their order.
This improves code readability and reduces ambiguity. Here's an example:

fun printPersonalInfo(name: String, age: Int, city: String) {
    println("Name: $name, Age: $age, City: $city")
}

// Function call with named parameters
printPersonalInfo(age = 25, name = "John", city = "New York")

In the above code, when calling the printPersonalInfo() function, we explicitly specify the arguments by name.
This allows us to provide the arguments in any order, making the code more readable and self-explanatory.

These features in Kotlin help make functions more flexible and enhance their usability in different scenarios.






THERE ARE NO OPTIONAL PARAMETERS IN KOTLIN
**********************************************************************************************



In Kotlin, there are no optional parameters in the traditional sense found in some programming languages. 
Instead, Kotlin provides default parameters, which serve a similar purpose.

Default parameters allow you to define default values for function parameters.
If a caller does not provide a value for a parameter, the default value will be used instead. 
This provides a convenient way to make parameters optional in function calls.

Heres an example that demonstrates the usage of default parameters:


fun greetPerson(name: String = "Guest", age: Int = 0) {
    println("Hello, $name! Age: $age")
}

// Function calls with and without arguments
greetPerson()  // Output: Hello, Guest! Age: 0
greetPerson("John")  // Output: Hello, John! Age: 0
greetPerson("Jane", 30)  // Output: Hello, Jane! Age: 30


In the code above, the greetPerson() function has two parameters: name and age.
Both parameters have default values assigned to them. If no argument is provided for a parameter when calling the function,
the default value is used.

In the first function call (greetPerson()), both parameters use their default values. In the second function call (greetPerson("John")),
  the name parameter is explicitly provided, but the age parameter uses its default value. 
In the third function call (greetPerson("Jane", 30)), both parameters are provided with specific values.

By using default parameters, you can achieve optional behavior in Kotlin functions, 
as callers have the flexibility to omit arguments and rely on the default values instead.






























































...
