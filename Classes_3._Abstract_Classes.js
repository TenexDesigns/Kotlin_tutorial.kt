In Kotlin, an abstract class is a class that cannot be instantiated and is meant to be subclassed.
Abstract classes are used to provide a common interface and implementation for their subclasses.
When a subclass extends an abstract class, it must provide implementations for all of the abstract methods defined in 
  the abstract class geeksforgeeks.org.

To declare an abstract class in Kotlin, use the abstract keyword in front of the class name tutorialspoint.com:

abstract class ClassName {
    // ...
}

An abstract class can contain both abstract and non-abstract members.
Abstract member functions dont have a body and must be implemented in the derived class. 
Non-abstract member functions have a body and can be overridden in the derived class if needed geeksforgeeks.org:

abstract class ClassName(val x: String) {
    abstract var y: Int
    abstract fun method1()

    fun method2() {
        println("Non-abstract function")
    }
}
Abstract classes have some advantages, such as abstraction, polymorphism, code reusability, 
  and implementing common behavior for their subclasses.
  However, they also have some disadvantages, such as limited instantiation and increased complexity geeksforgeeks.org.

Heres an example of using an abstract class in Kotlin:

abstract class Shape {
    abstract fun area(): Double
    abstract fun perimeter(): Double
}

class Rectangle(val width: Double, val height: Double) : Shape() {
    override fun area(): Double {
        return width * height
    }

    override fun perimeter(): Double {
        return 2 * (width + height)
    }
}

fun main() {
    val rectangle = Rectangle(5.0, 3.0)
    println("Area: ${rectangle.area()}, Perimeter: ${rectangle.perimeter()}")
}
In this example, an abstract class Shape is defined with two abstract methods: area() and perimeter(). 
The Rectangle class extends Shape and provides implementations for these methods.
The main function creates an instance of the Rectangle class and calls the area() and perimeter() methods.








MORE EXPLANANTION
**************************************************************************************************************************


In Kotlin, abstract classes are classes that cannot be instantiated directly but serve as a base for subclasses. 
They are used to define common behaviors and properties that can be shared among multiple related classes.

To declare an abstract class in Kotlin, you use the abstract keyword before the class keyword. Here's an example:


abstract class Shape {
    abstract fun calculateArea(): Double
    abstract fun calculatePerimeter(): Double

    fun printDescription() {
        println("I am a shape.")
    }
}
In the code above, we define an abstract class called Shape. It contains two abstract methods: calculateArea() and calculatePerimeter().
These methods dont have implementations in the abstract class but must be implemented by any concrete subclass that inherits from Shape.

The Shape class also has a non-abstract method called printDescription(), 
  which provides a common behavior that can be inherited by subclasses.

To create a concrete subclass that inherits from an abstract class,
  you use the : symbol followed by the name of the abstract class in the subclass declaration.
  The subclass must provide implementations for all the abstract methods inherited from the abstract class. Heres an example:


class Rectangle(val width: Double, val height: Double) : Shape() {
    override fun calculateArea(): Double {
        return width * height
    }

    override fun calculatePerimeter(): Double {
        return 2 * (width + height)
    }
}
In the code above, we define a concrete subclass called Rectangle that inherits from the Shape abstract class.
The Rectangle class provides implementations for the calculateArea() and calculatePerimeter() methods inherited from Shape.

You can now create instances of the Rectangle class and use its methods:

kotlin
Copy code
fun main() {
    val rectangle = Rectangle(5.0, 3.0)
    println("Area: ${rectangle.calculateArea()}")
    println("Perimeter: ${rectangle.calculatePerimeter()}")
    rectangle.printDescription()
}
In the main() function, we create an instance of the Rectangle class and call its methods.
The calculateArea() and calculatePerimeter() methods provide specific implementations for the rectangle shape,
  while the printDescription() method is inherited from the Shape abstract class.

Abstract classes in Kotlin allow you to define common behavior and enforce implementation requirements for subclasses.
They provide a way to define a base template that can be extended and specialized by concrete subclasses.


































