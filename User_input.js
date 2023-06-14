
In Kotlin, you can take user input using the readLine() function. Here's an example:

kotlin
Copy code
fun main() {
    println("Enter your name:")
    val name = readLine()
    println("Hello, $name!")
}
In the above code, we prompt the user to enter their name using println(), and then we use readLine() to read the user's input from the console. The input is stored in the variable name. Finally, we print a greeting message using the user's name.

Keep in mind that readLine() returns a string, so if you want to parse the input as a different type (e.g., integer or float), you'll need to convert it explicitly using appropriate functions like toInt() or toFloat().

You can run this code in a Kotlin environment or using a Kotlin compiler.




