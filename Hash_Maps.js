In Kotlin, a HashMap is a collection class that represents a collection of key-value pairs.
It allows you to store and retrieve elements based on their associated keys.
HashMaps provide efficient lookup and retrieval of values based on the provided keys.

Heres an example of how to work with HashMaps in Kotlin:

// Create an empty HashMap
val hashMap = HashMap<String, Int>()

// Add key-value pairs to the HashMap
hashMap["John"] = 25
hashMap["Alice"] = 30
hashMap["Bob"] = 35

// Access values using keys
val johnAge = hashMap["John"] // 25

// Update the value associated with a key
hashMap["Alice"] = 31

// Remove a key-value pair from the HashMap
hashMap.remove("Bob")

// Check if a key exists in the HashMap
val containsJohn = hashMap.containsKey("John") // true

// Iterate over the key-value pairs in the HashMap
for ((key, value) in hashMap) {
    println("Key: $key, Value: $value")
}

// Get the size of the HashMap
val size = hashMap.size

// Clear all elements from the HashMap
hashMap.clear()

In the above example, we create a HashMap called hashMap to store key-value pairs, 
  where the keys are of type String and the values are of type Int. We can add elements to the HashMap using the square bracket notation,
    where the key is specified inside the brackets and the value is assigned using the assignment operator (=).

To access a value in the HashMap, we can use the square bracket notation and provide the key. The value associated with the key can be retrieved,
assigned, or removed using the appropriate functions like get(), put(), or remove().

The HashMap class provides several useful functions like containsKey() to check if a key exists, size property to get the size of the HashMap,
  and clear() function to remove all elements from the HashMap.

When iterating over the HashMap, we can use destructuring declaration to access the key and value of each entry in the HashMap.

HashMaps in Kotlin provide an efficient way to store and retrieve key-value pairs, making them useful in various scenarios where fast 
lookup by key is required.




















...
