1.Collection  Types	                                                   Methods of Mutable Collection   

     ----------------------------------------------------------------/Mutable Lists
                                                                     
List                                                                 	ArrayList<T>()
                                                                      arrayListOf()
                                                                      mutableListOf()     


     ----------------------------------------------------------------/ Mutable Maps
                                                                      
Map                                                                 	HashMap
                                                                      hashMapOf()
                                                                      mutableMapOf()    

  ----------------------------------------------------------------  / Mutable Sets
                                                                     
Set                                      	                             hashSetOf()
                                                                       mutableSetOf()                                                                                              Collection Types                               	Methods of Immutable Collection                                                         
                                     

2.Collection  Types	                                                   Methods of IMMutable Collection     
                                            
 ----------------------------------------------------------------  /IMMutable Lists
                                                                      
List                                                                 	listOf()
                                                                      listOf<T>()  

    ----------------------------------------------------------------/ IMMutable Maps
                                                                     
Map                                                                   mapOf()  


 ----------------------------------------------------------------  /IMMutable Sets
                                                                     
Set                                      	                             setOf()"











THE ABOVE CODE EXPLAINED
***********************************************************************************************************************************************

  
 MUTABLE COLLECTIONS
_________________________________________________________________________________________________________________________


1.Mutable Lists:

Mutable lists are collections that can be modified, allowing addition, removal, and modification of elements.

Unique Features:
Mutable lists maintain the order of elements and allow duplicate values.

Methods of Mutable List:
         ArrayList<T>(): Creates an empty mutable list.
         arrayListOf(): Creates a mutable list with the given elements.
         mutableListOf(): Creates a mutable list and allows modifications.


Some common methods:
        add(element: T): Adds an element to the list.
        remove(element: T): Removes the specified element from the list.
        set(index: Int, element: T): Replaces the element at the specified index with a new element.


EXAMPLE

val mutableList = mutableListOf("apple", "banana", "orange")
mutableList.add("grape") // Add an element
mutableList.remove("banana") // Remove an element
mutableList[0] = "watermelon" // Modify an element





2.Mutable Maps:

Mutable maps are collections that store key-value pairs and can be modified.

Unique Features: 
Mutable maps store unique keys and allow access, addition, removal, and modification of key-value pairs.

Methods of Mutable Map:
        HashMap: Creates an empty mutable map.
        hashMapOf(): Creates a mutable map with the given key-value pairs.
        mutableMapOf(): Creates a mutable map and allows modifications.
        
Some common methods:
        put(key: K, value: V): Associates the specified value with the specified key in the map.
        remove(key: K): Removes the specified key and its corresponding value from the map.
        clear(): Removes all entries from the map.


EXAMPLE

val mutableMap = mutableMapOf("name" to "John", "age" to 25)
mutableMap["name"] = "Alice" // Modify a value
mutableMap["country"] = "USA" // Add a new key-value pair
mutableMap.remove("age") // Remove a key-value pair




3.Mutable Sets:

Mutable sets are collections that store unique elements and can be modified.

Unique Features:
Mutable sets ensure uniqueness of elements and provide methods for addition, removal, and modification.

Methods of Mutable Set:
        hashSetOf(): Creates an empty mutable set.
        mutableSetOf(): Creates a mutable set and allows modifications.
        
 Some common methods:
        add(element: T): Adds the specified element to the set.
        remove(element: T): Removes the specified element from the set.
        clear(): Removes all elements from the set.

        
        

EXAMPLE
        
val mutableSet = mutableSetOf("apple", "banana", "orange")
mutableSet.add("grape") // Add an element
mutableSet.remove("banana") // Remove an element


IMMUTABLE COLLECTIONS
_________________________________________________________________________________________________________________________

4.



































