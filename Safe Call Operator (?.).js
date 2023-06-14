The safe call operator (?.) is a fundamental feature in Kotlin that allows you to safely access properties and invoke methods on nullable objects. It helps prevent null pointer exceptions by automatically checking if the object is null before accessing its members.

Here's how the safe call operator works:

If the object before the ?. is not null, the property or method call is executed, and the result is returned.
If the object before the ?. is null, the entire expression evaluates to null, and no further action is taken.
Here's an example to illustrate the usage of the safe call operator:

kotlin
Copy code
fun main() {
    val nullableString: String? = "Hello, Kotlin"

    val length = nullableString?.length
    println(length)  // Output: 13

    val uppercase = nullableString?.toUpperCase()
    println(uppercase)  // Output: HELLO, KOTLIN

    val nullObject: Any? = null
    val result = nullObject?.toString()
    println(result)  // Output: null
}
In the code above, nullableString is a nullable string variable initialized with the value "Hello, Kotlin". We use the safe call operator (?.) to access the length property of nullableString. Since nullableString is not null, the length property is accessed successfully, and its value (13) is assigned to the length variable. Similarly, we use the safe call operator to invoke the toUpperCase() method on nullableString, resulting in "HELLO, KOTLIN".

In the case of nullObject, which is explicitly set to null, using the safe call operator with the toString() method returns null, as the safe call operator ensures that the method is not invoked on a null object.

The safe call operator is a powerful feature in Kotlin for handling nullable objects and preventing null pointer exceptions. It allows for concise and safe navigation of object hierarchies while accounting for nullable values.













