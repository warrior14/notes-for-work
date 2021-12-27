// Keyword Description Code example

// False, True Data values from the data type Boolean False == (1 > 2), True == (2 > 1)
// and, or, not Logical operators:
// (x and y) → both x and y must be True
// (x or y) → either x or y must be True
// (not x) → x must be false
// x, y = True, False
// (x or y) == True # True
// (x and y) == False # True
// (not y) == True # True
// break Ends loop prematurely while(True):
//  break # no infinite loop
// print("hello world")
// continue Finishes current loop iteration while(True):
//  continue
//  print("43") # dead code
// class
// def
// Defines a new class → a real-world concept
// (object oriented programming)
// Defines a new function or class method. For latter,
// first parameter (“self”) points to the class object.
// When calling class method, first parameter is implicit.
// class Beer:
//  def __init__(self):
// self.content = 1.0
//  def drink(self):
// self.content = 0.0
// becks = Beer() # constructor - create class
// becks.drink() # beer empty: b.content == 0
// if, elif, else Conditional program execution: program starts with
// “if” branch, tries the “elif” branches, and finishes with
// “else” branch (until one branch evaluates to True).
// x = int(input("your value: "))
// if x > 3: print("Big")
// elif x == 3: print("Medium")
// else: print("Small")
// for, while # For loop declaration
// for i in [0,1,2]:
//  print(i)
// # While loop - same semantics
// j = 0
// while j < 3:
//  print(j)
//  j = j + 1
// in Checks whether element is in sequence 42 in [2, 39, 42] # True
// is Checks whether both elements point to the same
// object
// y = x = 3
// x is y # True
// [3] is [3] # False
// None Empty value constant def f():
//  x = 2
// f() is None # True
// lambda Function with no name (anonymous function) (lambda x: x + 3)(3) # returns 6
// return Terminates execution of the function and passes the
// flow of execution to the caller. An optional value after
// the return keyword specifies the function result.
// def incrementor(x):
//  return x + 1
// incrementor(4) # returns 5