![General Assembly Logo](https://git.generalassemb.ly/avatars/u/5924?s=200)

# Learning Python

You've learned, JavaScript, React, and MongoDB. Getting started with a totally new language doesn't have to be hard. The biggest key is to practice doing something that you *already know* in the context of the new language. This is called a *transfer task*. The more languages and computer science concepts you learn, the easier new ones become to pick up and its mostly syntax, quirks and language-specific tools that become the tricky part.

Now, your task is to *teach yourself* a bit of Python. The goal here isn't to become a Python master, but to explore and learn a bit about a new language.

**All exercises below should be done with Python 3**

## Goals:

By the end of this exercise, you should be able to:

- Create a simple python program
- Execute a simple python program
- Articulate basic differences between Python and other languages you know
- Feel comfortable understanding what is generally happening in most basic python programs

## Installing Python

Your Mac comes with Python 2.7. We want Python 3.

`brew install python3`

Execute the Python REPL with:

`python3`

Execute a Python program with:

`python3 program.py`

## Research: What is Python

Your first task is to research Python to be able to understand some of its basic concepts. Create a README.md file in your homework directory to answer the below questions:

##### What paradigms does Python support?

Python supports different programming paradigm, as given below: Credit ([Quora](https://www.quora.com/What-programming-paradigms-does-python-allow))

1. Object Oriented: Python allows the programmer to create classes and objects.

1. Procedure Oriented: Python groups code into functions. Tasks get executed step-by-step.
Functional: Python disallows side effects. Every statement is treated as a mathematical equation. Parallel processing is possible. Lambda functions or Recursion is used by many developers.

1. Imperative: Computation is performed as a direct change to program state. Used for data manipulation of data structure.

##### What typing discipline does it follow?

It follows dynamic type. ([link](https://pawelmhm.github.io/python/static/typing/type/annotations/2016/01/23/typing-python3.html))

##### Is it a high or low level language?

Python is a high-level language, as it is designed to be human-readable and requires interpreter for the machine to understand and execute. 

##### Does it have built in memory management and garbage collection?

Memory management in Python involves a private heap containing all Python objects and data structures. The management of this private heap is ensured internally by the Python memory manager. The Python memory manager has different components which deal with various dynamic storage management aspects, like sharing, segmentation, preallocation or caching. ([link](https://docs.python.org/2/c-api/memory.html))

##### What languages was Python influenced by?

ABC language ([Wikipedia](https://en.wikipedia.org/wiki/ABC_(programming_language)))

##### Is it a compiled or interpeted language?

It is interpreted.

##### Does it have strong support for functional programming?

No

##### What's the deal with Python 2 vs Python 3?
Short version: Python 2.x is legacy, Python 3.x is the present and future of the language. ([link](https://wiki.python.org/moin/Python2orPython3))

##### How do you open a REPL for Python?
Use python interpreter such as IDLE3

##### How does one execute a Python program?
`python3 <your_script_file.py>`

## Read: The Zen of Python

> The Zen of Python, by Tim Peters
>
> Beautiful is better than ugly.
> Explicit is better than implicit.
> Simple is better than complex.
> Complex is better than complicated.
> Flat is better than nested.
> Sparse is better than dense.
> Readability counts.
> Special cases aren't special enough to break the rules.
> Although practicality beats purity.
> Errors should never pass silently.
> Unless explicitly silenced.
> In the face of ambiguity, refuse the temptation to guess.
> There should be one-- and preferably only one --obvious way to do it.
> Although that way may not be obvious at first unless you're Dutch.
> Now is better than never.
> Although never is often better than *right* now.
> If the implementation is hard to explain, it's a bad idea.
> If the implementation is easy to explain, it may be a good idea.
> Namespaces are one honking great idea -- let's do more of those!

## Hello World

Write a program in `hello_world/hello_world.py` that prints 'Hello, World!' to the standard output (terminal).

## Fizzbuzz

Write a program in `fizzbuzz/fizzbuzz.py` that does the following:

For numbers 1 through 100, print `fizz` if the number is divisible by 3, `buzz` if the number is divisible by 5 and `fizzbuzz` if the number if the number is divisible by both 3 and 5. If the number isn't divisible by 3 or 5, just output the number itself.

The output should look something like `1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 Fizz Buzz 16 17 Fizz...`

## Fibonacci

Write a program in `fibonacci/fib.py` that will output the N-th term of the [Fibonacci sequence](http://en.wikipedia.org/wiki/Fibonacci_number).

For example: `print fib(6)` should output `8`.

## Project Euler Problem 1

Project Euler's first problem is:

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
> Find the sum of all the multiples of 3 or 5 below 1000.

Write the code to complete this in `euler_1/sum_of_natural_numbers.py`

## Conclusion

How does Python compare to other langauges you've used? Which language is is closest to?
