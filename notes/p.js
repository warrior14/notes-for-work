// // Keyword Description Code example

// // False, True Data values from the data type Boolean False == (1 > 2), True == (2 > 1)
// // and, or, not Logical operators:
// // (x and y) → both x and y must be True
// // (x or y) → either x or y must be True
// // (not x) → x must be false
// // x, y = True, False
// // (x or y) == True # True
// // (x and y) == False # True
// // (not y) == True # True
// // break Ends loop prematurely while(True):
// //  break # no infinite loop
// // print("hello world")
// // continue Finishes current loop iteration while(True):
// //  continue
// //  print("43") # dead code
// // class
// // def
// // Defines a new class → a real-world concept
// // (object oriented programming)
// // Defines a new function or class method. For latter,
// // first parameter (“self”) points to the class object.
// // When calling class method, first parameter is implicit.
// // class Beer:
// //  def __init__(self):
// // self.content = 1.0
// //  def drink(self):
// // self.content = 0.0
// // becks = Beer() # constructor - create class
// // becks.drink() # beer empty: b.content == 0
// // if, elif, else Conditional program execution: program starts with
// // “if” branch, tries the “elif” branches, and finishes with
// // “else” branch (until one branch evaluates to True).
// // x = int(input("your value: "))
// // if x > 3: print("Big")
// // elif x == 3: print("Medium")
// // else: print("Small")
// // for, while # For loop declaration
// // for i in [0,1,2]:
// //  print(i)
// // # While loop - same semantics
// // j = 0
// // while j < 3:
// //  print(j)
// //  j = j + 1
// // in Checks whether element is in sequence 42 in [2, 39, 42] # True
// // is Checks whether both elements point to the same
// // object
// // y = x = 3
// // x is y # True
// // [3] is [3] # False
// // None Empty value constant def f():
// //  x = 2
// // f() is None # True
// // lambda Function with no name (anonymous function) (lambda x: x + 3)(3) # returns 6
// // return Terminates execution of the function and passes the
// // flow of execution to the caller. An optional value after
// // the return keyword specifies the function result.
// // def incrementor(x):
// //  return x + 1
// // incrementor(4) # returns 5






// Boolean The Boolean data type is a truth value, either
// True or False.
// The Boolean operators ordered by priority:
// not x → “if x is False, then x, else y”
// x and y → “if x is False, then x, else y”
// x or y → “if x is False, then y, else x”
// These comparison operators evaluate to True:
// 1 < 2 and 0 <= 1 and 3 > 2 and 2 >=2 and
// 1 == 1 and 1 != 0 # True
// ## 1. Boolean Operations
// x, y = True, False
// print(x and not y) # True
// print(not x and y or x) # True
// ## 2. If condition evaluates to False
// if None or 0 or 0.0 or '' or [] or {} or set():
//  # None, 0, 0.0, empty strings, or empty
//  # container types are evaluated to False
//  print("Dead code") # Not reached
// Integer,
// Float
// An integer is a positive or negative number
// without floating point (e.g. 3). A float is a
// positive or negative number with floating point
// precision (e.g. 3.14159265359).
// The ‘//’ operator performs integer division.
// The result is an integer value that is rounded
// towards the smaller integer number
// (e.g. 3 // 2 == 1).
// ## 3. Arithmetic Operations
// x, y = 3, 2
// print(x + y) # = 5
// print(x - y) # = 1
// print(x * y) # = 6
// print(x / y) # = 1.5
// print(x // y) # = 1
// print(x % y) # = 1s
// print(-x) # = -3
// print(abs(-x)) # = 3
// print(int(3.9)) # = 3
// print(float(3)) # = 3.0
// print(x ** y) # = 9
// String Python Strings are sequences of characters.
// The four main ways to create strings are the
// following.
// 1. Single quotes
// 'Yes'
// 2. Double quotes
// "Yes"
// 3. Triple quotes (multi-line)
// """Yes
// We Can"""
// 4. String method
// str(5) == '5' # True
// 5. Concatenation
// "Ma" + "hatma" # 'Mahatma'
// These are whitespace characters in strings.
// ● Newline \n
// ● Space \s
// ● Tab \t
// ## 4. Indexing and Slicing
// s = "The youngest pope was 11 years old"
// print(s[0]) # 'T'
// print(s[1:3]) # 'he'
// print(s[-3:-1]) # 'ol'
// print(s[-3:]) # 'old'
// x = s.split() # creates string array of words
// print(x[-3] + " " + x[-1] + " " + x[2] + "s")
//  # '11 old popes'
// ## 5. Most Important String Methods
// y = " This is lazy\t\n "
// print(y.strip()) # Remove Whitespace: 'This is lazy'
// print("DrDre".lower()) # Lowercase: 'drdre'
// print("attention".upper()) # Uppercase: 'ATTENTION'
// print("smartphone".startswith("smart")) # True
// print("smartphone".endswith("phone")) # True
// print("another".find("other")) # Match index: 2
// print("cheat".replace("ch", "m")) # 'meat'
// print(','.join(["F", "B", "I"])) # 'F,B,I'
// print(len("Rumpelstiltskin")) # String length: 15
// print("ear" in "earth") # Contains: True




