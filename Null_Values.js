In Kotlin, the type system distinguishes between references that can hold null (nullable references) and those that cannot (non-null references). 
By default, Kotlin enforces strict null-safety, which means that a variable of a non-nullable type cannot hold null. For example:

var fooString: String = "foo"
If you try to assign null to fooString, you will get a compilation error:

fooString = null // Compilation error

1.To allow null values, you can declare a variable as a nullable type by adding a question mark ? to the type:

var fooString: String? = "foo"
fooString = null // No compilation error
Now, if you want to access a property or call a method on a non-null reference, 
  its guaranteed not to cause a NullPointerException (NPE):

val length = fooString.length // Safe access, no NPE
However, if you want to access a property or call a method on a nullable reference, 
  you need to use safe calls, null checks, or the Elvis operator to avoid NPEs.

2.Safe Call Operator (?.)

The safe call operator ?. allows you to call a method or access a property only if the reference is not null:

val length = fooString?.length // Safe access, returns null if fooString is null




3.Not-null Assertion Operator (!!.)

The not-null assertion operator !! throws a KotlinNullPointerException if the reference is null:

val length = fooString!!.length // Throws KotlinNullPointerException if fooString is null
This operator should be used with caution and only when you have more information than the compiler and you are sure that 
a nullable reference cannot be null when you are using it.




4.Elvis Operator (?:)

The Elvis operator ?: allows you to provide a default value when the reference is null:

val length = fooString?.length ?: 0 // Returns the length of fooString if it's not null, otherwise returns 0

In conclusion, Kotlin enforces strict null-safety and distinguishes between nullable and non-nullable types.
To work with nullable types, you can use safe call operators, not-null assertion operators, 
  or the Elvis operator to avoid NullPointerExceptions.


























MORE EXPLANANTION
*******************************************************************************************************************************


In Kotlin, null values are handled using nullable types and the null safety feature. By default, Kotlin enforces null safety, which means you have to explicitly specify when a variable or property can hold a null value.

To declare a nullable variable or property, you can use the nullable type syntax by appending ? to the type. Here's an example:


fun main() {
    var nullableString: String? = "Hello, Kotlin"
    nullableString = null

    println(nullableString)  // Output: null

    // Performing operations on nullable values
    val length = nullableString?.length
    println(length)  // Output: null

    // Using the elvis operator
    val nonNullString = nullableString ?: "Default Value"
    println(nonNullString)  // Output: Default Value
}
In the code above, we declare a nullable variable nullableString of type String?. Initially, we assign it a non-null value ("Hello, Kotlin"), and then we assign it a null value.

When working with nullable types, you need to use the safe call operator (?.) to perform operations on the nullable value. In the example, we try to get the length of nullableString using nullableString?.length. Since nullableString is null, the result is null.

The elvis operator (?:) is used to provide a default value in case of a null value. In the example, we assign the value of nullableString to nonNullString, but if nullableString is null, the default value "Default Value" is used instead.

Null safety helps prevent null pointer exceptions at compile-time by enforcing strict handling of nullable types. However, if you have a scenario where you expect a value to be null, you can explicitly mark a type as nullable using the nullable type syntax.




































































































....
