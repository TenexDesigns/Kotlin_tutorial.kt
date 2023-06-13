
In Kotlin, the for loop is used to iterate over a range, an array, a collection, or any object that provides an iterator. The syntax of the for loop in Kotlin is slightly different from traditional C-style loops. Here are a few examples to help you understand how to use for loops in Kotlin:

1.Iterating over a range:

for (i in 1..5) {
    println(i)
}
Output:

1
2
3
4
5



2.Iterating over an array:

val numbers = arrayOf(1, 2, 3, 4, 5)
for (number in numbers) {
    println(number)
}
Output:

1
2
3
4
5


3.Iterating over a collection:

val names = listOf("Alice", "Bob", "Charlie")
for (name in names) {
    println(name)
}
Output:

Copy code
Alice
Bob
Charlie


4.Iterating with an index:

val numbers = arrayOf(1, 2, 3, 4, 5)
for ((index, number) in numbers.withIndex()) {
    println("Index: $index, Number: $number")
}
Output:

yaml
Copy code
Index: 0, Number: 1
Index: 1, Number: 2
Index: 2, Number: 3
Index: 3, Number: 4
Index: 4, Number: 5
Note that the for loop in Kotlin is equivalent to the "enhanced for loop" or "foreach loop" in other languages. It automatically handles iterating over the elements of a range, an array, or a collection without the need for managing an index manually.




