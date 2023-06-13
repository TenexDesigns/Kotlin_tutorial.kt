In Kotlin, there are various operators available for performing operations on different types of data. Here are some commonly used operators in Kotlin:

1.Arithmetic Operators:

+ Addition: Adds two values together.
- Subtraction: Subtracts the second value from the first.
* Multiplication: Multiplies two values.
/ Division: Divides the first value by the second.
% Modulus: Returns the remainder of the division of the first value by the second.


val a = 5
val b = 3
val addition = a + b // 8
val subtraction = a - b // 2
val multiplication = a * b // 15
val division = a / b // 1 (integer division)
val modulus = a % b // 2 (remainder of division)



2.Assignment Operators:

= Assignment: Assigns a value to a variable.
+= Addition assignment: Adds the right operand to the left operand and assigns the result to the left operand.
-= Subtraction assignment: Subtracts the right operand from the left operand and assigns the result to the left operand.
*= Multiplication assignment: Multiplies the left operand by the right operand and assigns the result to the left operand.
/= Division assignment: Divides the left operand by the right operand and assigns the result to the left operand.
%= Modulus assignment: Computes the modulus of the left operand with the right operand and assigns the result to the left operand.


var x = 10
x += 5 // x is now 15 (addition assignment)
x -= 3 // x is now 12 (subtraction assignment)
x *= 2 // x is now 24 (multiplication assignment)
x /= 4 // x is now 6 (division assignment)
x %= 5 // x is now 1 (modulus assignment)







3.Comparison Operators:

== Equality: Checks if two values are equal.
!= Inequality: Checks if two values are not equal.
< Less than: Checks if the left value is less than the right value.
> Greater than: Checks if the left value is greater than the right value.
<= Less than or equal to: Checks if the left value is less than or equal to the right value.
>= Greater than or equal to: Checks if the left value is greater than or equal to the right value.


val a = 5
val b = 3
val isEqual = a == b // false (equality check)
val isNotEqual = a != b // true (inequality check)
val isLessThan = a < b // false (less than check)
val isGreaterThan = a > b // true (greater than check)
val isLessThanOrEqual = a <= b // false (less than or equal to check)
val isGreaterThanOrEqual = a >= b // true (greater than or equal to check)




4.Logical Operators:

&& Logical AND: Returns true if both operands are true.
|| Logical OR: Returns true if either of the operands is true.
! Logical NOT: Negates the boolean value of the operand.


val x = 5
val y = 3
val z = 7
val logicalAnd = x > y && x < z // true (logical AND)
val logicalOr = x > y || x > z // true (logical OR)
val logicalNot = !(x > y) // false (logical NOT)



5.Increment and Decrement Operators:

++ Increment: Increases the value of a variable by 1.
-- Decrement: Decreases the value of a variable by 1.

var count = 10
count++ // count is now 11 (post-increment)
count-- // count is now 10 (post-decrement)

var num = 5
val result = ++num // num is now 6, result is 6 (pre-increment)

6.Range Operator:

.. Range: Creates a range from the start value to the end value (inclusive).

val range = 1..5 // Creates a range from 1 to 5 (inclusive)
for (i in range) {
    println(i) // Prints 1, 2, 3, 4, 5
}


These are some of the commonly used operators in Kotlin. You can use them to perform operations,
  comparisons, assignments, and logical operations in your code.

















































