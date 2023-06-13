In Kotlin, you can use the while and do-while loops for iterative execution, and you can also utilize labels to control the flow of execution within loops. Let's discuss each of these concepts in more detail:

while Loop:
The while loop in Kotlin repeatedly executes a block of code as long as a given condition is true. Here's the syntax:
kotlin
Copy code
while (condition) {
    // Code to be executed
}
Example:

kotlin
Copy code
var i = 0
while (i < 5) {
    println(i)
    i++
}
Output:

Copy code
0
1
2
3
4
do-while Loop:
The do-while loop in Kotlin is similar to the while loop, but it guarantees that the code block executes at least once, regardless of the condition. Here's the syntax:
kotlin
Copy code
do {
    // Code to be executed
} while (condition)
Example:

kotlin
Copy code
var i = 0
do {
    println(i)
    i++
} while (i < 5)
Output:

Copy code
0
1
2
3
4
Labels:
Labels in Kotlin are used to mark a specific line of code or a block of code with an identifier.
Labels are useful when you have nested loops or conditional statements and you want to break or continue the execution of an outer loop from within an inner loop. Here's the syntax:
kotlin
Copy code
labelName@ for (i in 1..3) {
    for (j in 1..3) {
        if (i == 2 && j == 2) {
            break@labelName // Breaks out of the labeled loop
        }
        println("i: $i, j: $j")
    }
}
Output:

yaml
Copy code
i: 1, j: 1
i: 1, j: 2
i: 1, j: 3
In the above example, the break@labelName statement is used to break out of the outer loop when i is 2 and j is 2. Without the label, it would only break out of the inner loop.

Similarly, you can use continue@labelName to continue the execution of the loop from the specified label.

Labels provide a way to control the flow of execution within nested loops and conditional statements, allowing you to break or continue at specific points in your code.
