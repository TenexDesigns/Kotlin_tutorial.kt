ENUM CLASSS


 We define an inum class by using the enum keyword , class ad class name.
We use enums to store same kinf of constant values




Within this enum class of CreditcardTypes, we can store constant values for each card type.e.g first card type, is gold,second is silver e.tc


enum class CreditCardTypes {
  
  //These are the ENUM CONSTANTS
  SILVER,
  GOLD,
  PLATINUM

}


YOU CAN ACCESS THIS ENUM CONSTANTS LIKE THIS  // tHE ENUM CLASSNAME DOT THE ENUM CONSTANT NAME
These enum constants are nothing but constant objects of the enum class of CreditCardTypes.
So silver is an object of class CreditCardType

fun Main(){
  
  CreditCardType.GOLD

}


So silver,gold and patinum is an object of class CreditCardType


fun Main(){
  
 val value :CreditCardType = CreditCardType.GOLD

}














enum class CreditCardTypes {
  
  //These objects are arranged in sequesnce and are assigned an index value.
  // Thses Indexexs can be accessed through something called an ordinal
  // There is also one more propety of this enum constants called name. The name of the enum constant is the same as the name it is given
  SILVER,  //0      // ordinal =0              // name = "SILVER"
  GOLD,    //1      //ordinal = 1             // name = "GOLD"
  PLATINUM //2     // ordinal = 2            // name = "PLATINUM"

}


TO ACCESS THE NAME AND THE ORDINAL

_______________________________________________________________________________________________________________________________________



fun Main(){
  
 println(CreditCardType.GOLD.ordinal)     ---> This will give 1
 println(CreditCardType.GOLD.Type)        ---> This will give "GOLD"
 println(CreditCardType.GOLD)             ---> This will give "GOLD", because internaly the toString method is called

}

 
 
 THE ENUM OBJECT HAS TWO METHODS , THE values() and the valueof()
 The values method return an array of the enum constants
 
 
 val myConstants : Array<CreditCardTypes>=CreditCardType.values()
 //We cant loop through all the enum constants liike
 myConstant.foorEach{print(it)}     ----> This will give   "SILVER"
                                    ----> This will give   "GOLD"
                                    ----> This will give   "PLATINUM"



       USES CASES
_______________________________________________________________________________________________________________________________________

This enum class can be used in a when block


val peterCardType :CreditCardType = CreditCardType.GOLD

when(peterCardType){
  
  
  CreditCardType.SILVER -> printLn("Peter  has Silver card")
  CreditCardType.SILVER -> printLn("Peter  has gold card")     This will be excuted since peter has the gold card
  CreditCardType.SILVER -> printLn("Peter  has platinum card")
  
  
}


ADING PROPERTIES TO THE ENUM CONSTANTS
_______________________________________________________________________________________________________________________________________

This enum constants only have the name and ordinal propertioes.
To add prperties to them,we add the property to the constructor of the enum class.



enum class CreditCardTypes(val color:String) {
  
  //These are the ENUM CONSTANTS
  SILVER("grey"),
  GOLD("yellow"),
  PLATINUM("black")

}


You can access this properties like this

fun Main(){
  
  println(CreditCardType.SILVER.color)          ----> This will print "grey"



}

_______________________________________________________________________________________________________________________________________

YOU CAN ALSO ASSIGN MORE PROPERTIES TO THESE ENUM CONSTANTS,HOWEVER YOUCAN MAKE THIS PROPERTIES HAVE A DEFAULT VALUE ACCROSS 
ALL ENUM CONSTANTS BY ASSIGNING THE VALUE ON THE CONSTRUCTOR
THIS WILL MAKE ALL ENUM CLASS HAVE THAT DEFAULT VALUE ,UNLESS THE Value IS CHANGED ON AN INDVIDUAL ENUM




enum class CreditCardTypes(val color:String,,val maxLimit:Int =199) {
  
  //These are the ENUM CONSTANTS
  SILVER("grey"),
  GOLD("yellow",400),
  PLATINUM("black")

}


fun Main(){
  
  println(CreditCardType.SILVER.maxLimit)          ----> This will print 199
  println(CreditCardType.GOLD.maxLimit)            ----> This will print 400



}


INTERFACES
_______________________________________________________________________________________________________________________________________


We can implemnt an interface on an enum class ,jusst as we can on all classess in kotlin.

interface ICardCashBank{
  
  fun getCashBackValue():Float   // This is a function that will return a float 



}



                                                                  // Here we extend the interface// And it is mandatory that we overide the function in the interface in all of our enum constants
enum class CreditCardTypes(val color:String,,val maxLimit:Int =199):ICardCashBack {
  
  //These are the ENUM CONSTANTS
  SILVER("grey"){
    overide fun getCashBackValue():Float {        // We can write our function like this
      retun 0.02f
    }
  
  },
  GOLD("yellow",400){
    overide fun getCashBackValue():Float  = retun 0.05f   // We can write our function like this in one line since it return only one thing 
      
    ,
  PLATINUM("black"){
    overide fun getCashBackValue():Float {        // We can write our function like this
      retun 0.03f
    }

}

  
  
  Enums constants as Anonymous Classes 
_______________________________________________________________________________________________________________________________________
    
Enum constants also behaves as anonymous classes by implementing their own functions along with overriding the abstract functions of the class.
The most important thing is that each enum constant must be override.
    
    // defining enum class
enum class Seasons(var weather: String) {
  
  abstract fun foo()// These enum constants must overriding the abstract functions of the class
  
  
	Summer("hot"){
		// compile time error if not override the function foo()
		override fun foo() {			
			println("Hot days of a year")
		}
	},
	Winter("cold"){
		override fun foo() {
			println("Cold days of a year")
		}
	},
	Rainy("moderate"){
		override fun foo() {
			println("Rainy days of a year")
		}
	};
	
}





// main function
fun main(args: Array<String>) {
	// calling foo() function override be Summer constant
	Seasons.Summer.foo()
}

    
    
    


















































































