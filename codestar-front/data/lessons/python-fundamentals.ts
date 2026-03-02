import type { Lesson } from "@/types/course"

export const PYTHON_FUNDAMENTALS_LESSONS: Lesson[] = [
  // -------------------------------------------------------------------------
  // Lesson 1 — Variables & Types
  // -------------------------------------------------------------------------
  {
    id: "variables-and-types",
    title: "Variables & Types",
    summary: "Learn how Python stores data with variables and its built-in primitive types.",
    duration: 12,
    content: [
      {
        type: "paragraph",
        text: "Every program needs to remember things — a user's name, a score, a temperature reading. Python uses variables to give a name to a piece of data so you can refer to it later. Unlike many languages, Python doesn't require you to declare the type of a variable: it figures it out from the value you assign.",
      },
      {
        type: "heading",
        level: 2,
        text: "Assigning variables",
      },
      {
        type: "paragraph",
        text: "Use the = operator to bind a name to a value. The name goes on the left, the value on the right.",
      },
      {
        type: "code",
        language: "python",
        filename: "variables.py",
        code: `name = "Alice"
age = 25
height = 1.72
is_enrolled = True

print(name)        # Alice
print(age)         # 25
print(height)      # 1.72
print(is_enrolled) # True`,
      },
      {
        type: "callout",
        variant: "tip",
        text: "Variable names should be lowercase with words separated by underscores — this style is called snake_case and is the Python convention defined in PEP 8.",
      },
      {
        type: "heading",
        level: 2,
        text: "The four primitive types",
      },
      {
        type: "paragraph",
        text: "Python has four essential built-in types you'll use in almost every program:",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "int — whole numbers, e.g. 42 or -7",
          "float — decimal numbers, e.g. 3.14 or -0.001",
          "str — text enclosed in single or double quotes, e.g. \"hello\"",
          "bool — either True or False (capital T and F)",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Checking types with type()",
      },
      {
        type: "paragraph",
        text: "You can always ask Python what type a value is using the built-in type() function.",
      },
      {
        type: "code",
        language: "python",
        filename: "check_types.py",
        code: `print(type(42))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type("hello"))   # <class 'str'>
print(type(True))      # <class 'bool'>`,
      },
      {
        type: "heading",
        level: 2,
        text: "Type conversion",
      },
      {
        type: "paragraph",
        text: "You can convert between types using the constructor functions int(), float(), and str(). This is called casting.",
      },
      {
        type: "code",
        language: "python",
        filename: "casting.py",
        code: `score = "98"          # str — came from user input
score_as_int = int(score)
print(score_as_int + 2)   # 100

pi = 3.14159
print(int(pi))            # 3  (truncates, does not round)
print(str(pi))            # "3.14159"`,
      },
      {
        type: "callout",
        variant: "warning",
        text: "Trying to convert a non-numeric string to int will raise a ValueError at runtime. Always validate input before casting.",
      },
      {
        type: "heading",
        level: 2,
        text: "String operations",
      },
      {
        type: "paragraph",
        text: "Strings support concatenation with + and repetition with *. Python also provides f-strings (formatted string literals) as the modern, readable way to embed values inside text.",
      },
      {
        type: "code",
        language: "python",
        filename: "strings.py",
        code: `first = "Code"
last  = "Star"

# Concatenation
print(first + last)          # CodeStar

# f-string (Python 3.6+)
language = "Python"
version  = 3
print(f"Welcome to {language} {version}!")  # Welcome to Python 3!

# Useful string methods
msg = "  hello world  "
print(msg.strip())           # "hello world"
print(msg.strip().title())   # "Hello World"
print(len("CodeStar"))       # 8`,
      },
      {
        type: "heading",
        level: 2,
        text: "Multiple assignment & constants",
      },
      {
        type: "paragraph",
        text: "Python lets you assign multiple variables in one line. For values that should never change (constants), the convention is ALL_CAPS — Python doesn't enforce immutability, but the name signals intent to other developers.",
      },
      {
        type: "code",
        language: "python",
        filename: "multi_assign.py",
        code: `# Multiple assignment
x, y, z = 1, 2, 3
print(x, y, z)   # 1 2 3

# Swap two variables without a temp variable
x, y = y, x
print(x, y)      # 2 1

# Constants (by convention)
MAX_SCORE = 100
PI = 3.14159`,
      },
      {
        type: "callout",
        variant: "info",
        text: "Python variables are references, not boxes. When you write x = y, both names point to the same object in memory. This matters most with mutable types like lists — covered in a later lesson.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Lesson 2 — Control Flow
  // -------------------------------------------------------------------------
  {
    id: "control-flow",
    title: "Control Flow",
    summary: "Direct your program with if/elif/else conditions and for/while loops.",
    duration: 15,
    content: [
      {
        type: "paragraph",
        text: "A program that runs the same instructions every time isn't very useful. Control flow lets you make decisions (if/elif/else) and repeat actions (for/while) so your code can respond to different situations and process collections of data.",
      },
      {
        type: "heading",
        level: 2,
        text: "if / elif / else",
      },
      {
        type: "paragraph",
        text: "An if statement evaluates a condition. If it is True the indented block runs; otherwise Python moves to the optional elif (else-if) or else branches.",
      },
      {
        type: "code",
        language: "python",
        filename: "conditions.py",
        code: `score = 78

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Score: {score} → Grade: {grade}")  # Score: 78 → Grade: C`,
      },
      {
        type: "callout",
        variant: "tip",
        text: "Python uses indentation (4 spaces by convention) to define blocks — there are no curly braces. Consistent indentation is not just style; it is syntax.",
      },
      {
        type: "heading",
        level: 2,
        text: "Comparison & logical operators",
      },
      {
        type: "list",
        ordered: false,
        items: [
          "== equal to,  != not equal to",
          "< less than,  > greater than,  <= / >= with or equal",
          "and — both conditions must be True",
          "or — at least one condition must be True",
          "not — inverts a boolean value",
        ],
      },
      {
        type: "code",
        language: "python",
        filename: "logic.py",
        code: `age = 20
has_id = True

if age >= 18 and has_id:
    print("Access granted")

# not operator
is_closed = False
if not is_closed:
    print("The store is open")

# Chained comparison (Pythonic)
x = 5
print(1 < x < 10)   # True`,
      },
      {
        type: "heading",
        level: 2,
        text: "for loops",
      },
      {
        type: "paragraph",
        text: "A for loop iterates over any sequence — a list, a string, a range of numbers, or any iterable object.",
      },
      {
        type: "code",
        language: "python",
        filename: "for_loop.py",
        code: `# Loop over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Loop over a range of numbers
for i in range(5):          # 0, 1, 2, 3, 4
    print(i)

# range(start, stop, step)
for i in range(2, 11, 2):   # 2, 4, 6, 8, 10
    print(i)

# Loop with index using enumerate()
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")`,
      },
      {
        type: "heading",
        level: 2,
        text: "while loops",
      },
      {
        type: "paragraph",
        text: "A while loop keeps running as long as its condition is True. Use it when you don't know in advance how many iterations you need.",
      },
      {
        type: "code",
        language: "python",
        filename: "while_loop.py",
        code: `count = 0
while count < 5:
    print(f"count is {count}")
    count += 1   # Don't forget to update the variable!

# Infinite loop with break
while True:
    user_input = input("Type 'quit' to exit: ")
    if user_input == "quit":
        break
    print(f"You typed: {user_input}")`,
      },
      {
        type: "callout",
        variant: "warning",
        text: "A while loop whose condition never becomes False will run forever (an infinite loop), hanging your program. Always make sure the loop variable moves toward the exit condition.",
      },
      {
        type: "heading",
        level: 2,
        text: "break and continue",
      },
      {
        type: "paragraph",
        text: "break exits the loop immediately. continue skips the rest of the current iteration and jumps to the next one.",
      },
      {
        type: "code",
        language: "python",
        filename: "break_continue.py",
        code: `# break — stop at the first even number
for n in range(10):
    if n % 2 == 0 and n > 0:
        print(f"First positive even: {n}")
        break

# continue — skip odd numbers
for n in range(8):
    if n % 2 != 0:
        continue
    print(n)   # prints 0, 2, 4, 6`,
      },
      {
        type: "heading",
        level: 2,
        text: "Putting it together: FizzBuzz",
      },
      {
        type: "paragraph",
        text: "FizzBuzz is a classic exercise that tests your understanding of loops and conditionals. Print numbers 1–20, but replace multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'.",
      },
      {
        type: "code",
        language: "python",
        filename: "fizzbuzz.py",
        code: `for n in range(1, 21):
    if n % 15 == 0:
        print("FizzBuzz")
    elif n % 3 == 0:
        print("Fizz")
    elif n % 5 == 0:
        print("Buzz")
    else:
        print(n)`,
      },
      {
        type: "callout",
        variant: "info",
        text: "Check n % 15 first — if you checked n % 3 before n % 15, every multiple of 15 would print 'Fizz' and the 'FizzBuzz' branch would never be reached. Order of conditions matters.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // Lesson 3 — Functions & Scope
  // -------------------------------------------------------------------------
  {
    id: "functions-and-scope",
    title: "Functions & Scope",
    summary: "Write reusable code blocks with functions, parameters, return values, and understand variable scope.",
    duration: 18,
    content: [
      {
        type: "paragraph",
        text: "As programs grow, repeating the same logic in multiple places becomes a maintenance nightmare. Functions let you give a name to a block of code, call it whenever you need it, and pass different inputs each time. They are the fundamental unit of reuse in Python.",
      },
      {
        type: "heading",
        level: 2,
        text: "Defining and calling a function",
      },
      {
        type: "paragraph",
        text: "Use the def keyword followed by the function name, a pair of parentheses, and a colon. The indented block below is the function body.",
      },
      {
        type: "code",
        language: "python",
        filename: "functions.py",
        code: `def greet():
    print("Hello, CodeStar!")

greet()   # Call the function
greet()   # Call it again — reuse!`,
      },
      {
        type: "heading",
        level: 2,
        text: "Parameters and arguments",
      },
      {
        type: "paragraph",
        text: "Parameters are the placeholders in the function definition. Arguments are the actual values you pass when calling the function.",
      },
      {
        type: "code",
        language: "python",
        filename: "parameters.py",
        code: `def greet(name):          # 'name' is a parameter
    print(f"Hello, {name}!")

greet("Alice")            # "Alice" is the argument
greet("Bob")

# Multiple parameters
def add(a, b):
    print(a + b)

add(3, 4)    # 7
add(10, 20)  # 30`,
      },
      {
        type: "heading",
        level: 2,
        text: "Return values",
      },
      {
        type: "paragraph",
        text: "Use return to send a value back to the caller. A function without an explicit return statement returns None.",
      },
      {
        type: "code",
        language: "python",
        filename: "return_values.py",
        code: `def square(n):
    return n * n

result = square(5)
print(result)          # 25
print(square(12))      # 144

# Returning multiple values (as a tuple)
def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 9, 4])
print(lo, hi)          # 1 9`,
      },
      {
        type: "callout",
        variant: "tip",
        text: "Prefer returning values over printing inside functions. Returning keeps the function pure and testable — the caller decides what to do with the result.",
      },
      {
        type: "heading",
        level: 2,
        text: "Default parameter values",
      },
      {
        type: "paragraph",
        text: "You can give parameters a default value so callers don't have to provide them every time.",
      },
      {
        type: "code",
        language: "python",
        filename: "defaults.py",
        code: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))               # Hello, Alice!
print(greet("Bob", "Welcome"))      # Welcome, Bob!

# Default values are evaluated once at definition time
# Avoid mutable defaults like list or dict — use None instead
def append_item(item, collection=None):
    if collection is None:
        collection = []
    collection.append(item)
    return collection`,
      },
      {
        type: "callout",
        variant: "warning",
        text: "Never use a mutable object (list, dict) as a default argument value. Because defaults are created once, all calls share the same object — leading to subtle bugs. Use None and create the object inside the function body.",
      },
      {
        type: "heading",
        level: 2,
        text: "Keyword arguments",
      },
      {
        type: "paragraph",
        text: "You can call a function with arguments in any order by naming them explicitly. This makes calls self-documenting.",
      },
      {
        type: "code",
        language: "python",
        filename: "kwargs.py",
        code: `def describe_course(title, difficulty, lessons):
    print(f"{title} ({difficulty}) — {lessons} lessons")

# Positional
describe_course("Python Fundamentals", "Beginner", 14)

# Keyword (order doesn't matter)
describe_course(difficulty="Intermediate", lessons=22, title="Algorithms")`,
      },
      {
        type: "heading",
        level: 2,
        text: "Scope: local vs global",
      },
      {
        type: "paragraph",
        text: "Scope determines where a variable is visible. Variables created inside a function are local — they only exist while the function is running. Variables created at the module level are global.",
      },
      {
        type: "code",
        language: "python",
        filename: "scope.py",
        code: `message = "I am global"   # global variable

def show():
    message = "I am local"  # local — doesn't affect the global
    print(message)

show()          # I am local
print(message)  # I am global

# Reading a global is fine; reassigning requires 'global' keyword
counter = 0

def increment():
    global counter
    counter += 1

increment()
increment()
print(counter)  # 2`,
      },
      {
        type: "callout",
        variant: "info",
        text: "In practice, relying on global state makes code hard to reason about. Prefer passing values as arguments and returning results instead of mutating globals.",
      },
      {
        type: "heading",
        level: 2,
        text: "Docstrings",
      },
      {
        type: "paragraph",
        text: "A docstring is a string literal placed as the first statement of a function. It documents what the function does, its parameters, and what it returns. Tools like help() and most IDEs display it automatically.",
      },
      {
        type: "code",
        language: "python",
        filename: "docstrings.py",
        code: `def celsius_to_fahrenheit(celsius: float) -> float:
    """Convert a temperature from Celsius to Fahrenheit.

    Args:
        celsius: Temperature in degrees Celsius.

    Returns:
        The equivalent temperature in degrees Fahrenheit.
    """
    return celsius * 9 / 5 + 32

print(celsius_to_fahrenheit(0))     # 32.0
print(celsius_to_fahrenheit(100))   # 212.0

help(celsius_to_fahrenheit)  # Prints the docstring`,
      },
      {
        type: "heading",
        level: 2,
        text: "Putting it together",
      },
      {
        type: "paragraph",
        text: "Here is a small but complete program that uses everything from this lesson: a function with parameters, a default value, a return statement, and a docstring.",
      },
      {
        type: "code",
        language: "python",
        filename: "grade_calculator.py",
        code: `def letter_grade(score: int, passing: int = 60) -> str:
    """Return the letter grade for a numeric score.

    Args:
        score:   The numeric score (0–100).
        passing: Minimum score to pass. Defaults to 60.

    Returns:
        A one-character grade string: A, B, C, D, or F.
    """
    if score < passing:
        return "F"
    elif score < 70:
        return "D"
    elif score < 80:
        return "C"
    elif score < 90:
        return "B"
    return "A"


scores = [95, 82, 74, 61, 45]
for s in scores:
    print(f"{s:>3} → {letter_grade(s)}")`,
      },
    ],
  },
]
