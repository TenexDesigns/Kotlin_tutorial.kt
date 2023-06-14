In Kotlin, visibility modifiers are used to control the visibility or accessibility of classes, 
  functions, properties, and other declarations within your code. Kotlin provides the following visibility modifiers:

  1.Public (default):

      Public visibility is the default visibility modifier in Kotlin.
      Public members are visible everywhere, both within the defining module and externally.
      If no visibility modifier is specified, the declaration is considered public.
      Example: public class MyClass

  
  2.Private:

      Private visibility restricts the visibility to the current scope (class, file, or enclosing block).
      Private members are only visible within the same class or file.
      Example: private val myVariable
      
      
  3.Protected:

      Protected visibility allows access within the class itself and its subclasses.
      Protected members are not visible at the top level or to other classes in the same file.
      Example: protected fun myFunction()

  4.Internal:

      Internal visibility allows access within the same module (a set of Kotlin files compiled together).
      Internal members are not visible outside the module, even if they are declared public.
      Example: internal val myValue


By default, top-level declarations (e.g., functions, properties) in Kotlin have public visibility,
  while classes have internal visibility unless explicitly specified otherwise. 
  Members of a class (properties, functions, etc.) inherit the visibility of the class unless their visibility is explicitly modified.

You can apply visibility modifiers to classes, constructors, functions, properties, and other declarations. 
They help you control the visibility of your code and enforce encapsulation principles, allowing you to expose only
whats necessary and hide implementation details.

Note that visibility modifiers in Kotlin are different from Java.
Kotlins visibility modifiers provide more fine-grained control and have different default visibility rules.






MORE EXPLANANTION
*********************************************************************************************************************************

Visibility modifiers in Kotlin are used to control the accessibility of classes, objects, interfaces, constructors, functions, properties, and their setters. There are four visibility modifiers: private, protected, internal, and public. The default visibility is public if no explicit modifier is provided kotlinlang.org.

private: A private member is visible only within the containing class or the same file if it is a top-level declaration geeksforgeeks.org.
protected: A protected member is visible within the containing class and its subclasses. It is not applicable to top-level declarations geeksforgeeks.org.
internal: An internal member is visible within the same module, which is a set of Kotlin files compiled together geeksforgeeks.org.
public: A public member is visible to any code. This is the default visibility for members in Kotlin geeksforgeeks.org.
Using visibility modifiers can help enforce encapsulation, modularity, and abstraction, making the code more maintainable and less prone to bugs. However, it can also introduce complexity and overhead geeksforgeeks.org.

Here's an example of using visibility modifiers in Kotlin:

open class Animal {
    private val privateVar = "I am private"
    protected val protectedVar = "I am protected"
    internal val internalVar = "I am internal"
    val publicVar = "I am public (default)"

    protected fun protectedFunction() {
        println("Protected function called")
    }
}

class Dog : Animal() {
    fun accessMembers() {
        // println(privateVar) // Error: Cannot access 'privateVar': it is private in 'Animal'
        println(protectedVar)
        println(internalVar)
        println(publicVar)
        protectedFunction()
    }
}

fun main() {
    val myDog = Dog()
    myDog.accessMembers()

    val myAnimal = Animal()
    // println(myAnimal.privateVar) // Error: Cannot access 'privateVar': it is private in 'Animal'
    // println(myAnimal.protectedVar) // Error: Cannot access 'protectedVar': it is protected in 'Animal'
    println(myAnimal.internalVar)
    println(myAnimal.publicVar)
}
In this example, the Animal class has members with different visibility modifiers. The Dog class, which inherits from Animal, can access the protected, internal, and public members, but not the private member. In the main function, only the internal and public members can be accessed directly from an Animal instance.









..
