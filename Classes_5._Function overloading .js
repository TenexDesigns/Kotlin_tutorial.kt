Function overloading in Kotlin refers to the ability to define multiple functions with the same name but different parameter lists within a class.
Each overloaded function can have a unique set of parameters or a different number of parameters.

Kotlin allows you to overload functions based on the following criteria:

1.Number of Parameters:

You can define multiple functions with the same name but different numbers of parameters.

Example:

fun sum(a: Int, b: Int) {
    println("Sum of two integers: ${a + b}")
}

fun sum(a: Int, b: Int, c: Int) {
    println("Sum of three integers: ${a + b + c}")
}
In the code above, we have two overloaded functions named sum(). The first sum() function takes two parameters, 
  a and b, while the second sum() function takes three parameters, a, b, and c.

2.Type of Parameters:

You can define multiple functions with the same name but different parameter types.

Example:

fun processString(str: String) {
    println("Processing a string: $str")
}

fun processString(num: Int) {
    println("Processing an integer: $num")
}


In the above code, we have two overloaded functions named processString(). 
The first processString() function takes a String parameter, while the second processString() function takes an Int parameter.








Function overloading allows you to provide different versions of a function to handle different scenarios or parameter combinations. The appropriate function is called based on the number of arguments and their types when you invoke the function.

Note that function overloading is not supported based on the return type of the function alone. The parameter lists must differ in some way to overload a function.



































