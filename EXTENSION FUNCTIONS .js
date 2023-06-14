Extension functions in Kotlin allow you to add new functions to existing classes, including classes that you dont have control over. 
They provide a way to extend the functionality of classes without modifying their source code.

To define an extension function, you need to prefix the function name with the class you want to extend and use the fun keyword.
Heres the basic syntax:


fun ClassName.functionName() {
    // Function implementation
}
Heres an example of an extension function that adds a sayHello() function to the String class:


fun String.sayHello() {
    println("Hello, $this!")
}
In the above code, we define an extension function sayHello() for the String class.
Inside the function, we can refer to the instance on which the function is called using the this keyword.
In this case, this refers to the instance of the String class.

You can then call the extension function on instances of the class as if it were a regular member function:


val greeting = "Kotlin"
greeting.sayHello()  // Output: Hello, Kotlin!
In the above code, we create a String instance called greeting with the value "Kotlin".
We then call the sayHello() extension function on greeting, which prints "Hello, Kotlin!".

Extension functions can also have parameters, just like regular functions.
Heres an example of an extension function that calculates the square of an Int:

fun Int.square(): Int {
    return this * this
}
In this example, we define an extension function square() for the Int class.
It takes no parameters and returns the square of the Int value.

You can use extension functions to add utility methods, provide additional functionality,
  or improve the readability and expressiveness of your code.
  They are a powerful feature of Kotlin that promotes code reusability and extensibility.










MORE EXPLANANTION
******************************************************************************************************************************



Extension functions in Kotlin allow you to add new functionality to existing classes without inheriting from them or using design
patterns like Decorator.
When a function is added to an existing class, it is called an extension function.
These functions can be called on instances of the class as if they were part of the original class kotlinlang.org.

To create an extension function, you need to define a new function with the class name as a prefix to the function name,
  separated by a dot:

fun String.uppercaseFirstLetter(): String {
    return this.first().uppercase() + this.substring(1)
}

fun main() {
    val originalString = "hello"
    val updatedString = originalString.uppercaseFirstLetter() // Calls the extension function
    println(updatedString) // Prints "Hello"
}
In this example, an extension function uppercaseFirstLetter() is added to the String class. 
Inside the extension function, you can use the this keyword to refer to the instance of
the class on which the function is called blog.logrocket.com.

Its important to note that extension functions do not actually modify the original class. 
Instead, they are resolved statically, meaning they are determined at compile time based on the declared type of the variable,
  not the runtime type of the object kotlinlang.org.

You can also create extension properties, but they cannot have a backing field,
  so their behavior must be defined by explicitly providing getters and/or setters kotlinlang.org.











































