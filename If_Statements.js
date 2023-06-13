
In Kotlin, the if statement is used for conditional branching. It allows you to execute different blocks of code based on the evaluation of a condition. Kotlin provides two forms of if statements: the regular if statement and the if-else statement. Here's how they work:

Regular if statement:
The regular if statement executes a block of code if the condition provided evaluates to true. If the condition is false, the code block is skipped, and the program continues with the next statement. Here's the syntax:
kotlin
Copy code
if (condition) {
    // Code to be executed if the condition is true
}
Example:

kotlin
Copy code
val x = 5
if (x > 0) {
    println("Positive number")
}
Output:

mathematica
Copy code
Positive number
In the above example, the code block inside the if statement is executed because the condition x > 0 is true.

if-else statement:
The if-else statement allows you to specify different code blocks to execute based on whether the condition is true or false. If the condition is true, the code block associated with the if statement is executed. Otherwise, the code block associated with the else statement is executed. Here's the syntax:
kotlin
Copy code
if (condition) {
    // Code to be executed if the condition is true
} else {
    // Code to be executed if the condition is false
}
Example:

kotlin
Copy code
val x = -3
if (x > 0) {
    println("Positive number")
} else {
    println("Non-positive number")
}
Output:

typescript
Copy code
Non-positive number
In the above example, since the condition x > 0 is false, the code block associated with the else statement is executed.

Additionally, you can also use multiple else if clauses to specify additional conditions to be evaluated. The code block associated with the first condition that evaluates to true will be executed. Here's an example:

kotlin
Copy code
val x = 0
if (x > 0) {
    println("Positive number")
} else if (x < 0) {
    println("Negative number")
} else {
    println("Zero")
}
Output:

Copy code
Zero
In this example, since x is equal to 0, the condition x > 0 is false, and the condition x < 0 is also false, so the code block associated with the final else statement is executed, printing "Zero".

The if and if-else statements in Kotlin provide a flexible way to control the flow of execution based on different conditions.
