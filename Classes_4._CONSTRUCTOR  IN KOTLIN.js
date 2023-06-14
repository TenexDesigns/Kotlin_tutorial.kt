In Kotlin, constructors are special functions used for initializing instances of a class. 
Constructors are responsible for setting up the initial state of an object by assigning values to its properties
or performing other necessary setup operations.

Kotlin provides two types of constructors:

1.Primary Constructor:

The primary constructor is defined as part of the class header.

It can have optional parameters with default values, allowing you to create instances with different initialization options.

The primary constructor cannot contain any code or initialization logic directly. 
  Initialization logic is typically placed in init blocks or in property initializers.

Example:


class Person(firstName: String, lastName: String) {
    init {
        println("Initializing a Person object")
    }

    val fullName: String = "$firstName $lastName"
}
In the above code, the Person class has a primary constructor with two parameters: firstName and lastName. 
The init block is used to initialize the object and is executed when an instance of the class is created.
The fullName property is initialized using the constructor parameters.

2.Secondary Constructors:

Secondary constructors are optional and are defined within the class body using the constructor keyword.

Secondary constructors allow you to provide additional ways to create instances of a class or provide alternative initialization paths.

Secondary constructors must delegate to the primary constructor using the this keyword or to another secondary constructor
using the this keyword followed by parentheses.

Example:


class Person(firstName: String, lastName: String) {
    init {
        println("Initializing a Person object")
    }

    constructor(firstName: String) : this(firstName, "") {
        println("Using secondary constructor")
    }

    val fullName: String = "$firstName $lastName"
}
In the above code, the Person class has a secondary constructor that takes only the firstName parameter.
It delegates to the primary constructor using this(firstName, ""). The secondary constructor also contains additional logic that prints a message.
The fullName property is still initialized using the primary constructor parameters.

To create instances of a class and invoke constructors, you can simply use the class name followed by parentheses:


fun main() {
    val person1 = Person("John", "Doe")
    println(person1.fullName)

    val person2 = Person("Jane")
    println(person2.fullName)
}

In the main() function, we create instances of the Person class using both the primary and secondary constructors.
We can access the properties of the objects (fullName) and perform operations on them.

Constructors in Kotlin provide a flexible way to initialize objects with different parameter combinations and perform necessary setup logic.
They enable you to define the initial state of objects in a class and customize their creation process.






MORE EXPLANANTION
*************************************************************************************************************************************



In Kotlin, a constructor is a special member function that is called when an object is instantiated (created),
  primarily to initialize variables or properties. There are two types of constructors in Kotlin: primary constructor and
  secondary constructor geeksforgeeks.org.

Primary Constructor: A primary constructor is a part of the class header and goes after the class name and optional type parameters.
It initializes the class properties. If the primary constructor does not have any annotations or visibility modifiers, the constructor keyword can be omitted kotlinlang.org:
class ClassName(val property1: String, var property2: Int) {
    // ...
}
In this example, the primary constructor is declared within the parentheses after the class name and takes two parameters (property1 and property2). The primary constructor cannot contain any code, but you can use initializer blocks prefixed with the init keyword to place initialization code kotlinlang.org:

class ClassName(val property1: String, var property2: Int) {
    init {
        println("Primary constructor called")
    }
}
Secondary Constructor: A secondary constructor allows you to put additional initialization logic in the class. It is prefixed with the constructor keyword and can be used when you want to create more than one constructor in Kotlin or when you want to include more logic in the primary constructor that cannot be done because the primary constructor may be called by some other class tutorialspoint.com:
class ClassName(val property1: String, var property2: Int) {
    constructor(property1: String) : this(property1, 0) {
        println("Secondary constructor called")
    }
}
In this example, the secondary constructor takes only one parameter (property1) and delegates the call to the primary constructor using this(property1, 0). The secondary constructor also contains additional initialization logic.

Here's a complete example of using both primary and secondary constructors in Kotlin:

class Person(val name: String, val age: Int) {
    init {
        println("Primary constructor called")
    }

    constructor(name: String) : this(name, 0) {
        println("Secondary constructor called")
    }
}

fun main() {
    val person1 = Person("Alice", 30)
    val person2 = Person("Bob")
}
In this example, the Person class has a primary constructor that takes name and age parameters, and a secondary constructor that takes only the name parameter. When creating instances of the Person class, the appropriate constructor is called based on the provided arguments.


































..
