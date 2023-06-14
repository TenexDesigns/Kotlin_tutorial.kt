In Kotlin, objects and companion objects are used to create singleton instances and static-like behavior, respectively.

1.Object: 

An object is a way to create a single instance of a class, often used to create a singleton.
In Kotlin, you can declare an object using the object keyword followed by the object name blog.mindorks.com:

object Singleton {
    fun doSomething() {
        println("Doing something")
    }
}

fun main() {
    Singleton.doSomething()
}

In this example, the Singleton object has a doSomething() function.
You can call this function directly using the object name, without creating an instance of the class.





2.Companion Object:

A companion object is used to create class members that can be accessed without creating an instance of the class,
  similar to static members in Java. To create a companion object, add the companion keyword in front of the object declaration inside the class blog.mindorks.com:

  class MyClass {
    companion object {
        fun staticFunction() {
            println("Static-like function")
        }
    }
}

fun main() {
    MyClass.staticFunction()
}
In this example, the MyClass class has a companion object with a staticFunction() method.
You can call this method directly using the class name, without creating an instance of the class.








MORE EXPLANANTION
******************************************************************************************************************************************



In Kotlin, objects are used to define a single instance of a class. 
They are similar to singletons in other programming languages.
An object declaration creates a named object that can be accessed directly, without the need to create an instance of the class.

Heres an example of an object declaration:


object MySingleton {
    fun doSomething() {
        println("Doing something...")
    }
}

In the code above, we declare an object named MySingleton. It has a single function doSomething().
The object can be accessed directly using its name, without the need for instantiation.

To use the object and invoke its functions, you can simply reference the object name followed by the function name:


fun main() {
    MySingleton.doSomething()
}

In the main() function, we directly call the doSomething() function of the MySingleton object.

Objects are commonly used to implement singletons, where only one instance of a class is needed throughout the application. 
The object declaration ensures that there is only one instance of the object, and it can be accessed from anywhere in the code.

Additionally, Kotlin provides companion objects, which are special objects associated with a class. 
Companion objects are declared inside a class and allow access to private members of that class.
They can be seen as a way to define static members within a class.

Heres an example of a class with a companion object:

class MyClass {
    companion object {
        fun doSomething() {
            println("Doing something in companion object...")
        }
    }
}

In the code above, we define a class MyClass with a companion object.
The companion object is declared using the companion keyword.
It has a function doSomething(), which can be accessed directly through the companion object.

To call the function in the companion object, you use the name of the class followed by the companion object name:


fun main() {
    MyClass.doSomething()
}

In the main() function, we call the doSomething() function of the companion object of the MyClass.

Companion objects are useful when you want to define static members or utility functions that are closely related to a class. 
They provide a way to organize related functionality within a class while allowing access to private members of the class.

In summary, objects in Kotlin allow you to create single instances of a class directly, without the need for instantiation. 
Companion objects, on the other hand, are associated with a class and provide a way to define static members or utility functions within the class.













































