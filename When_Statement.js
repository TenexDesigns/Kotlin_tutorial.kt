In Kotlin, the when statement is used for more complex branching based on multiple possible values or conditions. It is similar to the switch statement in some other programming languages but provides more flexibility and expressive power. The when statement allows you to match a value against multiple cases and execute different blocks of code based on the matched case. Here's how it works:

when statement with multiple cases:
The when statement evaluates an expression and matches its value against multiple cases. If a case matches, the corresponding code block is executed. Here's the basic syntax:
kotlin
Copy code
when (expression) {
    case1 -> {
        // Code to be executed for case1
    }
    case2 -> {
        // Code to be executed for case2
    }
    // additional cases...
    else -> {
        // Code to be executed if no case matches
    }
}
Example:

kotlin
Copy code
val x = 3
when (x) {
    1 -> println("One")
    2 -> println("Two")
    3 -> println("Three")
    else -> println("Other")
}
Output:

Copy code
Three
In the above example, the when statement matches the value of x against the cases specified. Since x is 3, the case 3 matches, and the corresponding code block println("Three") is executed.

when statement with condition:
You can also use conditions in when statements to match against more complex conditions. Here's an example:
kotlin
Copy code
val x = 5
when {
    x < 0 -> println("Negative number")
    x > 0 && x < 10 -> println("Single-digit positive number")
    else -> println("Other number")
}
Output:

typescript
Copy code
Single-digit positive number
In this example, the when statement evaluates each condition and executes the code block associated with the first condition that evaluates to true. Since x is greater than 0 and less than 10, the condition x > 0 && x < 10 matches, and the corresponding code block println("Single-digit positive number") is executed.

The when statement in Kotlin is more flexible than traditional switch statements, as it can handle various data types, use conditions, and even check for complex conditions. It provides a powerful mechanism for branching based on multiple cases or conditions in a concise and readable manner.
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
