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



4.Immutable Lists:
Immutable lists are collections with read-only access, and their elements cannot be modified.

Unique Features:
Immutable lists provide a fixed set of elements that cannot be changed.

Methods of Immutable List:
          listOf(): Creates an immutable list with the given elements.
          listOf<T>(): Creates an empty immutable list.

Some common methods:
          get(index: Int): Retrieves the element at the specified index.
          indexOf(element: T): Returns the index of the first occurrence of the specified element, or -1 if not found.
          subList(fromIndex: Int, toIndex: Int): Returns a view of the portion of the list between the specified indices.

EXAMPLE

val immutableList = listOf("apple", "banana", "orange")
val element = immutableList[0] // Access an element
val immutableList = listOf(1, 2, 3)
val element = immutableList[1]
val index = immutableList.indexOf(3)
val subList = immutableList.subList(1, 3)





5.Immutable Maps:

Immutable maps are collections that store key-value pairs and cannot be modified.

Unique Features:
Immutable maps provide a fixed set of key-value pairs that cannot be changed.

Methods of Immutable Map:
          mapOf(): Creates an immutable map with the given key-value pairs.
          
          
Some common methods:
          get(key: K): Retrieves the value corresponding to the specified key, or null if not found.
          keys: Returns a read-only set of the maps keys.
          values: Returns a read-only collection of the maps values.

EXAMPLE
val immutableMap = mapOf("name" to "John", "age" to 25)
val value = immutableMap["name"] // Access a value by key
          
val immutableMap = mapOf("one" to 1, "two" to 2)
val value = immutableMap["one"]
val keys = immutableMap.keys
val values = immutableMap.values





6.Immutable Sets:

Immutable sets are collections that store unique elements and cannot be modified.

Unique Features: 
Immutable sets provide a fixed set of unique elements that cannot be changed.

Methods of Immutable Set:
          setOf(): Creates an immutable set with the given elements.
          
Some common methods:
          contains(element: T): Returns true if the set contains the specified element.
          isEmpty(): Returns true if the set is empty.
          size: Returns the number of elements in the set.


EXAMPLE

val immutableSet = setOf("apple", "banana", "orange")
val containsOrange = immutableSet.contains("orange") // Check if an element exists

val immutableSet = setOf(1, 2, 3)
val containsElement = immutableSet.contains(2)
val isEmpty = immutableSet.isEmpty()
val size = immutableSet.size




The methods and features available in each collection type allow for convenient manipulation and retrieval of data. 
Immutable collections provide a guarantee that the data will not change, while mutable collections allow modifications to the data as needed.
By choosing the appropriate collection type and methods, you can efficiently work with collections in Kotlin.














