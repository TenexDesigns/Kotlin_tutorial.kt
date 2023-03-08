
IN OUR EXAMPLE WE ARE GOING TO BE DISPPLAYING DATA FROM A DATA CLASS
 A data class is a class that we can use to just create objects with same values 
e.g  data class Person (val name:String,val age:Int, val id:Int)
We can use this data class to make a objects that will have the values of name,age and id 
e.g
val personOne = Person("George",34,1)
val personTwo = Person("Eliud",24,2)
val personThree = Person("Boniface",14,3)
val personFour = Person("Allan",44,4)

print(personOne.name)  --->  will print  --> George
print(personTwo.name)  --->  will print  --> Eliud

NOW IN THIS PROGET WE WILL HAVE A PERSON DATA CLASS
data class Person(
    val id: Int,
    val firstName: String,
    val lastName: String,
    val age: Int
